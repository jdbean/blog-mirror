---
layout: post
title: "Implementing a Progressive Web App"
subtitle:  #add subtitle (optional)
date: '2018-12-10'
description: Adding Progressive Web App functionality to JDBean.net #(optional)
tags:
  - Progressive Web Application
  - PWA
  - Caching
  - Mobile
  - Performance
img: yura-fresh-760055-unsplash.jpg
fig-caption: # Add figcaption for img (optional)
---
This site now features Progressive Web Application ("PWA") functionality!
<!-- more -->

Over the past few weeks I've been focused on a handful of *mostly* under-the-hood improvements to this site. Some of those changes are still in the pipeline and some of them have already been rolled into production. Turning the site into a PWA is one feature that I'm particularly proud of.

# What is a Progressive Web Application?

A progressive Web Application can, in some regards, be thought of as a hybrid of a native application and a web application. This approach featured heavily into the initial releases of iOS which notably did not feature support for 3rd party native applications. As an alternative to native applications, users were encouraged to access make use of bookmarked web sites. The experience of using these 'applications' was less than stellar and iOS eventually opened up to the vibrant application ecosystem it is known for today. The idea of allowing web sites to function more like applications did not disappear, and since that time technologies for allowing more native like web application experiences have improved greatly.

Here are some of the salient characteristics of a PWA:

**Progressive**:
: PWAs provide a functional core experience to users regardless of their browser's support for more advanced features.

**Connection independent**:
: PWAs support seamless offline functionality.

**Installable**:
: PWAs can be installed on many platforms straight from the browser so that they can be interacted with in the same fashion as a native application

**Always up-to-date**:
: PWAs are kept fresh and up-to-date

Do keep in mind, however, that this list is far from a comprehensive definition of progressive web apps.

# What does PWA functionality bring to this site?

Now that we've spent a moment what a PWA is generally, let's focus in on what functionality I've added to the site. Converting this blog into a PWA required two main components (and a healthy dose of experimentation). The first component is a service worker. A service worker is a specially designated script that most modern browsers are able to execute in a special context. Service workers, a subset of workers, are JavaScript that has no DOM access and is executed off the main thread of typical JavaScript code. A service worker registers and installs itself in the browser and is able to perform certain types of actions in the background. On this site, the service worker is entirely concerned with providing improved performance and off-line functionality. When a user (depending on the browser you're using this may or may not apply to you) first loads the site, the service worker installs and activated itself and then proceeds to fetch a specified set of files and caches them for later user. If your browser supports service workers you can try this out right now. Shut off your network connection for a moment and try clicking around the a recent post or to the portfolio page, with a few minor exceptions you should notice that site it still completely functional. Not every asset on the site is cached but there is more than enough to help speed the site up and to ensure that readers like you can keep enjoying the site even if your network connections drops (I'm looking at you New York Subway System!).

The second element I've added to the site in order to adopt PWA features is a Manifest. This simple JSON file specifies a few particulars about how the site should be treated by a given browser / operating system. Depending on your platform and browser you may have already noticed some sort of a prompt to "install" this site or to add the site your homescreen. From my testing thus far, Chrome for Android pops up a large notification bar on the bottom of the page and Chrome for Linux subtly adds a menu option to "Install J.D. Bean". Other browsers such as Firefox don't seem to offer these sorts of local installation options. Going ahead and installing the site is a very smooth process. As far as I am aware, the behavior of the installed site itself remains identical to its behavior in the browser. However, the application appears along with natively installed applications with a name, icon, and even a splash screen on Android. On some platforms, the installed application can even be set to hide the address bar and navigation buttons.

# Takeaways
PWAs are a really powerful tool for pushing web applications toward offering a legitimate alternative to native applications. Because my site is intentionally simple when it comes to interactive features I've actually only scratched the surface of that one can accomplish using PWA technologies. One feature I'd like to implement when I get a chance, is a mechanism for displaying a custom page when an offline viewer attempt to load a page that is not yet present in the cache.

In terms of impact from introducing these features, the initial load time of this site is probably marginally reduced by the time needed to serve a bit of additional JavaScript which is something that I think is important to keep in mind. I think, however, that the overall experience of navigating this site is likely much improved for most subsequent reloads. It took me a good deal of experimentation to get everything working correctly and I've definitely had more than my share of opportunities to wrestle with the challenges of client-side caching for a live web site. So far, I believe that I've struck the right balance in the way I've set up caching so that it will not inhibit users from promptly receiving updated content. I'm cautiously optimistic and I'll be keeping my eye on this issue to make sure that there are no tricky quirks that I haven't yet detected in testing. I encourage anyone who notices any odd behavior on the site to please get in touch and let me know what's going. If you've enjoyed reading this blog, please install the application and check back for regular updates!

