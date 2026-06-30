---
title: The Heritage American
description: A publication of The Haynes Institute for practical Christian wisdom in the civic square.
layout: page
permalink: /heritage-american/
---

<section class="publication-hero">
  <p class="eyebrow">A Publication of The Haynes Institute</p>
  <h1>The Heritage American</h1>
  <p>The Heritage American is a metropolitan publication for Christians seeking to live faithfully in the civic square with wisdom, courage, and practical obedience.</p>
</section>

<section class="publication-section">
  <h2>About the Publication</h2>
  <div class="feature-grid">
    <article>
      <h3>Practical Civic Wisdom</h3>
      <p>Advice for engaging neighbors, institutions, work, family, and public life without surrendering Christian conviction.</p>
    </article>
    <article>
      <h3>Actionable Insight</h3>
      <p>Readable essays that move from principle to practice, helping readers know what faithfulness can look like this week.</p>
    </article>
    <article>
      <h3>Tips and Tools</h3>
      <p>Simple resources for household order, Christian education, fellowship, stewardship, local service, and church life.</p>
    </article>
  </div>
</section>

<section class="publication-section">
  <h2>Latest Articles</h2>
  <div class="resource-index">
    {% assign articles = site.heritage | sort: "date" | reverse %}
    {% for article in articles %}
      <a class="resource-index__item" href="{{ article.url | relative_url }}">
        <span>{{ article.category }}</span>
        <h2>{{ article.title }}</h2>
        <p>{{ article.summary }}</p>
      </a>
    {% endfor %}
  </div>
</section>

<section class="publication-section">
  <h2>Resources</h2>
  <div class="tool-list">
    <a class="tool-list__item" href="{{ '/assets/downloads/standard-household-budget.pdf' | relative_url }}">
      <span>Download</span>
      <strong>Standard Household Budget Worksheet</strong>
    </a>
  </div>
</section>
