---
layout: product.njk
order: 1
title: Principles
description: Below are our guiding principles
excerpt: What guides us
tags:
- homepage
---
{% from "govuk/components/button/macro.njk" import govukButton %}
<div class="flex-items">
{% for item in collections["principle"] %}
  <div>
    <h2 class="govuk-heading-m govuk-!-font-size-27">{{ item.data.title }}</h2>
    <p class="govuk-body">{{ item.data.excerpt | markdown("inline") }}</p>
    {% set html = ['Learn more<span class="no-presentation"> about the ', item.data.title, ' principle</span>'] | join %}
        {{ govukButton({
          classes: "x-govuk-button--inverse",
          html: html,
          href: item.url,
          isStartButton: false
        }) }}
  </div>
{% endfor %}
</div>
