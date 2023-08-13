---
layout: sub-navigation.njk
title: Available, reliable and testable
description: We aim to be a mature platform with no surprises.
tags:
- principle
eleventyNavigation:
  parent: principles
  order: 1
---
**We design for automation.** \
Platform operations that are repeatable and are required to be run often should be automated. \
Where things can't be automated we aim for [runnable documentation](https://github.blog/2015-10-06-runnable-documentation/).

**We make small, frequent changes** using modern pipelines with validation built in. \
Our CI/CD pipelines should contain every step required to build, test and release a change to production and prove it works.

**We make reversible changes** using modern deployment practices like [blue-green](https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/bluegreen-deployments.html).

**Blast-radius reduction and redundancy are factored in** to our design decisions.

**Observability is part of every change** we make.\
Knowing the state of the platform and having alerting means we can ensure everything is running as it should be, and take preventative measures.

**Disaster recovery is part of every change** we make. \
We have robust operational procedures to ensure our [recovery point](https://en.wikipedia.org/wiki/Disaster_recovery#Recovery_Point_Objective) and [recovery time objectives](https://en.wikipedia.org/wiki/Disaster_recovery#Recovery_Time_Objective) are met. \
We use [IaC](https://en.wikipedia.org/wiki/Infrastructure_as_code) to ensure we can quickly, easily and repeatably recover to a known state. 
