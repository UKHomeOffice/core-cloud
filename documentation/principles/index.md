---
layout: product.njk
order: 1
title: Principles
description: Core Cloud aims to be a high quality, easy to operate, strategic platform.
excerpt: Core Cloud aims to be a high quality, easy to operate, strategic platform.
tags:
- homepage
eleventyNavigation:
  key: principles
  title: Principles
---
{% from "govuk/components/button/macro.njk" import govukButton %}
<div class="flex-items">

We have {{ collections["principle"].length }} fundamental principles that we use to robustly evaluate the decisions we make.

{% for item in collections["principle"] %}
  <div>
    <h2 class="govuk-heading-m govuk-!-font-size-27">{{ item.data.title }}</h2>
    <p class="govuk-body">{{ item.data.excerpt | markdown("inline") }}</p>
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
