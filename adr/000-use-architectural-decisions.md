# ADR 0: Use Architectural Decisions

**Date: 2023-10-31**

## Status

👀 Proposed

## Context

During our work on Core Cloud, we will have to make architectural
decisions about the platform, tools used, and processes adopted.

When making decisions, we should record them somewhere for future reference, to
help us remember why we made them, and to help teams working in related areas
understand why we made them.

We should make our decisions public so that other teams can find them more
easily, and because [making things open makes things better](https://www.gov.uk/guidance/government-design-principles#make-things-open-it-makes-things-better).

## Decision

We will use Architecture Decision Records.

An architecture decision record is a short text file describing a single
decision.

We will keep ADRs in this public repository under adr/[number]-[title].md

We should use a lightweight text formatting language like Markdown.

ADRs will be numbered sequentially. Numbers will not be reused.

The ADR should be succinct.

We will link to other ADRs where relevant.

We will write each ADR with full sentences organised into paragraphs. Bullets are
acceptable only for visual style, not as an excuse for writing sentence fragments.

### Format
The format should be [based on this template](https://github.com/joelparkerhenderson/architecture-decision-record/blob/efd9a6d49422130dfa5fe03f37b3abebab7f938f/locales/en/templates/decision-record-template-by-michael-nygard/index.md)

**Title** These documents have names that are short noun phrases. For example,
"ADR 0: Use Architectural Decisions"

**Status** A decision may be "proposed" if it's still under discussion, or
"accepted" if it is agreed. If a later ADR changes or reverses a decision, it
may be marked as "superseded" with a reference to its replacement.

**Context** This section describes the issue we are trying to solve.
The language in this section is un-opinionated. It is simply describing facts.

**Decision** This section describes our proposed solution. It is stated
in full sentences, with active voice. "We will ..."

**Consequences** This section describes the resulting context, after applying
the decision. All consequences should be listed here, not just the "positive"
ones. A particular decision may have positive, negative, and neutral
consequences, but all affect the team and service in the future.

## Consequences

One ADR describes one significant decision for the service. It should be
something that has an effect on how the platform will run.

Developers and stakeholders can see the ADRs and understand why the platform has been built the way it has.

The motivation behind previous decisions is visible for everyone, present, and future.

Having a central place to record decisions which affect all of our work will
make the sequence of decisions clear, and make it easier for us to refer back to
decisions later on.
