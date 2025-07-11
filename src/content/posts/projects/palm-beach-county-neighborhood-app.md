---
title: "Palm Beach County Neighborhood Dashboard"
description: "One of my favorite projects, and a good example of what I can do with a bit more artistic freedom. This is a one-stop dashboard for address-specific information using a lot of the ArcGIS javascript API. It shows government representatives (federal, state, and local), voting precinct locations, police and fire departments, emergency management status, evacuation zones, flood zones, school districts and representatives, current land use, permitting authorities, and water service providers, all specific to the user's address. It also provides 40+ live traffic cam feeds laid out across the county map."
date: "Feb 01 2025"
categories: ["projects"]
image: "/images/neighborhood-1.png"
---

**URL**: [Palm Beach County Neighborhood Dashboard](https://pbc.gov/neighborhood)

## Background

Palm Beach County had a district locator for people to look up their county commissioner, for their specific address. It just did that one thing, was not user-friendly or modern, and it was wildly ADA non-compliant.

**Additional Concerns**: There were also several other GIS-based apps that all performed separate tasks in separate places including local evacuation routes, flood zones, and other geographically specific tasks.

**Solution**: Build a one-stop shop for any geographically specific information leveraging data we already had, and keep it as low-maintenance as possible.

**Tech**: Bootstrap, Custom CSS, ArcGIS Javascript API/RESTful APIs, JSON, Live Video Streaming, JW Player, Leaflet (JS)

![neighborhood app top of page with text entry and governmental results](/images/neighborhood-1.png)

For this project, I handled all phases of the technical work, from design to rollout. I worked closely with numerous departments from the county administrator to Public Affairs, Public Safety to Libraries.

The design is clean and professional -- yet playful -- with little fluffy clouds that float across the background as the page is scrolled. While it has only just launched I believe it is among the best-in-class countrywide for a dashboard of this kind.

Give the video below a watch, or visit the site here: [Palm Beach County Neighborhood Dashboard](https://pbc.gov/neighborhood)

(Note that changes may be made in the future. If anything significant changes like the design or functionality, I will detail here.)

<div class="video-wrapper">
    <iframe class="w-full aspect-video rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/TQfhnchHmQs?si=3hFMVzLi1vIQyoGs?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
