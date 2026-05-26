---
title: Resources
description: Primary sources and historical resources from the Haynes Institute.
layout: page
---

# Resources

Browse the first shelf of sources and historical entries. Each page can grow into a fuller record with bibliographic notes, excerpts, teaching questions, and links to reliable editions.

<div class="resource-index">
  {% assign resources = site.resources | sort: "title" %}
  {% for resource in resources %}
    <a class="resource-index__item" href="{{ resource.url | relative_url }}">
      <span>{{ resource.category }}</span>
      <h2>{{ resource.title }}</h2>
      <p>{{ resource.summary }}</p>
    </a>
  {% endfor %}
</div>
