---
title: The Hammon File
description: Works and resources related to Jupiter Hammon.
layout: page
permalink: /files/hammon/
---

# The Hammon File

Works and resources related to Jupiter Hammon.

<div class="resource-index">
  {% assign resources = site.resources | where_exp: "resource", "resource.people contains 'Jupiter Hammon'" | sort: "title" %}
  {% for resource in resources %}
    <a class="resource-index__item" href="{{ resource.url | relative_url }}">
      <span>{{ resource.category }}</span>
      <h2>{{ resource.title }}</h2>
      <p>{{ resource.summary }}</p>
    </a>
  {% endfor %}
</div>
