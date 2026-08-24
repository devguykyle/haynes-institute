---
title: The Haynes Institute
body_class: home
---

<section class="hero">
  <div class="hero__content">
    <p class="eyebrow">New from The Haynes Institute</p>
    <h1>Begin with the Attributes of God.</h1>
    <p class="hero__lead">A new course for recovering the faith, ordering the household, and building the future in the knowledge of God.</p>
    <div class="hero__actions">
      <a class="button button--primary" href="{{ '/courses/attributes-of-god/' | relative_url }}">Start the Course</a>
      <a class="button button--secondary" href="{{ '/resources/' | relative_url }}">Browse Resources</a>
    </div>
  </div>
  <aside class="hero__feature" aria-label="Featured course">
    <span>New Course</span>
    <h2>Attributes of God</h2>
    <p>Begin a steady study of God's being, works, names, perfections, and relation to his creatures.</p>
    <a class="text-link" href="{{ '/courses/attributes-of-god/' | relative_url }}">Start today</a>
  </aside>
</section>

<section class="section recommended-section">
  <div class="section__header">
    <p class="eyebrow">Recommended Next</p>
    <h2>Your next good read.</h2>
  </div>
  <div class="recommended-list">
    <a class="article-card" href="{{ '/resources/e-k-love-what-is-regeneration/' | relative_url }}">
      <span>Sermon</span>
      {% include author-badge.html author="E. K. Love" %}
      <h3>What is Regeneration?</h3>
      <p>E. K. Love explains the necessity, character, divine agency, and effects of the new birth from John 3:7.</p>
    </a>
    <a class="article-card" href="https://www.monergism.com/thethreshold/sdg/sibbes/The%20Bruised%20Reed%20and%20Smoking%20-%20Richard%20Sibbes.pdf">
      <span>Devotional</span>
      {% include author-badge.html author="Richard Sibbes" %}
      <h3>A Bruised Reed</h3>
      <p>Richard Sibbes on Christ's tenderness toward weak, wounded, and repentant saints.</p>
    </a>
    <a class="article-card" href="https://www.reformedontheweb.com/miscellaneous/pastor-theologian-albert-mohler.pdf">
      <span>Pastoral Theology</span>
      <h3>The Pastor As Theologian</h3>
      <p>A call for pastors to serve the church with doctrinal clarity and theological conviction.</p>
    </a>

  </div>
</section>

<section class="section section--articles">
  <div class="section__header">
    <p class="eyebrow">Featured Articles</p>
    <h2>Regeneration, sanctification, and public faithfulness.</h2>
  </div>
  <div class="article-grid">
    <a class="article-card" href="{{ '/resources/lemuel-haynes-nature-of-regeneration/' | relative_url }}">
      <span>Sermon Excerpt</span>
      {% include author-badge.html author="Lemuel Haynes" %}
      <h3>The Nature of Regeneration</h3>
      <p>Haynes teaches that the new birth is the immediate work of the Holy Spirit, and that its fruits are love to God, repentance, faith in Christ, holy obedience, and growth toward glory.</p>
    </a>
    <a class="article-card" href="{{ '/resources/e-k-love-what-is-regeneration/' | relative_url }}">
      <span>Sermon</span>
      {% include author-badge.html author="E. K. Love" %}
      <h3>What is Regeneration?</h3>
      <p>Love sets the new birth before the reader as a necessary work of the Holy Spirit that renews the heart and orders the life toward God.</p>
    </a>
    <a class="article-card" href="{{ '/resources/william-bishop-johnson-coming-of-shiloh/' | relative_url }}">
      <span>Missionary Sermon</span>
      {% include author-badge.html author="William Bishop Johnson" %}
      <h3>The Coming of Shiloh</h3>
      <p>Johnson preaches Christ as the promised Shiloh, the certainty of God's prophecy, and the gathering of the nations to his reign.</p>
    </a>
  </div>
</section>

<section class="section">
  <div class="section__header">
    <p class="eyebrow">Guides</p>
    <h2>For family worship, homeschoolers, and lifelong learners.</h2>
    <p class="section__intro">Practical paths for reading Scripture, using catechisms, teaching history at home, and forming habits of study across generations.</p>
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

<section class="section section--split section--sources">
  <div>
    <p class="eyebrow">Featured Collections</p>
  </div>
  <div class="source-list">
    <a class="source-list__item" href="{{ '/catechisms-confessions-worship/' | relative_url }}">
      <span>Doctrine and Worship</span>
      <strong>Catechisms, Confessions, and Worship</strong>
    </a>
    {% assign featured_resources = site.resources | where: "featured", true | sort: "title" %}
    {% for resource in featured_resources limit: 3 %}
      {% unless resource.title == "Old AME Catechisms" %}
        <a class="source-list__item" href="{{ resource.url | relative_url }}">
          <span>{{ resource.category }}</span>
          <strong>{{ resource.title }}</strong>
        </a>
      {% endunless %}
    {% endfor %}
  </div>
</section>

<section class="section mini-about">
  <div class="mini-about__mark">H</div>
  <div class="mini-about__content">
    <p class="eyebrow">About the Institute</p>
    <h2>Recover the past. Live the faith. Build the future.</h2>
    <p>The Haynes Institute gathers theology, American history, and classical education resources for households, churches, teachers, and lifelong learners seeking Christ-centered formation.</p>
    <a class="text-link" href="{{ '/about/' | relative_url }}">Read more about the work</a>
  </div>
</section>
