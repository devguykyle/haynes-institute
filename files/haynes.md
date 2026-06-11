---
title: The Haynes File
description: Works and resources related to Lemuel Haynes.
layout: page
permalink: /files/haynes/
---

# The Haynes File

Works and resources related to Lemuel Haynes.

<div class="resource-index">
  {% assign resources = site.resources | where_exp: "resource", "resource.people contains 'Lemuel Haynes'" | sort: "title" %}
  {% for resource in resources %}
    <a class="resource-index__item" href="{{ resource.url | relative_url }}">
      <span>{{ resource.category }}</span>
      <h2>{{ resource.title }}</h2>
      <p>{{ resource.summary }}</p>
    </a>
  {% endfor %}
</div>
