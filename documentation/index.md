---
homepage: true
layout: product.njk
order: 1
title: Core Cloud Documentation
description: Documentation for the Home Office Core Cloud Platform
---
<div class="flex-items">
{% for item in collections["homepage"] %}
  <div>
    <h2 class="govuk-heading-m govuk-!-font-size-27">{{ item.data.title }}</h2>
    <p class="govuk-body">{{ item.data.excerpt | markdown("inline") }}</p>
    <p class="govuk-body"><a class="govuk-link govuk-!-font-weight-bold" href="{{ item.url | url }}">Learn about our {{ item.data.title | lower }}</a></p>
  </div>
{% endfor %}
<div></div><!-- Required to ensure alignment in flex layout -->
</div>
