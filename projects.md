---
layout: page
title: "Project Portfolio"
# date:  2018-03-19
description: My very first post on my brand new blog!
# img: pen_and_paper.jpg
tags1: ["Ruby", "Gem", "Jekyll", "Sinatra", "JavaScript", "React", "Redux", "Thunk", "Fetch", "WebSockets", "API", "SCSS", "Semantic UI", Self-hosted ]
tags2: ["Ruby", "Rails", "Bootstrap", "Analytics", "CRUD", "Authentication", "PostgreSQL", "Authorization", "Responsive Design",  "Heroku"]
tags3: ["JavaScript", "Ruby", "Rails", "PostgreSQL", "WebSockets", "Action Cable", "Google Translate API", "bcrypt", "CSS"]
# permalink: projects.md
---


## Ex-Static

![Ex-Static](/assets/img/Ex-Static.png)

Ex-Static instantly turns any Jekyll blog into a Content Management System with a user-friendly interface for authors and editors.

<div class="project-footer">
  <div class="project-share">
    <a href="https://github.com/jdbean/Ex-Static" title="Source Code"  target="_blank"><i class="fa fa-github" aria-hidden="true"> Source Code</i></a>
    <a href="https://office.johannabearman.duckdns.org" title="Live Demo"  target="_blank"><i class="fa fa-desktop" aria-hidden="true"> Live Demo</i></a>
  </div>
  <div class="project-tag">
    <div class="tags">
      {% for tag in page.tags1 %}
        <li class="tag">
            {{ tag }}
        </li>
      {% endfor %}
    </div>
  </div>
</div>

## Lend-to-Friend

![Lend-to-Friend](/assets/img/Lend-to-Friend.png)


Lend-to-Friend provides a platform for peer-to-peer lending of items where users can post books, movies, music, clothing, or household items available for loan other users and browse for items to borrow themselves.


<div class="project-footer">
  <div class="project-share">
    <a href="https://github.com/jdbean/lend-to-friend" title="Source Code"  target="_blank"><i class="fa fa-github" aria-hidden="true"> Source Code</i></a>
    <a href="https://pacific-earth-11787.herokuapp.com" title="Live Demo"  target="_blank"><i class="fa fa-desktop" aria-hidden="true"> Live Demo</i></a>
  </div>
  <div class="project-tag">
    <div class="tags">
      {% for tag in page.tags2 %}
        <li class="tag">
            {{ tag }}
        </li>
      {% endfor %}
    </div>
  </div>
</div>

## Protocol

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/vMI0HT0UjEM" frameborder="0" allowfullscreen></iframe>
</div>

Protocol is a real-time multi-party messaging application that automatically translates messages into each recipient's native language.

<div class="project-footer">
  <div class="project-share">
    <a href="https://github.com/jdbean/protocol-frontend" title="Front-End Source Code"  target="_blank"><i class="fa fa-github" aria-hidden="true"> Source Code (Front-End) </i></a>
    <a href="https://github.com/jdbean/protocol-backend" title="Back-End Source Code"  target="_blank"><i class="fa fa-github" aria-hidden="true"> Source Code (Back-End)</i></a>
  </div>
  <div class="project-tag">
    <div class="tags">
      {% for tag in page.tags3 %}
        <li class="tag">
            {{ tag }}
        </li>
      {% endfor %}
    </div>
  </div>
</div>
