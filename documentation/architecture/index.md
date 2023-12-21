---
layout: page.njk
order: 3
title: Target Architecture
excerpt: Comprehensive, multi-account AWS cloud architecture targeting sensitive level workloads
tags:
- homepage
---

We are currently in the process of authoring and approving several ADRs that will contribute to the target architecture of Core Cloud. As such the information here should be considered as an expression of our intent until our ADRs are approved, at which time we will revise this document.

## Reference Architecture

We have chosen to accept AWS' recommendation to use their [Trusted Secure Enclaves -  Sensitive Edition Reference Architecture (TSE-SE)](https://github.com/aws-samples/landing-zone-accelerator-on-aws-for-tse-se/blob/main/architecture-doc/readme.md). TSE-SE is a comprehensive, multi-account AWS cloud architecture targeting sensitive level workloads. The architecture was designed in collaboration with national security; defence; national law enforcement; and federal, provincial, and municipal government customers to accelerate compliance with strict and unique security and compliance requirements. The TSE-SE Reference Architecture was designed to help customers address central identity and access management, governance, data security, comprehensive logging, and network design/segmentation in alignment with security frameworks such as NIST 800-53, ITSG-33, FEDRAMP Moderate, CCCS-Medium, IRAP, and other sensitive or medium level security profiles.


## Target Architecture Summary
The central features of the Target Architecture are as follows:

* **AWS Organization with multiple-accounts:** This provides consolidated billing, account grouping using organizational units, and facilitates the deployment of pan-organizational guardrails such as API logging with CloudTrail and preventative controls using AWS Service Control Policies (SCPs). Separate AWS accounts provide strong control-plane and data-plane isolation between workloads and/or environments, as if they were owned by different AWS customers.

* **Preventative security controls:** Protect the architecture, prevent the disablement of guardrails, and block undesirable user behavior. These are implemented using AWS Service Control Policies (SCPs).

* **Encryption:** AWS Key Management Service (KMS) with customer-managed keys is used to encrypt data stored at rest using FIPS 140-2 validated encryption, whether in S3 buckets, EBS volumes, RDS databases, or other AWS services storing data. Data in-transit is protected using TLS 1.2 or higher encryption.

* **Centralized, isolated networking:** AWS Virtual Private Clouds (VPCs) are used to create data-plane isolation between workloads, centralized in a shared-network account. Centralization enables strong segregation of duties and cost optimization. Connectivity to on-premises environments, internet egress, shared resources and AWS APIs are mediated at a central point of ingress/egress via the use of Transit Gateway, Site-to-Site VPN, Next-Gen Firewalls, and AWS Direct Connect (where applicable). The architecture prescribes moving AWS public API endpoints into the private VPC address space, using centralized endpoints for cost efficiency.

* **Segmentation and Separation:** Not only does the architecture provide strong segmentation and separation between workloads belonging to different stages of the SDLC cycle, or between different IT administrative roles (like between networking, ingress/egress firewalls, and workloads), it offers a strong network zoning architecture, micro-segmenting the environment by wrapping every instance or component in a stateful firewall which is enforced in the hardware of the AWS Nitro System. All flows are tightly enforced, with lateral movement prevented between applications, tiers within an application, and nodes in a tier of an application unless explicitly allowed. Further, routing is prevented between Dev, Test, and Prod.

* **Centralized DNS management:** Amazon Route 53 is used to provide unified public and private hosted zones across the cloud environment. Inbound and Outbound Route 53 Resolvers extend this unified view of DNS to on-premises networks.

* **Centralized logging:** CloudTrail logs are enabled organization-wide to provide full control plane auditability across the cloud environment. CloudWatch Logs, AWS's cloud native logging service is used to capture a wide variety of logs including OS and application logs, VPC flow logs, and DNS logs which are then centralized and deletion is prevented using SCPs. The architecture prescribes comprehensive log collection and centralization across AWS services and accounts.

* **Centralized security monitoring:** Compliance drift and security threats are surfaced across the customer's AWS organization via the automatic deployment of a multitude of different types of detective security controls. This includes enabling the multitude of AWS security services in every account in the customers AWS organization including Amazon GuardDuty, AWS Security Hub, AWS Config, AWS Firewall Manager, Amazon Macie, Access Analyzer, CloudWatch Alarms with control and visibility delagated across the multi-account environment to a single central security tooling account for easy organization-wide visibility to all security findings and compliance drift. In addition, the security account has been provided View-Only access across the organization (including access to each account's CloudWatch console) to enable investigation during an incident. View-Only access is different from Read-Only access in that it does not provide any access to any data.

* **Single Sign-On:** AWS SSO is used to provide centralized IAM role assumption into AWS accounts across the organization for authorized principals. An organization's existing identities can be sourced from a customer's existing Active Directory identity store or other 3rd party identity provider (IdP). AWS enables MFA enforcement using Authenticator apps, Security keys and built-in authenticators, supporting WebAuthn, FIDO2, and U2F based authentication and devices.

* **Centralized ingress/egress IaaS inspection:** The architecture provides centralized ingress/egress for IaaS based workloads, enabling us customers to decide if native AWS ingress/egress firewall inspection services meet their requirements, or to augment those capabilities with 3rd party firewall appliances. The architecture supports starting with an AWS firewall, switching to a 3rd party firewall, or a combination of ingress/egress firewall technologies.

* **Automation:** Automation is a critical component of the architecture. It ensures guardrails are consistently applied as new AWS accounts are added to the organization as new teams and workloads are brought onboard. It remediates compliance drift and provides guardrails in the root organization account.

The following diagram illustrates the target architecture:

![Shared VPC Architecture](https://raw.githubusercontent.com/aws-samples/landing-zone-accelerator-on-aws-for-tse-se/35a3f853555eeb9231fc781cbeeef018b67dfb88/architecture-doc/images/sensitive-central.png "Shared VPC Architecture")

### Authorization and Authentication

#### Overview
TSE-SE makes extensive use of AWS authorization and authentication primitives from the Identity and Access Management (IAM) service as a means to enforce the guardrail objectives of the TSE-SE Architecture, and govern access to the set of accounts that makes up the organization.

#### Break Glass Accounts
The Organization Management account is used to provide break glass access to AWS accounts within the organization. Access to AWS accounts within the organization is provided through AWS SSO. We will create 2 IAM break glass users within the Organization Management account. These users would be leveraged in exceptional circumstances to gain access to the Organization Management account or sub-accounts within the organization by assuming a role. Use cases for break glass access include failure of the organizations IdP, an incident involving the organizations IdP, a failure of AWS SSO, or a disaster involving the loss of an organization’s entire cloud or IdP teams.

Access to the break glass IAM users must be tightly controlled, yet accessible via a predefined and strict process. This process will be defined in a way that will require 2 people to access the break glass credentials.

#### Multi-Factor Authentication (MFA)

MFA will be enabled with the following considerations. 

* MFA will be required for all users
* Virtual MFA is acceptable
* IAM break glass users require a dedicated MFA device
* MFA devices for all account root users including the management account and the IAM break glass users should be securely stored, with well defined access policies and procedures

#### Control Plane Access via AWS SSO
AWS SSO will be provisioned in the Organization Management account. SSO administration is delegated to the Operations account, to further minimize access to the highly restricted management account. Once delegation is in place, the location of the AWS SSO identity source may also be delegated. This will enable AWS SSO to directly connect an Identity Provider (IdP) in the Operations account.

#### Strategic Identity Provider (strategic IdP)
Eventually AWS SSO will be connected to the strategic IdP but the interim solution is to manage users and groups in AWS IAM. This will also include any user attributes that may be required for Attribute-based access control (ABAC) policies. Careful consideration and close collaboration with the strategic identity team will be needed to ensure a successful transition when the strategic IdP becomes available. The expectation is that attributes and groups will be remapped to the new unique identifiers from the strategic IdP. 

### Networking

#### Overview
The networking is built on a principle of centralized on-premises and internet ingress/egress, while enforcing data plane isolation between workloads in different environments. Connectivity to on-premises environments, internet egress, shared resources and AWS APIs are mediated at a central point of ingress/egress via the use of a Transit Gateway. Consider the following overall network diagram:

![Network Architecture](https://raw.githubusercontent.com/aws-samples/landing-zone-accelerator-on-aws-for-tse-se/35a3f853555eeb9231fc781cbeeef018b67dfb88/architecture-doc/images/network_architecture.drawio.png "Network Architecture")

#### Perimeter
The perimeter VPC hosts our perimeter security services. The Perimeter VPC is used to control the flow of traffic between AWS Accounts and external networks for IaaS workloads: both public and in some cases private.

This VPC hosts AWS Network Firewall and/or 3rd party Next Generation Firewalls (NGFW) that provide perimeter security services including virus scanning / malware protection, Intrusion Protection services, TLS Inspection and Web Application Firewall protection.

Note that this VPC is in its own isolated account, separate from Shared Network, in order to facilitate networking and security 'separation of duties'. Internal networking teams may administer the cloud networks in Shared Network without being granted permission to administer the security perimeter itself.

#### Workload VPCs
The workload VPCs are where line of business applications ultimately reside, segmented by environment (Dev, Test, Prod, etc).

![Workload VPC](https://raw.githubusercontent.com/aws-samples/landing-zone-accelerator-on-aws-for-tse-se/35a3f853555eeb9231fc781cbeeef018b67dfb88/architecture-doc/images/workload.drawio.png "Workload VPC")

Security groups are recommended as the primary data-plane isolation mechanism between applications that may coexist in the same VPC. It is anticipated that unrelated applications would coexist in their respective tiers without ever permitting east-west traffic flows.

The following subnets will be defined:

* **TGW subnet:** This subnet hosts the elastic-network interfaces for the TGW attachment. A /27 subnet is sufficient.
* **Web subnet:** This subnet hosts front-end or otherwise 'client' facing infrastructure. A /20 or larger subnet is recommended to facilitate auto-scaling.
* **App subnet:** This subnet hosts app-tier code (EC2, containers, etc). A /19 or larger subnet is recommended to facilitate auto-scaling.
* **Data subnet:** This subnet hosts data-tier code (RDS instances, ElastiCache instances). A /21 or larger subnet is recommended.
* **Mgmt subnet:** This subnet hosts bastion or other management instances. A /21 or larger subnet is recommended.

##### Security Groups
Security group egress rules are often used in 'allow all' mode (0.0.0.0/0), with the focus primarily being on consistently allow listing required ingress traffic. This ensures day to day activities like patching, access to Windows DNS, and to directory services can function without friction. It is expected as an application is promoted through the SDLC cycle from Dev through Test to Prod, these security groups will be further refined by the customer to further reduce privilege, as appropriate. It is expected that each customer will review and tailor their Security Groups based on their own security requirements.

##### NACLs
Network Access-Control Lists (NACLs) are sparingly as a defense-in-depth measure in this architecture. The architecture uses NACLs as a segmentation mechanism for Data subnets; i.e. deny all inbound traffic to such a subnet except that which originates in the App subnet for the same VPC.

![NACL and Security Group Patterns](https://raw.githubusercontent.com/aws-samples/landing-zone-accelerator-on-aws-for-tse-se/35a3f853555eeb9231fc781cbeeef018b67dfb88/architecture-doc/images/TSE-SE4.png "NACL and Security Group Patterns")

### Cost attribution
Workload accounts will be directly responsible for the cost of the resources they provision. A tagging strategy will be created that incorporates the tagging strategy defined by FinOps and compliance will be enforced or monitored by applying the relevant tag policies.

Where shared resources exist we will endeavour to use proportional distribution logic to attribute cost fairly. For example, [How-to chargeback shared services: An AWS Transit Gateway example](https://aws.amazon.com/blogs/aws-cloud-financial-management/gs-chargeback-shared-services-an-aws-transit-gateway-example/)
