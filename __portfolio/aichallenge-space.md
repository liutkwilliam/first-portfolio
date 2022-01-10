---
layout: portfoliosite
categories:
- graphic design
title: Illustrator Daily Creative Challenge (May 11 - May 22)
description: Building Illustrator skills in 9 space-themed challenges
organisation:
deliverables:
date: 2020-05-17 12:00:00 +1000
folder: aichallenge-space
image: aichallenge-space-000.png
slug: aichallenge-space
link:
---
## Introduction

Building Illustrator skills in 9 space-themed challenges.

{% for challenge in site.data.aichallenge-space %}

### Day {{ challenge.day }} - {{ challenge.theme }}

{{ challenge-content }}

Approach: {{ challenge.approach }}

<img src="/images/{{ page.folder }}/aichallenge-space-00{{forloop.index}}.png" alt="Image of Challenge Day {{ challenge.day }}" class="blog-image" oncontextmenu="return false;">

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

A big heart thanks to Andrew Hochradel for hosting this inspiring space-themed illustrator daily creative challenge. And all the feedback and comments in the Discord!