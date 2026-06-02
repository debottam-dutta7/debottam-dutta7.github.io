---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<div class="publications">

  <h2 class="pub-category">Generative Modeling and Sampling</h2>
  {% bibliography -f papers -q @*[category=Generative Modeling and Sampling]* %}

  <h2 class="pub-category">Speech/Audio Processing and Digital Health (Earlier Work)</h2>
  <div class="simple-bibliography">
    {% bibliography -f papers -q @*[category=Speech/Audio Processing and Digital Health (Earlier Work)]* --template bib_simple %}
  </div>

</div>
