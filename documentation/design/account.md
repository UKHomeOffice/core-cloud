---
layout: sub-navigation.njk
title: Account Strategy
description: Organisational structure, accounts & policies
tags:
  - design
eleventyNavigation:
  parent: design
---

### Organize based on security and operational needs
This recomendation is from AWS but we've explicitly called it out so that we can apply our interpretation to it.

>"... organize accounts using OUs based on function, compliance requirements, or a common set of controls rather than mirroring your organization’s reporting structure."

Allowing for other AWS recommendations that we will adopt, if we need to expand our organisational structure, we anticipate that the structure will most likely follow the governance i.e. accounts governed by the same TDA committee will sit in the same OU.
### AWS [Design principles for your multi-account strategy](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html)

We have chosen to adopt the following recommendations
* [Apply security guardrails to OUs rather than accounts](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html#apply-security-guardrails-to-ous-rather-than-accounts)
* [Avoid deep OU hierarchies](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html#avoid-deep-ou-hierarchies)
* [Start small and expand as needed](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html#start-small-and-expand-as-needed)
* [Avoid deploying workloads to the organization’s management account](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html#avoid-deploying-workloads-to-the-organizations-management-account)
* [Separate production from non-production workloads](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html#separate-production-from-non-production-workloads)
* [Assign a single or small set of related workloads to each production account](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html#assign-a-single-or-small-set-of-related-workloads-to-each-production-account)

### Initial Organisations Structure

Our initial target is similar to the AWS example [Basic organization with CI/CD as a separate function](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/basic-organization.html#:~:text=with%20infrastructure%20services-,Basic%20organization%20with%20CI/CD%20as%20a%20separate%20function,-This%20example%20incorporates).

We have added the [Policy Staging OU](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/policy-staging-ou.html) but removed the [Sandbox OU](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/sandbox-ou.html) as we do not intend to target these types of accounts at launch.

![Organisation structure](../../assets/images/Organisations.png)

<div class="no-presentation">

* Root
  * Security
    * Prod
  * Infrastructure
    * Prod (see [AWS recommendation](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/infrastructure-ou-and-accounts.html#:~:text=In%20most%20cases,or%20Test%20OU%29.))
  * Deployments
    * Prod
  * Workloads
    * Prod
    * Test
    * Dev
  * Policy Staging
    * _In this example, a set of child OUs mirrors an overall OU structure_

</div>

We expect that the following OUs will be required in the near future and will consider them soon
  * [Suspended](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/suspended-ou.html)
  * [Exceptions](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/exceptions-ou.html)
  * [Business Continuity](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/business-continuity-ou.html)

### References
[Design principles for your multi-account strategy](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html)
