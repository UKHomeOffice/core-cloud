---
layout: page.njk
order: 6
title: Support
description: The different services that Core Cloud offer support for.
excerpt: The different services that Core Cloud offer support for.
tags:
- homepage
eleventyNavigation:
  key: support
  title: Support
---

### Repositories

Core Cloud maintains and supports several public repositories, hosted on GitHub. 

#### Actions

<ul class="govuk-list">
{% for item in actionRepos
%}
    <li><a class="govuk-link" href="{{ item.url }}">{{ item.name }}</a></li>
{% endfor %}
</ul>

#### Configuration

<ul class="govuk-list">
{% for item in configurationRepos
%}
    <li><a class="govuk-link" href="{{ item.url }}">{{ item.name }}</a></li>
{% endfor %}
</ul>

#### Documentation

<ul class="govuk-list">
{% for item in documentationRepos
%}
    <li><a class="govuk-link" href="{{ item.url }}">{{ item.name }}</a></li>
{% endfor %}
</ul>
