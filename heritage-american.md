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
  <h2>Video Library</h2>
  <p>Selected conversations, addresses, and lectures for Christian men and households seeking wisdom in public life, culture, education, and local responsibility.</p>

  <nav class="library-jump" aria-label="Heritage American video categories">
    <a href="#heritage-family-formation">Family Formation</a>
    <a href="#heritage-civic-discernment">Civic Discernment</a>
    <a href="#heritage-culture-and-nations">Culture and Nations</a>
    <a href="#heritage-education-and-institutions">Education and Institutions</a>
  </nav>

  <h3 id="heritage-family-formation">Family Formation</h3>
  <div class="video-library">
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
    <a class="video-card" href="https://www.youtube.com/watch?v=YRUvJ0minj8">
      <span>Fatherhood</span>
      <h2>America's Prodigal Fathers</h2>
      <p>Delano Squires</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=Tw1V7zLqN1o">
      <span>Fatherhood</span>
      <h2>How Guaranteed Income Programs for New Moms Diminish Dads</h2>
      <p>Invisible Men</p>
    </a>
  </div>

  <h3 id="heritage-civic-discernment">Civic Discernment</h3>
  <div class="video-library">
    <a class="video-card" href="https://www.youtube.com/watch?v=CVAtFb5WOwo">
      <span>Black Church</span>
      <h2>Black Baptist Leaders Warned About Marxism Decades Ago</h2>
      <p>Center For Biblical Unity</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=d3lyjyq6lcU">
      <span>Civil Rights</span>
      <h2>How Marxism Hijacked Civil Rights Efforts, Black Culture, and Fueled Racial Divisions</h2>
      <p>Kevin Briggins</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=3s8WWv93v3E">
      <span>Civil Rights</span>
      <h2>Civil Rights Propaganda and Lies about MLK Jr.</h2>
      <p>Chad O. Jackson</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=cXtZYDjI2F8">
      <span>Public Theology</span>
      <h2>Is Christian Nationalism Biblical or a Dangerous Distortion of the Gospel?</h2>
      <p>Lennox Kalifungwa</p>
    </a>
  </div>

  <h3 id="heritage-culture-and-nations">Culture and Nations</h3>
  <div class="video-library">
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
    <a class="video-card" href="https://www.youtube.com/watch?v=d8uyMDgaoKg">
      <span>Black Culture</span>
      <h2>What Does Black Culture Really Mean?</h2>
      <p>Five Christian men discuss culture and responsibility.</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=ooRBhOre2LM">
      <span>Christian Culture</span>
      <h2>Festivity is Warfare</h2>
      <p>Uriesou Brito</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=GJ5dXwV5uf8">
      <span>Conversation</span>
      <h2>Kevin Briggins Thankful Thursday Tap In</h2>
      <p>The Kevin Briggins channel</p>
    </a>
  </div>

  <h3 id="heritage-education-and-institutions">Education and Institutions</h3>
  <div class="video-library">
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
    <a class="video-card" href="https://www.youtube.com/watch?v=ObYonLUb77Q">
      <span>Cultural Renewal</span>
      <h2>A Christian Vision for Cultural Transformation</h2>
      <p>Lennox Kalifungwa</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=l7IfSlDrxao">
      <span>Men's Formation</span>
      <h2>Delano Squires 2025 Springfield Iron Sharpens Iron Keynote</h2>
      <p>Delano Squires</p>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=TZP1S2Uf86k">
      <span>Marriage and Policy</span>
      <h2>Keynote Address at National Alliance for Relationship and Marriage Education Summit</h2>
      <p>Delano Squires</p>
    </a>
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
