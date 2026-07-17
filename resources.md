---
title: Resources
description: Primary sources and historical resources from the Haynes Institute.
layout: page
---

# Resources

Browse the first shelf of sources and historical entries. Each page can grow into a fuller record with bibliographic notes, excerpts, teaching questions, and links to reliable editions.

<div class="resource-callout">
  <span>Courses</span>
  <h2>Study by Course</h2>
  <p>Move through longer teaching series with ordered lessons, links, and study notes.</p>
  <a class="text-link" href="{{ '/courses/' | relative_url }}">Browse courses</a>
</div>

<div class="resource-callout resource-callout--light">
  <span>Video Library</span>
  <h2>Watch Selected Teaching</h2>
  <p>Browse sermons, lectures, preaching helps, apologetics sessions, and missions videos gathered for steady study.</p>
  <a class="text-link" href="{{ '/videos/' | relative_url }}">Browse videos</a>
</div>

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
