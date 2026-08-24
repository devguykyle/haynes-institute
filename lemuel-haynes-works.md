---
title: Lemuel Haynes Works
description: Works by Lemuel Haynes available from The Haynes Institute.
layout: page
permalink: /lemuel-haynes-works/
---

# Lemuel Haynes Works

Sermons, excerpts, and theological writings by Lemuel Haynes available from The Haynes Institute.

<div class="resource-index">
  {% assign resources = site.resources | where_exp: "resource", "resource.people contains 'Lemuel Haynes'" | sort: "title" %}
  {% for resource in resources %}
    <a class="resource-index__item" href="{{ resource.url | relative_url }}">
      <span>{{ resource.category }}</span>
      {% include author-badge.html author="Lemuel Haynes" %}
      <h2>{{ resource.title }}</h2>
      <p>{{ resource.summary }}</p>
    </a>
  {% endfor %}
</div>