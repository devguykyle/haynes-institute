---
title: The Jackson File
description: Works and resources related to Joseph H. Jackson.
layout: page
permalink: /files/jackson/
---

# The Jackson File

Works and resources related to Joseph H. Jackson.

<div class="resource-index">
  {% assign resources = site.resources | where_exp: "resource", "resource.people contains 'Joseph H. Jackson'" | sort: "title" %}
  {% for resource in resources %}
    <a class="resource-index__item" href="{{ resource.url | relative_url }}">
      <span>{{ resource.category }}</span>
      <h2>{{ resource.title }}</h2>
      <p>{{ resource.summary }}</p>
    </a>
  {% endfor %}
</div>
