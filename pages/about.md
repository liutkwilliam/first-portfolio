---
layout: page
title: About
description: William is passionate about 2D animation, photography, graphic design, and frontend website designer.
image: /images/2022-profile-web.jpg
permalink: /about/
---
{% capture bio %}
# Hi I am William

William has a keen interest in web, UI Design career (or equivalent), with knowledge in Web Development (HTML, CSS, JavaScript). He is also currently undertaking a Digital graphic design course to sharpen his skills.

On the side, William do love taking photos. He can take good landscape photo, documenting events and taking photos of a product (artwork).
{% endcapture %}

<div class="row">
	<div class="col-md-5 profileImg">
		<img src="{{ page.image }}" alt="ProfileImg">
	</div>
	<div class="col-md">
		{{ bio | markdownify }}
        <h5>Contact Me</h5>
        <p class="contact-socials">
            <i class="fa fa-lg fa-envelope-o"></i>liutk.william (@) gmail.com
        </p>
        <div class="contact-socials">
            <h5>Follow</h5>
            {% if site.facebook %}<p><i class="fa fa-lg fa-facebook"></i><a href="https://www.facebook.com/{{ site.facebook }}/">William - Tsz Kin LIU</a></p>{% endif %}
            {% if site.instagram %}<p><i class="fa fa-lg fa-instagram"></i><a href="https://www.instagram.com/{{ site.instagram }}/">@liutk.william</a></p>{% endif %}
            {% if site.linkedin %}<p><i class="fa fa-lg fa-linkedin"></i><a href="https://www.linkedin.com/in/{{ site.linkedin }}/">Tsz Kin (William) Liu</a></p>{% endif %}
        </div>
		<a href="{{ site.fullcv }}" class="btn btn-primary btn-lg">Click here to my digital CV</a>
	</div>
</div>