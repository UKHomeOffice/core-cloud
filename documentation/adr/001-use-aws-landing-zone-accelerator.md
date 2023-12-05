---
layout: page.njk
status: Accepted
date: git Created
tags:
  - adr
order: 1
title: 001 - Landing Zone Accelerator
---

**Date: {{ page.date.toISOString().substring(0,10) }}**

**Status: {{ status }}**

## Context

A landing zone is a well-architected, multi-account AWS environment that is scalable and secure. This is a starting point from which we can quickly launch and deploy workloads and applications with confidence in your security and infrastructure environment. Building a landing zone involves technical and business decisions to be made across account structure, networking, security, and access management in accordance with our organization’s growth and business goals for the future.

When using AWS at scale, we want to look to AWS for prescriptive guidance and an approach for establishing our environment.

Building a landing zone and embedding AWS best practices into it can be time consuming and challenging to operate and maintain. We want to choose a tool that will enable us to automate repeatable stable landing zones at scale and at pace whilst minimising our exposure to the burden of maintaining such tools and configuration.

## Decision

We will use [Landing Zone Accelerator on AWS](https://aws.amazon.com/solutions/implementations/landing-zone-accelerator-on-aws/)


## Consequences
Our toolset for delivering a landing zone will be supported by AWS and be built on and support AWS best practices.

LZA config will have to exist in AWS CodeCommit.

LZA Uses CloudFormation stacks

If we have complex requirements that LZA doesn't support we will need to engage the LZA team with feature requests or roll our own customization.

LZA is deployed through CodePipeline and CodeBuild using AWS’s installer.

Observability will require access to CodeCommit, CodeBuild, CodePipeline and centralised logging.

OOB configuration takes approx. 1 hour to run. Incremental changes require a full run and the run time will extend as the solution is configured.

Troubleshooting and recovering from failed deployments can be difficult as stacks are deployed across multiple accounts.