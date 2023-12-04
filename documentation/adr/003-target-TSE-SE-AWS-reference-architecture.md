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
During a review of the architecture inherited from the outgoing supplier, we questioned choices regarding account structure, networking, IPAM and the tenant concept. These concerns were addressed in subsequent iterations of the target architecture and shared with AWS for review.

In the course of the review, AWS proposed that we should use one of their reference architecures as a starting point, namely TSE-SE. 

The [Trusted Secure Enclaves - Sensitive Edition (TSE-SE) Reference Architecture](https://github.com/aws-samples/landing-zone-accelerator-on-aws-for-tse-se/blob/main/architecture-doc/readme.md) is a comprehensive, multi-account AWS cloud architecture targeting sensitive level workloads. The architecture was designed in collaboration with national security; defence; national law enforcement; and federal, provincial, and municipal government customers to accelerate compliance with strict and unique security and compliance requirements. The TSE-SE Reference Architecture was designed to help customers address central identity and access management, governance, data security, comprehensive logging, and network design/segmentation in alignment with security frameworks such as NIST 800-53, ITSG-33, FEDRAMP Moderate, CCCS-Medium, IRAP, and other sensitive or medium level security profiles.

We have reviewed the TSE-SE reference architecture and believe it aligns well with Core Cloud goals and objectives. There are some areas that we need to explore in more detail and we expect these areas of the design to be the subject of future ADRs. These include, but are not limited to, IPAM, Shared VPC vs Hub and Spoke, Traffic Inspection, and Ingress.

## Decision

## Consequences


