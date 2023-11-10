---
layout: page.njk
status: Accepted
date: git Created
tags:
  - adr
order: 2
title: 002 - Trust GitHub through OpenID Connect for platform development 
---

**Date: {{ page.date.toISOString().substring(0,10) }}**

**Status: {{ status }}**

## Context

We have decided in [ADR 1](001-use-aws-landing-zone-accelerator.md) to use LZA.

Each LZA deployment needs source code in a CodeCommit repository in the same account.

We have multiple root accounts each containing an LZA deployment, and we want to be able to manage those environments from a single source code repository.

We need to identify a platform for our developers to maintain our infrastructure and tooling code.

Using CodeCommit is not desirable as we would have to share repositories across different root accounts.

GitHub Enterprise is the Home Office's strategic developer platform.

Other platforms such as GitLab, Code Commit and Bitbucket are also used in the Home Office.

This ADR is only concerned with our platform team and is not a decision or limitation for customer teams.

OpenID Connect (OIDC) is an open authentication protocol that is supported by AWS and GitHub.

## Decision

We will use GitHub to maintain our infrastructure and tooling code.

We will use OpenId Connect to establish a trusted relationship.

We will set up one OIDC in each LZA management account and scope IAM roles to our code repository.

We will create a process to manage the data flow from GitHub too CodeCommit that will follow 'principle of least privilege'

## Consequences

There is a trust relationship between GitHub and the AWS management account. 

A new attack vector is created in our management account.

IAM Roles are needed to allow access from specific GitHub Organisations, Repositories, and Branches. 

The obligation to be correctly configured belongs to role creators and not OpenID Connect.

We have to manage access to repositories in GitHub rather than CodeCommit or through AWS

Developers will not have visibility of the management account for example to view pipeline status.
