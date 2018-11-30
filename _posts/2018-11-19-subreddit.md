---
layout: post
title: "Project Spotlight: SubReddit"
subtitle:  #add subtitle (optional)
date: '2018-11-26'
description: Taking a look at my Python project SubReddit. #(optional)
tags:
  - "Project Spotlight"
  - Python
  - Testing
  - API
img: neven-krcmarek-145603-unsplash.jpg
fig-caption: # Add figcaption for img (optional)
---

Let's take a look at my recent project SubReddit.
<!-- more -->
As I mentioned in my [last post](/rhymetime), I feel that working on small projects is an essential vehicle for learning and is especially so when approached with a clear intention. In this post I want to take a look at my recent project [SubReddit](https://github.com/jdbean/subreddit). SubReddit is a small single-page application built using the React framework. The application displays a preview of the top posts from the film subreddit [r/analog](https://www.reddit.com/r/analog) including number of likes, title, author, how long ago it was posted, and most importantly those beautiful photos! The application also allows users to create and manage a collection of favorite posts which they can enjoy in the favorites tab.

My intention in working on this project was to focus on building out styling from scratch. When starting up a new project it can be incredibly tempting (sometimes rightly so) to create an MVP using a well established frontend UI framework like [Semantic UI](https://semantic-ui.com) or [Bootstrap](https://getbootstrap.com) and to add new styling or even override framework styling where your project calls for something unique or at least different. I've taken this approach using both Semantic UI and Bootstrap in prior projects and I felt it was leading me toward some bad habits; namely that I was becoming too dependent on struggling to fit a square peg into a round when sometimes it really makes more sense to just build something from the ground up yourself. UI Frameworks can also add a lot of bulk to a site and tree shaking only the parts of the framework you need takes some time and effort to get set up that might just be better spent elsewhere.

One reason for wanting to focus on DIY styling task is that I find that most people are much more comfortable *editing* the work of others than they are *producing* a rough draft. There can be something incredibly intimidating about a blank page (or an empty file in this case) but I feel that coming to terms with the challenge of creating something completely new is a critical part of what it means to be a developer. That said, the day to day of software development often has little to do with building something completely from scratch. I often chuckle a little bit to myself when someone has a look at a project of mine and asks "wow, did you make all of that?". Even when the work is all my own, in a sense the answer is "no" because of the great debt I owe to the developers who built the foundational tools on which my work depends. I find, however, that when I practice building something on my own it often leaves me better equipped to adapt the work of others. Through the struggle of making something of my own by  building out some SASS/CSS by hand or working directly with SVGs, not only do I practice designing solutions with those technologies, but I am also better able to understand how to approach something like a frontend UI framework and adapt it to my needs in the future.

After a bit of tinkering on SubReddit, I ended up with an application that feels pretty good:

![SubReddit](/assets/img/subreddit.gif)
*Don't just watch the GIF, checkout the [live application](https://jdbean.github.io/subreddit/) for yourself!*

Getting the hovers, transitions, and x translations of the "favorite" buttons for the images to work smoothly together took a bit of experimentation but was a fun challenge. I was really set on having something that was fast, lightweight, and worked consistently across a variety of desktop and mobile browsers. In addition to some generous use of [Can I Use?](https://caniuse.com/) I spent a good amount of time carefully testing my work using the responsive design tools of Firefox and Chrome on my Debian Linux machine and I was also able to borrow a MacOS machine and an iOS device to quickly test out the site in Safari on those platforms to make sure that everything worked smoothly and as intended.

I also did some testing on Firefox and Chrome for Android. At one point I hit a sticky problem getting something to render properly in both of these browsers and I got pretty frustrated trying to debug the issue on mobile without any of the browser tools I was accustomed to. I decided to finally spend a little time learning how to remote debug both [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging/Debugging_Firefox_for_Android_with_WebIDE) and [Chrome](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/) for Android through their desktop counter parts. The process was fairly similar for both Firefox and Chrome. Both required ADB debugging to be enabled and configured (something I was already comfortable with) and once I got them running they both functioned incredibly smoothly. Getting remote debugging hooked up made such a difference and my issue was sorted out in no time. I can't wait to use remote debugging again!

In the end, I'm really pleased with how this project turned out and more importantly with what I learned along the way. The project feels clean and professional without being too stark and best of all, I can comfortably say that I implemented all of the style elements myself from the ground up. I'm not so sure that will always be the best choice for every project I work on but I'm really glad to have given myself this opportunity to practice these skills!
