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

To independently develop and assure features and functionality before general availability, multiple LZA environments are required as part of the teams SDLC. As a result, the team need a way to manage environment specific configuration e.g., workload accounts.

The files used within LZA to manage the configuration of the deployment are YAML format, with the exception being IAM policies that are JSON. These are not required to differ between deployments.

Having discussed this requirement with AWS, their recommendation is to use templating as part of the deployment pipeline to pass in environment specific config.

## Decision

We will implement templating before deployment to CodeCommit.

We will move to having a baseline configuration, with environment specific code to be applied on top.

We will ensure differences in configuration can be validated and approved before merge, and deployment to an environment.

We will ensure that there is a common history on `main` branch across all environments. Templated deployments will be run from the `deploy` branch.

We will ensure that baseline configuration and deployed configuration is visible within CodeCommit to platform engineers.

We will centrally manage access to the CodeCommit repository to prevent access from outside LZA.

We will create a new process for platform engineers to follow to ensure changes are deployed correctly between environments.

## Consequences
Deployment pipeline will need to be updated to allow for templated values to be applied whilst maintaining the baseline configuration. To maintain common GitHub history, templated deployments across all environments will have to use a non-`main` branch.

Restrictions will need to be applied to ensure only LZA config can manage access to the CodeCommit repository.

Environment specific configuration is stored within a private GitHub repository that platform developers can manage.

Environment specific configuration will be distributed to CodeCommit repositories in all environments, even if not relevant to that environment.

As features are propagated between environments, a further process is required to manage the deployment of changes between environments.

This process will only manage the templating of LZA YAML files, to replace other files, e.g. CloudFormation templates, IAM Policies, a complete replacement file will need to be provided and configuration updated to point to it.

Additional tooling needs to be understood and adopted by the team.