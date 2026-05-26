---
title: The Haynes Institute
body_class: home
---

<section class="hero">
  <div class="hero__content">
    <p class="eyebrow">Theology &middot; American History &middot; Classical Education</p>
    <h1>A study house for memory, faith, and formation.</h1>
    <p class="hero__lead">The Haynes Institute gathers primary sources, historical sketches, and teaching guides that help readers recover the moral, theological, and civic inheritance of Black America.</p>
    <div class="hero__actions">
      <a class="button button--primary" href="{{ '/resources/' | relative_url }}">Browse Resources</a>
      <a class="button button--secondary" href="{{ '/start-here/' | relative_url }}">Start Here</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="section__header">
    <p class="eyebrow">The Work</p>
    <h2>Recovering sources worth reading slowly.</h2>
  </div>
  <div class="feature-grid">
    <article>
      <h3>Theology</h3>
      <p>Sermons, catechisms, spiritual writings, and careful introductions to the Black church and Christian thought.</p>
    </article>
    <article>
      <h3>American History</h3>
      <p>Accounts of men and women whose work shaped churches, schools, families, public life, and the American conscience.</p>
    </article>
    <article>
      <h3>Classical Education</h3>
      <p>Reading paths, teaching notes, and source collections that train attention, virtue, memory, and judgment.</p>
    </article>
  </div>
</section>

<section class="section section--split">
  <div>
    <p class="eyebrow">Featured Collection</p>
    <h2>Primary sources for the first shelf.</h2>
    <p>The first version of the library begins with foundational texts: Lemuel Haynes, Jupiter Hammon, early AME catechisms, and accounts of leaders whose lives deserve renewed study.</p>
  </div>
  <div class="source-list">
    {% assign featured_resources = site.resources | where: "featured", true | sort: "title" %}
    {% for resource in featured_resources limit: 4 %}
      <a class="source-list__item" href="{{ resource.url | relative_url }}">
        <span>{{ resource.category }}</span>
        <strong>{{ resource.title }}</strong>
      </a>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section__header">
    <p class="eyebrow">Guides</p>
    <h2>Built for readers, teachers, and families.</h2>
  </div>
  <div class="guide-grid">
    {% assign guides = site.guides | sort: "order" %}
    {% for guide in guides limit: 3 %}
      <a class="guide-card" href="{{ guide.url | relative_url }}">
        <span>{{ guide.kicker }}</span>
        <h3>{{ guide.title }}</h3>
        <p>{{ guide.summary }}</p>
      </a>
    {% endfor %}
  </div>
</section>
