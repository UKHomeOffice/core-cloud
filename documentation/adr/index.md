---
layout: page.njk
order: 5
title: Platform ADRs
description: Where we record significant architectural decisions.
excerpt: Where we record significant architectural decisions.
tags:
  - homepage
eleventyNavigation:
  key: adrs
  title: Platform ADRs
---

{% for section in [
    { name: 'Proposals', collectionName: 'proposedAdrs'},
    { name: 'Decisions', collectionName: 'acceptedAdrs'},
    { name: 'Superceded Decisions', collectionName: 'supersededAdrs'},
    { name: 'Rejected Proposals', collectionName: 'rejectedAdrs'}
] %}
{% if collections[section.collectionName].length > 0 %}

### {{ section.name }}
<ul class="govuk-list">
{% for item in collections[section.collectionName] 
%}
    <li><a class="govuk-link" href="{{ item.url | url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>
{% endif %}
{% endfor %}

### References

Inspired by [MoJ Cloud Platform](https://github.com/ministryofjustice/cloud-platform/blob/734c9470ceca4f2dbbd13b6d23d17ef177779839/architecture-decision-record/README.md).
