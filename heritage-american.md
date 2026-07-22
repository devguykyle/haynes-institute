---
title: The Heritage American
description: A publication of The Haynes Institute for practical Christian wisdom in the civic square.
layout: page
permalink: /heritage-american/
page_class: wide-page
video_modal: true
---

<section class="publication-hero">
  <p class="eyebrow">A Publication of The Haynes Institute</p>
  <h1>The Heritage American</h1>
  <p>The Heritage American is a metropolitan publication for Christians seeking to live faithfully in the civic square with wisdom, courage, and practical obedience.</p>
</section>

<figure class="publication-cover"><img src="{{ '/assets/images/heritage-american-cover.png' | relative_url }}" alt="Pastel illustration of Christian heritage through preaching, writing, family worship, teaching, marriage, civic trust, and service."></figure>

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
  <div class="resource-index resource-index--three">
    {% assign articles = site.heritage | sort: "date" | reverse %}
    {% for article in articles limit: 3 %}
      <a class="resource-index__item" href="{{ article.url | relative_url }}">
        <span>{{ article.category }}</span>
        <h2>{{ article.title }}</h2>
        <p>{{ article.summary }}</p>
      </a>
    {% endfor %}
  </div>
  <a class="text-link" href="{{ '/heritage-american/articles/' | relative_url }}">Read more by The Heritage American</a>
</section>

<section class="publication-section">
  <h2>Video Library</h2>
  <p>Selected conversations, addresses, and lectures for Christian men and households seeking wisdom in public life, culture, education, and local responsibility.</p>

  <div class="video-library video-library--four">
    <a class="video-card" href="https://www.youtube.com/watch?v=U84PGzNbzgE">
      <span>Fatherhood</span>
      <h2>Reviving Fatherhood: What the Black Community Needs Now!</h2>
      <p>Center For Biblical Unity</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=fw341zQqCgo">
      <span>Marriage</span>
      <h2>Delano Squires on the Decline of Marriage and Family</h2>
      <p>Invisible Men</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=CVAtFb5WOwo">
      <span>Black Church</span>
      <h2>Black Baptist Leaders Warned About Marxism Decades Ago</h2>
      <p>Center For Biblical Unity</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=d3lyjyq6lcU">
      <span>Civic Discernment</span>
      <h2>How Marxism Hijacked Civil Rights Efforts and Black Culture</h2>
      <p>Kevin Briggins</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=XPMtXaKPAgg">
      <span>Culture</span>
      <h2>The Failed Experiment of Multiculturalism</h2>
      <p>Lennox Kalifungwa</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=8uqgb_jgJjw">
      <span>Culture</span>
      <h2>Comparing Cultures</h2>
      <p>Voddie Baucham</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=v6DtBBsCF5E">
      <span>Institution Building</span>
      <h2>Lessons from Booker T. Washington on Building Enduring Institutions</h2>
      <p>Delano Squires</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=m0afBYvS7Ow">
      <span>Education</span>
      <h2>The True Cost of Co-Discipling Our Children with the State</h2>
      <p>Lennox Kalifungwa</p>
    </a>
  </div>
  <a class="text-link" href="{{ '/heritage-american/videos/' | relative_url }}">See more recommended videos</a>
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