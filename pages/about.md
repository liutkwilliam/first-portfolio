---
layout: page
title: About
description: William is passionate about 2D animation, photography, graphic design, and frontend website designer.
image: /images/2022-profile-web.jpg
permalink: /about/
---
{% capture bio %}
# About William

William is passionate about Web, UI and UX Design. He is also experienced in 2D animation, photography, design and front-end website development. He is keen on blending his design skills in delivering simple, user-friendly websites and UI design.

Outside of design, William loves taking photos of lights, city-scapes at night and long exposure. He is also experienced in event photography, landscape and anything that captures his attention. He has been taking photos professionally and voluntary while in the university and for student clubs and projects.

William is recently picking up additional skills in frontend development such as ReactJS and Javascript. He wants to incorporate technical skills with his existing passion for design.

William holds a Bachelor (with an Honours) degree in Media Arts (in 2D Animation and Photography) at the University of New South Wales (UNSW) in 2019. He has been an active member of various student clubs and projects, including Vivid Sydney light installation projects in 2018 and 2019 and the university's solar racing team Sunswift & completed the World Solar Challenge in 2019.
{% endcapture %}

<div class="row justify-content-center">
	<div class="col-md-5 profileImg">
		<img src="{{ page.image }}" alt="ProfileImg">
	</div>
</div>
<div class="row justify-content-center">
	<div class="col-md-10">
		{{ bio | markdownify }}
		<a href="{{ site.fullcv }}" class="btn btn-primary btn-lg">Click here to my digital CV</a>
	</div>
</div>