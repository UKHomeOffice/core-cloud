---
layout: page.njk
order: 2
title: Account Strategy
excerpt: Organisational structure, accounts & policies
tags:
- homepage
---

### Organize based on security and operational needs
This recomendation is from AWS but we've explicitly called it out so that we can apply our interpretation to it.

<blockquote>"... organize accounts using OUs based on function, compliance requirements, or a common set of controls rather than mirroring your organization’s reporting structure."</blockquote>

Allowing for other AWS recommendations that we will adopt, if we need to expand our organisational structure, we anticipate that the structure will most likely folling the governance i.e. accounts governed by the same TDA committee will sit in the same OU.
### Adopted from [Design principles for your multi-account strategy](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html)

We have chosen to adopt the following recommendation
* [Apply security guardrails to OUs rather than accounts](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html#apply-security-guardrails-to-ous-rather-than-accounts)
* [Avoid deep OU hierarchies](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html#avoid-deep-ou-hierarchies)
* [Start small and expand as needed](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html#start-small-and-expand-as-needed)
* [Avoid deploying workloads to the organization’s management account](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html#avoid-deploying-workloads-to-the-organizations-management-account)
* [Separate production from non-production workloads](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html#separate-production-from-non-production-workloads)
* [Assign a single or small set of related workloads to each production account](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html#assign-a-single-or-small-set-of-related-workloads-to-each-production-account)

### Initial Organisations Structure

* Root
  * Security
    * Prod
    * NotProd
  * Infrastructure
    * Prod
    * NotProd
  * Workloads
    * Prod
    * NotProd
  * Policy Staging
    * _In this example, a set of child OUs mirrors an overall OU structure_
  * Suspended
  * Deployments

### References
[Design principles for your multi-account strategy](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html)
### (TODO)
List how this meets NCSC recommendations or any further required considerations
Add references to AWS docs and other documentation
