---
layout: post
title: Serving Two Masters
subtitle: Adding a User Tour to Ex-Static's React Front End
date: '2018-08-27'
description: Adding a user tour to my react application.
tags:
- Development
- Frontend
- UX
- React
- Tour
img: grand_tour.jpg
---

[Ex-Static](https://github.com/jdbean/Ex-Static), one of my personal projects, is in something of a tricky spot
<!-- more -->
; it is simultaneously a library intended for customization by admins/developers and is also meant to be user-facing software aimed at making a command-line utility ~~easy~~ *easier* for the average writer. My motivations for creating Ex-Static were varied. I wanted to make a tool for myself but also something I could hopefully deploy and train some friends and family to use on sites of their own. Moreover, I also saw Ex-Static as a tool whose long-term primary audience was technical administrators who might deploy Ex-Static for their own sites and use it as one element of their own user-friendly custom publishing workflow system.

# Developing a Flexible Utility

When Ex-Static is installed in a [Jekyll](https://jekyllrb.com) project it adds a convenient and user-friendly GUI for editing and adding posts. Jekyll is the tool I use to make this website and you can check out my [post detailing my publishing workflow for this site](/blogging-workflow) to learn a bit more about how I use it. Jekyll takes plain text files like CSS, Markdown, HTML, and YAML and produces a static website that can be hosted nearly anywhere. Static site builders are extremely powerful tools for making sites that are highly performant, easily-scalable, beautiful, and easy *for developers* to work with. Once a Jekyll site is set up, adding a new blog post is a simple as making a new text file, adding some configuration variables like the title, date, and author in a YAML block at the start of the file and then writing the post content in the easy-to-read and easy-to-write markdown plain text format. Compared to building out a site by hand, Jekyll is a dream come true but for all its technical advantages, it isn't quite up the level of usability as something like Medium or Wordpress. The goal for Ex-Static was to see if I could create a something which would enable nearly any blog made with Jekyll to provide an interface for content creators that reduced the friction associated with less-technical users contributing to a Jekyll site.

As a result of Jekyll's tremendous flexibility and ecosystem of plugins, I made an effort to ensure that the project was reasonably general so that it could remain useful for a wide-range of Jekyll-based sites. As tempting as it was, I tried my best to avoid optimizing the application to maximize convenient integrations with my particular usage of Jekyll and its associated plugins. This meant compromises such as providing only high-level assistance with authoring and reviewing YAML/Markdown for posts and focusing on support for blog posts as the area of most frequent activity for content creators on most sites. It also meant holding back from focusing on issues like deploying the site into production.

When it came time to start thinking about releasing Ex-Static I started to recognize how challenging it was to provide a good UX when I couldn't predict or control the context in which users would be experiencing the application. I set up tooltips and focused on carefully writing text that would help to orient a perspective user and generally figured that I had done a decent job of providing a reasonably intuitive interface.

# User Feedback

As soon as I had put up a [demo site](/projects/#ex-static) and started getting feedback I quickly found that Ex-Static's demo was not nearly as intuitive as I had hoped. Here is an illustrative example of the feedback I received:

> I clicked through to view your [...] demo and was redirected to your site after entering the credentials.... Should I then click on the flashing  admin/exstatic box on the lower right hand side of the page to see the demo? When I did, I was only able to view the source code.  Will you please let me know where I'm supposed to find it? 

Adding a quick message to the demo blog's landing page helped make clear that to really see Ex-Static in action one needed to press the button hovering in the right hand corner of the screen. Explaining to a fresh user what to make of Ex-Static's interface seemed to be a much more significant problem. The feedback I was getting boiled down to this: Users don't feel like they belong there, it feels like a mistake.

# Rolling Out the Welcome Wagon

I decided that I needed to go all in on making Ex-Static feel as welcoming and accessible as I possibly could considering the technical nature of the project. I did some research on creating site welcome tours and decided to implement one using the [React Joyride](https://github.com/gilbarbara/react-joyride) library. This library was incredibly easy to work with and customize to my liking. I realized pretty quickly that I would need to implement two tours: One for the landing/navigation screen and one for the new/edit post screen. Midway through implementing these tours it occurred to me that I was making a tour for my specific demo installation when I could have been making a tour for the library itself.

Adapting the tour to function as a general feature of the project certainly involved a few hiccups. I repeatedly tried to shine a spotlight on an element whose rendering was conditional. For example, I wrote out the tour code to highlight the demo site's example folder in the navigation view only to realize that an Ex-Static install may well have multiple or even no post folders and that in those scenarios therefore, the tour would throw an error. While I could have worked around these problems with a fair bit of coding contortion, I ultimately decided that it was simpler and cleaner to focus on selecting only those elements that I could be certain to find on the page regardless of the configuration of the particular blog Ex-Static is installed on.

# Conclusion

Developing software with both flexible third-party customization and solid user-experience was a real challenge at times but I took away a lot from the demands of trying to serve two masters. I'm extremely glad I took the time to no only implement the tour feature but to spend a bit of extra time engineering a solution with the potential to scale beyond my own immediate needs. I am also pleased to report that I asked a few of the folks who had shared their confusion with me earlier to take a look at the site with it's newly implemented tour and I received extremely positive feedback on their experience getting acclimated to the application.
