---
layout: page.njk
status: Proposed
date: git Created
tags:
  - adr
order: 3
title: 003 - Target the TSE-SE Reference Architecture 
---

**Date: {{ page.date.toISOString().substring(0,10) }}**

**Status: {{ status }}**

## Context

In the course of an existing architectural review with AWS, they proposed that we should use one of their reference architectures as a starting point, namely TSE-SE. 

The [Trusted Secure Enclaves - Sensitive Edition (TSE-SE) Reference Architecture](https://github.com/aws-samples/landing-zone-accelerator-on-aws-for-tse-se/blob/main/architecture-doc/readme.md) is a comprehensive, multi-account AWS cloud architecture targeting sensitive level workloads. The architecture was designed in collaboration with national security; defence; national law enforcement; and federal, provincial, and municipal government customers to accelerate compliance with strict and unique security and compliance requirements. The TSE-SE Reference Architecture was designed to help customers address central identity and access management, governance, data security, comprehensive logging, and network design/segmentation in alignment with security frameworks such as NIST 800-53, ITSG-33, FEDRAMP Moderate, CCCS-Medium, IRAP, and other sensitive or medium level security profiles.

We have reviewed the TSE-SE reference architecture and believe it aligns well with Core Cloud goals and objectives. There are some areas that we need to explore in more detail and we expect these areas of the design to be the subject of future ADRs.

## Decision

## Consequences


