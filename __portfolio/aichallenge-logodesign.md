---
layout: portfoliosite
categories:
- graphic design
title: Illustrator Daily Creative Challenge (Sep 20 - Oct 15)
description: Building Illustrator skills in 9 Logo Design-themed challenges.
organisation:
deliverables:
date: 2021-10-29 12:00:00 +1100
folder: aichallenge-logodesign
image: Illustrator-Sep20Oct15_ChallengeCover.png
slug: aichallenge-logodesign
link:
---
## Introduction

Building Illustrator skills in 9 Logo Design-themed challenges.

{% for challenge in site.data.aichallenge-logodesign %}

### Day {{ challenge.day }} - {{ challenge.theme }}

{{ challenge-content }}

{% if challenge.approach %}

Approach: {{ challenge.approach }}

{% endif %}

<img src="/images/{{ page.folder }}/Illustrator-Sep20Oct15_Challenge0{{forloop.index}}.png" alt="Image of Challenge Day {{ challenge.day }}" class="blog-image" oncontextmenu="return false;">

{% if challenge.ref %}

Image Reference

<img src="/images/{{ page.folder }}/{{ challenge.ref }}.png" class="blog-image">

Image link: {{ challenge.text }}

{% endif %}

{% if challenge.image2 %}
<div class="row">
<div class="col-md">
<img src="/images/{{ page.folder }}/{{ challenge.image2 }}.png" alt="Image 2 of Challenge Day {{ challenge.day }}" class="blog-image" oncontextmenu="return false;">
{% if challenge.image3 %}
</div>
<div class="col-md">
<img src="/images/{{ page.folder }}/{{ challenge.image3 }}.png" alt="Image 3 of Challenge Day {{ challenge.day }}" class="blog-image" oncontextmenu="return false;">
</div>
{% endif %}
</div>
{% endif %}

{% endfor %}

## Acknowledgement

A big heart thanks to Julia Masalska for hosting this inspiring logo design-themed illustrator daily creative challenge. And the feedback and comments in the Discord!