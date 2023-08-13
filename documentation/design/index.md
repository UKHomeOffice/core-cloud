---
layout: sub-navigation.njk
title: Platform Design
excerpt: Design documentation for the platform
eleventyNavigation:
  key: design
  title: Platform Design
  order: 2
---
<div class="flex-items">
{% for item in collections["design"] %}
  <div>
    <h2 class="govuk-heading-m govuk-!-font-size-27">{{ item.data.title }}</h2>
    <p class="govuk-body">{{ item.data.description | markdown("inline") }}</p>
    <p class="govuk-body"><a class="govuk-link govuk-!-font-weight-bold" href="{{ item.url | url }}">Learn about our {{ item.data.title | lower }}</a></p>
  </div>
{% endfor %}
</div>
