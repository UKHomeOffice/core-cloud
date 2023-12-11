---
layout: page.njk
order: 3
title: Target Architecture
excerpt: Comprehensive, multi-account AWS cloud architecture targeting sensitive level workloads
tags:
- homepage
---

We are currently in the process of authoring and approving several ADRs that will contribute to the target architecture of Core Cloud. As such the information here should be considered as an expression of our intent until our ADRs are approved, at which time we will revise this document.

We have chosen to target AWS' [Trusted Secure Enclaves -  Sensitive Edition (TSE-SE) Reference Architecture](https://github.com/aws-samples/landing-zone-accelerator-on-aws-for-tse-se/blob/main/architecture-doc/readme.md).

### Choices
* ~~Hub and Spoke (star) topology~~
Shared VPC
* ~~Separate Hubs (Network Account) for production and non-production~~
Shared transit gateway in network account
* Customers will receive one account per required environment
* Shared ingress, egress, and inspection
* Management of VPCs and routing will remain the repsonsibility of Core Cloud
* ~~VPC will not be a set size~~
Shared VPCs would be a set size
* No overlapping IP ranges
* ~~VPC peering can be used to peer VPC within the same account~~


### Additional considerations
* Will all external ingress require NGFWs?
* Can east/west traffic between accounts be managed by security groups in the shared VPC?

### (TODO)
List how this meets NCSC recommendations or any further required considerations

### Diagrams
![Shared VPC Architecture](https://raw.githubusercontent.com/aws-samples/landing-zone-accelerator-on-aws-for-tse-se/35a3f853555eeb9231fc781cbeeef018b67dfb88/architecture-doc/images/sensitive-central.png "Shared VPC Architecture")

![NACL and Security Group Patterns](https://raw.githubusercontent.com/aws-samples/landing-zone-accelerator-on-aws-for-tse-se/35a3f853555eeb9231fc781cbeeef018b67dfb88/architecture-doc/images/TSE-SE4.png "NACL and Security Group Patterns")
