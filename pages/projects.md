---
layout: page
title: "Project Portfolio"
# date:  2018-03-19
description: My very first post on my brand new blog!
# img: pen_and_paper.jpg
tags1: ["Ruby", "Gem", "Jekyll", "Sinatra", "JavaScript", "React", "Redux", "Thunk", "Fetch", "WebSockets", "API", HTML, "SCSS", "Semantic UI", Self-hosted ]
tags2: ["Ruby", "Rails", "Bootstrap", "Analytics", "CRUD", "Authentication", "Authorization", "PostgreSQL", CSS, HTML, "Responsive Design",  "Heroku", "Action Mailer", "Devise", "Letter Opener", "Mailgun"]
tags3: ["JavaScript", "Ruby", "Rails", "PostgreSQL", "WebSockets", "Action Cable", "Fetch", "Google Translate API", "Authentication", "Authorization", "bcrypt", "HTML", "CSS"]
tags4: ["HTML", "SCSS", "Gulp", "Ruby", "Liquid", "Jekyll", "Ex-Static", "Docker", " Git", "GitLab", "Flexible-Jekyll", "Testing", "Continuous Integration", "Responsive Design"]
tags5: ["Python 3", "Flask", "REST", "API", "pytest", "Unit Testing", "Docker"]
permalink: /projects/
---


## Ex-Static

![Ex-Static](/assets/img/Ex-Static.png)

Ex-Static instantly turns any Jekyll blog into a Content Management System with a user-friendly interface for authors and editors. *Live demo does not currently have WebSockets functionality enabled.*



<div class="project-footer">
  <div class="project-share">
    <a href="https://github.com/jdbean/Ex-Static" title="Source Code"  target="_blank"><i class="fa fa-git" aria-hidden="true"></i> Source Code</a>
    <a href="https://office.johannabearman.duckdns.org" title="Live Demo"  target="_blank"><i class="fa fa-desktop" aria-hidden="true"></i> Live Demo</a>
    <div class="credentials">
      <li>Demo Username: <em>user</em></li>
      <li>Demo Password: <em>exstatic-password</em></li>
    </div>
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

Lend-to-Friend provides a platform for peer-to-peer lending of items where users can post books, movies, music, clothing, or household items available for loan to other users and browse for items to borrow themselves. *Live demo may take a few moments to wake up on first load.*

<div class="project-footer">
  <div class="project-share">
    <a href="https://github.com/jdbean/lend-to-friend" title="Source Code"  target="_blank"><i class="fa fa-git" aria-hidden="true"></i> Source Code</a>
    <a href="https://pacific-earth-11787.herokuapp.com" title="Live Demo"  target="_blank"><i class="fa fa-desktop" aria-hidden="true"></i> Live Demo</a>
    <div class="credentials">
      <li>Demo Username: <em>lf@lf.com</em></li>
      <li>Demo Password: <em>password</em></li>
    </div>
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
    <a href="https://github.com/jdbean/protocol-frontend" title="Front-End Source Code"  target="_blank"><i class="fa fa-git" aria-hidden="true"></i> Source Code (Front-End)</a>
    <a href="https://github.com/jdbean/protocol-backend" title="Back-End Source Code"  target="_blank"><i class="fa fa-git" aria-hidden="true"></i> Source Code (Back-End)</a>
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

## RhymeTime

![RhymeTime](/assets/img/RhymeTime_REST.png)

RhymeTime is a REST API written in Python which helps writers select select rhyming words.
Rhymetime can even identify words with multiple pronounciations and limit suggested rhymes accordingly.


<div class="project-footer">
  <div class="project-share">
    <a href="https://github.com/jdbean/rhymetime" title="Source Code"  target="_blank"><i class="fa fa-git" aria-hidden="true"></i> Source Code</a>
    <a href="/rhymetime/" title="Spotlight"  target="_blank"><i class="fa fa-search" aria-hidden="true"></i> Spotlight</a>
  </div>
  <div class="project-tag">
    <div class="tags">
      {% for tag in page.tags5 %}
        <li class="tag">
            {{ tag }}
        </li>
      {% endfor %}
    </div>
  </div>
</div>

## JDBean.net

![JDBean.net](/assets/img/jdbean-net.png)

JDBean.net is a technical blog and portfolio site created using the Jekyll static site builder. It is built, tested, and deployed using a custom implemented self-hosted GitLab CI system and is edited using Ex-Static.

<div class="project-footer">
  <div class="project-share">
    <a href="https://gitlab.com/jdbean/blog-mirror" title="Source Code"  target="_blank"><i class="fa fa-git" aria-hidden="true"></i> Source Code</a>
    <a href="/blogging-workflow/" title="Spotlight"  target="_blank"><i class="fa fa-search" aria-hidden="true"></i> Spotlight</a>
  </div>
  <div class="project-tag">
    <div class="tags">
      {% for tag in page.tags4 %}
        <li class="tag">
            {{ tag }}
        </li>
      {% endfor %}
    </div>
  </div>
</div>
