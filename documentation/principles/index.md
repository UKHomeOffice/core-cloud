---
layout: sub-navigation.njk
title: Principles
description: Core Cloud aims to be a high quality, easy to operate, strategic platform.
tags:
- homepage
eleventyNavigation:
  key: principles
  title: Principles
  order: 1
---
{% from "govuk/components/button/macro.njk" import govukButton %}

## Why principles are important
These {{ collections["principle"].length }} principles form part of our culture and ways of working. \
They guide and shape our approach, and we use them to robustly evaluate the decisions we make. \
Where we deviate from these principles there must be justification, discussion and consensus. \
Conversely these principles are a living document, and they are open to challenge, criticism and [contribution](https://github.com/UKHomeOffice/core-cloud).


<div class="flex-items">

{% for item in collections["principle"] %}
  <div>
    <h2 class="govuk-heading-m govuk-!-font-size-27">{{ item.data.title }}</h2>
    <p class="govuk-body">{{ item.data.description | markdown("inline") }}</p>
    {% set html = ['Learn more<span class="no-presentation"> about the ', item.data.title, ' principle</span>'] | join %}
        {{ govukButton({
          classes: "x-govuk-button--inverse",
          html: html,
          href: item.url | url,
          isStartButton: false
        }) }}
  </div>
{% endfor %}
</div>
