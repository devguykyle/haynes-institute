---
title: The Haynes Institute
body_class: home
---

<section class="hero">
  <div class="hero__content">
    <p class="eyebrow">Theology &middot; American History &middot; Classical Education</p>
    <h1>A study house for memory, faith, and formation.</h1>
    <p class="hero__lead">The Haynes Institute exists to spread the recovery of confessional protestantism among black Americans so that Christ might be made first in our homes, businesses, indeed in all of life to the praise of God's glorious grace.</p>
    <div class="hero__actions">
      <a class="button button--primary" href="{{ '/resources/' | relative_url }}">Browse Resources</a>
      <a class="button button--secondary" href="{{ '/start-here/' | relative_url }}">Start Here</a>
    </div>
  </div>
</section>

<section class="section section--accent">
  <div class="section__header">
    <p class="eyebrow">Featured Articles</p>
    <h2>Regeneration, sanctification, and public faithfulness.</h2>
  </div>
  <div class="article-grid">
    <a class="article-card" href="{{ '/resources/lemuel-haynes-nature-of-regeneration/' | relative_url }}">
      <span>Sermon Excerpt</span>
      <h3>The Nature of Regeneration</h3>
      <p>Haynes teaches that the new birth is the immediate work of the Holy Spirit, and that its fruits are love to God, repentance, faith in Christ, holy obedience, and growth toward glory.</p>
    </a>
    <a class="article-card" href="{{ '/resources/protest-or-production-1961-black-baptist-schism/' | relative_url }}">
      <span>Essay</span>
      <h3>Protest or Production</h3>
      <p>A reflection on the 1961 Black Baptist schism, Joseph H. Jackson, and the older stream of Black Protestant thought that prized Christian formation, civic order, and institution-building.</p>
    </a>
    <a class="article-card" href="{{ '/resources/joseph-h-jackson-what-then-must-we-do-now/' | relative_url }}">
      <span>Address</span>
      <h3>What, Then, Must We Do Now?</h3>
      <p>Jackson calls for civil responsibility, one American standard, moral discipline, and the one gospel of Jesus Christ.</p>
    </a>
    <a class="article-card" href="{{ '/resources/nannie-h-burroughs-dogged-determination/' | relative_url }}">
      <span>Address</span>
      <h3>Dogged Determination</h3>
      <p>Nannie H. Burroughs calls for Christian civilization, moral courage, self-help, and a renewed determination too good to miss.</p>
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
    {% assign featured_resources = site.resources | where: "featured", true | sort: "title" %}
    {% for resource in featured_resources limit: 4 %}
      <a class="source-list__item" href="{{ resource.url | relative_url }}">
        <span>{{ resource.category }}</span>
        <strong>{{ resource.title }}</strong>
      </a>
    {% endfor %}
  </div>
</section>

<section class="section mini-about">
  <div class="mini-about__mark">H</div>
  <div>
    <p class="eyebrow">About the Institute</p>
    <h2>Recover the past. Live the faith. Build the future.</h2>
    <p>The Haynes Institute gathers theology, American history, and classical education resources for households, churches, teachers, and lifelong learners seeking Christ-centered formation.</p>
    <a class="text-link" href="{{ '/about/' | relative_url }}">Read more about the work</a>
  </div>
</section>
