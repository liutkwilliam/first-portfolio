---
categories: 
- ux ui web
title: Trail-n-Plan
description: A graphics-styled animation portraying a nightmare from an unfinished crocodile animation assignment.
organisation: Academy Xi - UX/UI Design Elevate Certificate
deliverables: UI UX Personal Project
date: 2021-05-28 21:00:00 +1000
folder: trail-n-plan
image: post-report-designs-01.png
slug: trail-n-plan
link:
feature:
not-show:
---
Trail-n-Plan is a personal User Experience (UX) & User Interface (UI) project. It is prototyped in response to my friend's request who want to see a single-app that can plan and manage both trail route and logistics to collect user preferences and automate summaries for this trail running community. Unfortunately, there is yet any similar single-app that achieve it.

<blockquote class="project-blockquote">
  <p>“An amateur trail / marathon runner feels complicated to manage manually entered logistic planning data for each group trail running exercises. How may we simplify and automate the planning and data & collection management?”</p>
</blockquote>

## Objectives

- Create a mobile integrated app for the group and other like-minded users to create and edit their personalised trail routes and logistic arrangements for a group of people.
- The platform will replace the group's existing method of using an online trail planner and spreadsheet to manage complex activity planning data.

## Research Methods

- Competitors Analysis - Comparing application from Route Planning Applications and Events / Logistics Planning Applications
- Online Surveys - mainly targeting trail walking, hiking community, and enthusiast.

## Project Timeline

<img src="/images/trail-n-plan/project-timeline.svg" class="card-img-top">

## Research

### Online Survey

A Google Form online survey is conducted, and received 27 responses.

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="/js/trailnplanScript.js"></script>

<div class="row">
    <div class="col-lg">
        <div id="chart_div_1"></div>
    </div>
    <div class="col-lg">
        <div id="chart_div_2"></div>
    </div>
</div>

**Others** include: Local or cities' Trail Map, Viewranger, AllTrails.

##### Reasons of using the apps or websites that responses selected for the activities includes:

- GPS and navigation
- Route planning
- Convenient, straightforward to use applications to get estimated time, distances
- Locate supplies, facilities, entrances and exits
- Understand the route with images already included
- Useful technical information such as track info, rating, difficulty
- Free Applications

##### Challenges on using the selected applications:

- Limited network coverage in the hiking routes
- Some advanced functions are not free
- Insufficient trail info on Google Map
- Complex management to handle members' information on a spreadsheet
- Some inaccurate or too much information
- Navigation occasionally becomes inaccurate on some tracks

<div class="row">
    <div class="col-md">
        <div id="chart_div_3"></div>
    </div>
</div>

**Others** include: Other comments from trail runners on specific route, Others' performance on the track, Photograph of landmakrs or markes and recommended gear to bring.d

<div class="row">
    <div class="col-lg">
        <div id="chart_div_4"></div>
    </div>
    <div class="col-lg">
        <div id="chart_div_5"></div>
    </div>
</div>

### Competitor Analysis

Given the prototype idea does not have a preexisted reference, the analysis is separated into two categories of:

1. Route planning applications, and
2. Event / logistics / planning or documenting applications

<div class="row">
    <div class="col-md">
        <img src="/images/trail-n-plan/route-planning-compare.png" class="card-img-top">
    </div>
    <div class="col-md">
        <img src="/images/trail-n-plan/logistics-planning-compare.png" class="card-img-top">
    </div>
</div>

## Key Findings

- Google Map is one of the most popular route planning app.
- It is mostly used to plan hiking, trail running, cycling and camping.
- However some map technical info is missing for mobile app version.
- Social Media or messenger app platforms are the most convenient option (to date) to collaborate, chat with members / other people for planning events or activities.
- Having technical info of the route would help to understand the difficulty of completing the trips.
- Custom features such as adding notes, logistics planning along the route on the map are highly recommended.

## Affinity Mapping

This mapping organises facts from research into related groups and categories.

<img src="/images/trail-n-plan/affinity-mapping-2.jpg" class="card-img-top">

## Empathy Mapping

This mapping reflects the findings and draw possible solutions.

<img src="/images/trail-n-plan/empathy-mapping-2.jpg" class="card-img-top">

## Persona

A fictional profile to represent a potential user type for the prototype app.

<img src="/images/trail-n-plan/UIUX-persona-01.png" class="card-img-top">

## Customer Journey

This maps out the insights about user experiences prior to the prototype

<img src="/images/trail-n-plan/customer-journey.jpg" class="card-img-top">

## MVP

This diagram show how each of the features evaluated.

<img src="/images/trail-n-plan/mvp.jpg" class="card-img-top">

<div class="row">
    <div class="col-md">
        <h2>Crazy 8</h2>
        <p>8 quick mockups on responding a particular feature.</p>
        <img src="/images/trail-n-plan/crazy8.jpg" class="card-img-top">
    </div>
    <div class="col-md">
        <h2>Storyboard</h2>
        <p>A fictional story of using the new prototyped app.</p>
        <img src="/images/trail-n-plan/storyboard-01.png" class="card-img-top">
    </div>
</div>

## User Flow

<img src="/images/trail-n-plan/post-report-designs-03.png" class="card-img-top">

## Font, colours

<div class="row trailnplan">
    <div class="col-md">
        <h3>Colours</h3>
        <div>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        <br>
        <h3>Typography</h3>
        <div>
            <p><b>Source Sans Pro (Bold)</b></p>
            <p>Source Sans Pro</p>
        </div>
    </div>
    <div class="col-md">
        <h3>Colour Inspiration</h3>
        <img src="/images/trail-n-plan/colour-inspiration.jpg" class="card-img-top">
        <p>Barrenjoey Head Lighthouse, Palm Beach, NSW, Australia (Photographed in Dec 2018)</p>
    </div>
</div>

## Final Prototype

### Designs

<img src="/images/trail-n-plan/app-final-layout.png" class="card-img-top">

### With flow indications

<img src="/images/trail-n-plan/app-final-flow.png" class="card-img-top">

### Selected preview

<div class="row trailnplan">
    {% for screen in site.data.trailnplan-app %}
    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <div class="card shadow h-100">
            <img src="{{ site.baseurl }}/images/trail-n-plan/{{ screen.image }}" alt="Picture of {{screen.title}}" class="card-img-top">
            <div class="card-body">
                <h5>{{ screen.title }}</h5>
            </div>        
        </div>
    </div>
    {% endfor %}
</div>

## Possible Future Development

- Make a web-based platform to see every planned details on larger screens.
- More custom functionality, fields, unit controls.
- Multiple route branches.
- Use open-source maps for more customisations (when it becomes a real project sent to development).
- Long-term: Develop solutions on exporting entire event planning as PDF from any devices.

## Acknowledgements

A heartfelt thanks to UI UX Course mentor **[Julio Castellano](https://juliocreative.com/)** and the classmates of **[Academy Xi](https://academyxi.com/)** for all the valuable feedback to the project.
