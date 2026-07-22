---
title: The Heritage American Articles
description: Articles from The Heritage American.
layout: page
permalink: /heritage-american/articles/
page_class: wide-page
---

# The Heritage American Articles

Essays and practical counsel from The Heritage American.

<div class="resource-index resource-index--three">
  {% assign articles = site.heritage | sort: "date" | reverse %}
  {% for article in articles %}
    <a class="resource-index__item" href="{{ article.url | relative_url }}">
      <span>{{ article.category }}</span>
      <h2>{{ article.title }}</h2>
      <p>{{ article.summary }}</p>
    </a>
  {% endfor %}
</div>