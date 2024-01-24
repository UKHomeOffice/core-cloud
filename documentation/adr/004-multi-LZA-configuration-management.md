---
layout: page.njk
status: Proposed
date: git Created
tags:
  - adr
order: 4
title: 004 - Enable Multi LZA Configuration 
---

**Date: {{ page.date.toISOString().substring(0,10) }}**

**Status: {{ status }}**

## Context

As a result of needing multiple LZA deployments as part of the SDLC of the platform, the products and the ability to assure them, we need a way to be able to manage the environment specific configuration e.g. Workload Accounts.

The files used within LZA to manage the configuration of the deployment are YAML format, with the exception of IAM policies which are JSON format but aren't currently likely to differ between deployments.

Having discussed this requirement with AWS, their recommendation is to use templating as part of the deployment pipeline to pass in environment specific config.

## Decision

We will implement templating before code is deployed to CodeCommit.

We will move to a baseline configuration that is not environment specific and all environments will require their environment specific code to be deployed on top of this configuration.

We will ensure that differences in configuration can be validated and approved before merge and deployment to an environment.

We will ensure that baseline configuration and deployed configuration is visible within CodeCommit to platform engineers.


## Consequences
Deployment pipeline will need to be updated to allow for templated values to be applied whilst maintaining the baseline configuration. This change impacts the way that git history is currently maintained, however will allow us to differentiate between baseline and deployed configuration.

Permissions will need to be applied to Workload accounts to ensure that no access exists to view the deployment CodeCommit repository.

Environment specific configuration is held within private GitHub repository that platform developers can manage.

As features are propagated between environments, a further process is required to manage the deployment between environments.

Additional tooling needs to be understood and adopted by the team.



