---
layout: post
title: Adding a User Tour to a React Application
date: '2018-08-19 20:00:00'
description: Adding a user tour to my react application.
tags:
- Development
- Frontend
- UX
- React
img:
---

One of my personal projects, [Ex-Static](https://github.com/jdbean/Ex-Static) is in something a tricky spot; it is simultaneously a library targeted for configuration and deployment and a user-facing tool aimed at making a command-line tool ~~easy~~ *easier* for the average writer. My motivations for Ex-Static were myriad; I wanted to make a tool for myself but also something I could hopefully deploy and train some friends and family to use. I also saw Ex-Static as a tool whose long-term primary audience was technical administrators who might deploy Ex-Static for their own sites and use it as one element of a user-friendly publishing workflow.

As a result, while developing Ex-Static I made an effort ensure that the project remained flexible and useful for a wide-range of jekyll-based sites. As tempting as it was, I tried my best to avoid optimizing the tool to work maximize integration with my particular usage of Jekyll and its associated plugins.
