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

One of our principles is 'Strategic First', which means we should defer to the Home Office strategic solution by default.

This ADR is only concerned with our platform team and is not a decision or limitation for customer teams.

OpenID Connect (OIDC) is an open authentication protocol that is supported by AWS and GitHub.

There needs to be a process where trust can be revoked at short notice in case of any emergent security concerns.

## Decision

We will use GitHub to maintain our infrastructure and tooling code.

We will use OpenId Connect to establish a trusted relationship.

We will set up one OIDC in each LZA management account and scope IAM roles to our code repository.

We will update the CodeCommit repositories from GitHub in a write-only way.

## Consequences

There is a trust relationship between GitHub and AWS for use by the platform team. 

Because this is for the platform team use only, additional IDPs would need to be created for customer use, which is out of scope of this ADR.

A new attack vector is created in our management account.

IAM Roles are needed to restrict access from specific Users, GitHub Organisations, Repositories and Branches. 

The obligation to be correctly configured belongs to role creators and not OpenID Connect.
