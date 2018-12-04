---
layout: page
title: "Project Portfolio"
# date:  2018-03-19
description: My very first post on my brand new blog!
# img: pen_and_paper.jpg
exstatic_tags:
- "Full-Stack"
- "Ruby"
- "Sinatra"
- "JavaScript"
- "ReactJS"
- "Redux"
- "Thunk"
- "Fetch"
- "WebSockets"
- "API"
- "HTML"
- "SASS"
- "Semantic UI"
- "Self-hosted"
- "Library"
- "Gem"
protocol_tags:
- "Full-Stack"
- "JavaScript"
- "Ruby"
- "Rails"
- "PostgreSQL"
- "WebSockets"
- "Action Cable"
- "Fetch"
- "Google Translate API"
- "Authentication"
- "Authorization"
- "bcrypt"
- "HTML"
- "CSS"
lend-to-friend_tags:
- "Full-Stack"
- "Ruby"
- "Rails"
- "Bootstrap"
- "Analytics"
- "CRUD"
- "Authentication"
- "Authorization"
- "PostgreSQL"
- "CSS"
- "HTML"
- "Responsive Design"
- "Heroku"
- "Action Mailer"
- "Devise"
- "Letter Opener"
- "Mailgun"
rhymetime_tags:
- "Back-end"
- "Python 3"
- "Flask"
- "REST"
- "API"
- "pytest"
- "Unit Testing"
- "Docker"
subreddit_tags:
- "Front-end"
- "ReactJS"
- "SASS"
- "SVG"
- "HTML5"
- "Axios"
- "Mobile-first design"
gitlab_tags:
- "Full-Stack"
- "Open Source Contribution"
- "Testing"
- "Bugfixes"
- "New Features"
- "Production Application"
- "API"
- "UX"
- "Efficiency at Scale"
jdbean_tags:
- "Front-end"
- "HTML"
- "SASS"
- "Gulp"
- "Ruby"
- "Liquid"
- "Jekyll"
- "Ex-Static"
- "Docker"
- "Git"
- "GitLab"
- "Flexible-Jekyll"
- "Testing"
- "Continuous Integration"
- "Responsive Design"
permalink: /projects/
---


## Ex-Static

![Ex-Static](/assets/img/Ex-Static.png)

Ex-Static provides an intuitive interface for users to conveniently create and update content on their own websites. Users can preview their changes in Ex-Static's interface and watch in real-time as their website updates itself automatically. Packaged as a Ruby gem, Ex-Static turns any Jekyll blog into a full-fledged Content Management System with a user-friendly interface for authors and editors.
*WebSockets functionality of live demo is currently disabled due to firewall issue.*{: class="project-note"}

<div class="project-container">
  <div class="project-share">
    <a href="https://github.com/jdbean/Ex-Static" title="Source Code"  target="_blank" rel="noopener"><i class="fa fa-git" aria-hidden="true"></i> Source Code</a>
    <a href="https://office.johannabearman.duckdns.org" title="Live Demo"  target="_blank" rel="noopener"><i class="fa fa-desktop" aria-hidden="true"></i> Live Demo</a>
    <ul class="credentials">
      <li>Demo Username: <em>user</em></li>
      <li>Demo Password: <em>exstatic-password</em></li>
    </ul>
  </div>
  <div class="project-tag">
    <ul class="tags">
      {% for tag in page.exstatic_tags %}
        <li class="tag">
          {{ tag }}
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

## Protocol

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/vMI0HT0UjEM" frameborder="0" allowfullscreen></iframe>
</div>

Protocol is a real-time multi-party messaging application that automatically translates messages into each recipient's native language.

<div class="project-container">
  <div class="project-share">
    <a href="https://github.com/jdbean/protocol-frontend" title="Front-End Source Code" target="_blank" rel="noopener"><i class="fa fa-git" aria-hidden="true"></i> Source Code (Front-End)</a>
    <a href="https://github.com/jdbean/protocol-backend" title="Back-End Source Code" target="_blank" rel="noopener"><i class="fa fa-git" aria-hidden="true"></i> Source Code (Back-End)</a>
  </div>
  <div class="project-tag">
    <ul class="tags">
      {% for tag in page.protocol_tags %}
        <li class="tag">
          {{ tag }}
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

## Lend-to-Friend

![Lend-to-Friend](/assets/img/Lend-to-Friend.png)

Lend-to-Friend provides a platform for peer-to-peer lending of items where users can post books, movies, music, clothing, or household items available for loan to other users and browse for items to borrow themselves.
*Live demo may take a few moments to wake up on first load.*{: class="project-note"}

<div class="project-container">
  <div class="project-share">
    <a href="https://github.com/jdbean/lend-to-friend" title="Source Code" target="_blank" rel="noopener"><i class="fa fa-git" aria-hidden="true"></i> Source Code</a>
    <a href="https://pacific-earth-11787.herokuapp.com" title="Live Demo" target="_blank" rel="noopener"><i class="fa fa-desktop" aria-hidden="true"></i> Live Demo</a>
    <ul class="credentials">
      <li>Demo Username: <em>lf@lf.com</em></li>
      <li>Demo Password: <em>password</em></li>
    </ul>
  </div>
  <div class="project-tag">
    <ul class="tags">
      {% for tag in page.lend-to-friend_tags %}
        <li class="tag">
          {{ tag }}
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

## Rhyme Time

![Rhyme Time](/assets/img/RhymeTime_REST.png)

Rhyme Time is a REST API written in Python which helps writers select select rhyming words.
Rhyme Time can even identify words with multiple pronounciations and limit suggested rhymes accordingly.

<div class="project-container">
  <div class="project-share">
    <a href="https://github.com/jdbean/rhymetime" title="Source Code" target="_blank" rel="noopener"><i class="fa fa-git" aria-hidden="true"></i> Source Code</a>
    <a href="/rhymetime/" title="Spotlight"><i class="fa fa-search" aria-hidden="true"></i> Spotlight</a>
  </div>
  <div class="project-tag">
    <ul class="tags">
      {% for tag in page.rhymetime_tags %}
        <li class="tag">
          {{ tag }}
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

## SubReddit

![SubReddit](/assets/img/subreddit_boxed.gif)

SubReddit provides a beautiful interface for browsing top-rated submissions in the film photography subreddit r/analog. Users can curate a collection of favorite posts which they can enjoy together in the favorites tab.
*All styling for this project was written 100% from scratch*{: class="project-note"}
<div class="project-container">
  <div class="project-share">
    <a href="https://github.com/jdbean/subreddit" title="Source Code" target="_blank" rel="noopener"><i class="fa fa-git" aria-hidden="true"></i> Source Code</a>
    <a href="https://jdbean.github.io/subreddit" title="Live Demo" target="_blank" rel="noopener"><i class="fa fa-desktop" aria-hidden="true"></i> Live Demo</a>
    <a href="/subreddit/" title="Spotlight"><i class="fa fa-search" aria-hidden="true"></i> Spotlight</a>
  </div>
  <div class="project-tag">
    <ul class="tags">
      {% for tag in page.subreddit_tags %}
        <li class="tag">
          {{ tag }}
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

## GitLab

![GitLab](/assets/img/wm.svg)

Contributor to the open source GitLab project---a single product for the entire DevOps lifecycle. Contributions include documentation, new and improved testing, bug fixes, and new features.

*Click below to view some representative contributions accepted by the GitLab project*{: class="project-note"}

<div class="project-container">
  <div class="project-share">
    <a href="https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/21606" title="Merge Request 21606"  target="_blank" rel="noopener"><i class="fa fa-gitlab" aria-hidden="true"></i> !21606</a>
    <a href="https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/21508" title="Merge Request 21508"  target="_blank" rel="noopener"><i class="fa fa-gitlab" aria-hidden="true"></i> !21508</a>
    <a href="https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/21502" title="Merge Request 21502"  target="_blank" rel="noopener"><i class="fa fa-gitlab" aria-hidden="true"></i> !21502</a>
    <a href="https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/21661" title="Merge Request 21661"  target="_blank" rel="noopener"><i class="fa fa-gitlab" aria-hidden="true"></i> !21661</a>
    <a href="https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/21305" title="Merge Request 21305"  target="_blank" rel="noopener"><i class="fa fa-gitlab" aria-hidden="true"></i> !21305</a>
    <a href="https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/22466" title="Merge Request 22466"  target="_blank" rel="noopener"><i class="fa fa-gitlab" aria-hidden="true"></i> !22466</a>
    <br/>
    <a href="/first-foss-contribution/" title="Spotlight (Part I)"><i class="fa fa-search" aria-hidden="true"></i> Spotlight (I)</a>
    <a href="/first-foss-contribution-ptii/" title="Spotlight (Part II)"><i class="fa fa-search" aria-hidden="true"></i> Spotlight (II)</a>
  </div>
  <div class="project-tag">
    <ul class="tags">
      {% for tag in page.gitlab_tags %}
        <li class="tag">
          {{ tag }}
        </li>
      {% endfor %}
    </ul>
  </div>
</div>


## JDBean.net

![JDBean.net](/assets/img/jdbean-net.png)

JDBean.net is a technical blog and portfolio site created using the Jekyll static site builder. It is built, tested, and deployed using a custom implemented self-hosted GitLab CI system and is edited using Ex-Static.

<div class="project-container">
  <div class="project-share">
    <a href="https://gitlab.com/jdbean/blog-mirror" title="Source Code"  target="_blank" rel="noopener"><i class="fa fa-git" aria-hidden="true"></i> Source Code</a>
    <a href="/blogging-workflow/" title="Spotlight"><i class="fa fa-search" aria-hidden="true"></i> Spotlight</a>
  </div>
  <div class="project-tag">
    <ul class="tags">
      {% for tag in page.jdbean_tags %}
        <li class="tag">
          {{ tag }}
        </li>
      {% endfor %}
    </ul>
  </div>
</div>
