---
title: Guides
description: Reading paths and teaching guides from the Haynes Institute.
layout: page
---

# Guides

These guides are designed to help readers move from curiosity to sustained study.

<div class="guide-grid">
  {% assign guides = site.guides | sort: "order" %}
  {% for guide in guides %}
    <a class="guide-card" href="{{ guide.url | relative_url }}">
      <span>{{ guide.kicker }}</span>
      <h2>{{ guide.title }}</h2>
      <p>{{ guide.summary }}</p>
    </a>
  {% endfor %}
</div>
