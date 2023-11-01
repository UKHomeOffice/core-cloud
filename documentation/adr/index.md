---
layout: page.njk
title: Core Cloud Architecture Decisions
---

This is a record of important decisions made on Core Cloud.

{% for section in [
    { name: 'Proposals', collectionName: 'proposedAdrs'},
    { name: 'Decisions', collectionName: 'acceptedAdrs'},
    { name: 'Superceded Decisions', collectionName: 'supersededAdrs'},
    { name: 'Rejected Proposals', collectionName: 'rejectedAdrs'}
] %}

### {{ section.name }}
{% if collections[section.collectionName].length === 0 %}No records to display{% endif %} 
{% for item in collections[section.collectionName] 
%}  <ul class="govuk-list">
        <li><a class="govuk-link" href="{{ item.url | url }}">{{ item.data.title }}</a></li>
    </div>
    {% endfor %}

{% endfor %}

### References

Inspired by [MoJ Cloud Platform](https://github.com/ministryofjustice/cloud-platform/blob/734c9470ceca4f2dbbd13b6d23d17ef177779839/architecture-decision-record/README.md).
