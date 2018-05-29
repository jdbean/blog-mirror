---
layout: post
title: What Makes "Good" Code?
date: '2018-05-28 16:19:46'
description: What are the characteristics of "good" programming code?
tags:
- Programming
- Blogging
- Software
- Development
img: markus-spiske-109588-unsplash.jpg
---


As a relative newcomer to software development I have tried, wherever possible, to practice good programming habits. I've picked these habits up from resources along the way, and sniffed some out through experience and instinct. As I write my code I try to pay attention to conventions on style, approach, and organization. I look at style guides and emulate the best practices I can find and I did my best to cultivate the that little voice in the back of my head that says things like "this feels wrong, there must be a better way to do this" or "you may not care about it right now but when you come back to this in a few days you're going to really wish you had...".

The more I work with software source code, the more I am beginning to realize that "good" code isn't as clear cut as I might like. It seems like a tangled rats nest made up of equal parts good habits, good instincts, and idiosyncratic preferences. I'm going to use this blog post as an opportunity to share what I've learned so far in my journey about what makes good code "good".

## Good Code Works Good


Although there is a decidedly subjective element to the notion of "good code" there is one characteristic that seems to be accepted nearly universally as requirement for quality software: It has to work correctly. Yup, you heard it right, the very first rule of writing truly great software is to make sure that the software is functionally suitable for its intended use.

## Everything Else

Aside from working and being delivered on time, different people place different emphasis on different characteristics of code when deciding its merit. Aside from functional adequacy there are really only a handful of broad virtues of software code:

 * Ease of Testing
 * Ease of Review
 * Ease of Modification
 * Optimization/Efficiency

Each of these virtues is aimed at ensure that our code can be improved upon and put to use in production in the minimal amount of time, with the minimal amount of frustration and with the minimal potential for bugs.
In other words, to steal a line from [Joe Ferris](https://robots.thoughtbot.com/what-is-good-code), "[c]ode is good when it works and we can work with it."

### Optimization/Efficiency


>We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%
>
> --- Donald Knuth (esteemed computer scientist and founder of Tex)

Initially I believed that truly excellent code was synonymous with the kind of highly optimized rarefied code that one really needs to know one's stuff in order to read much less to write. While I still believe that good programmers should avoid introducing needless inefficiencies in to their programs I no longer feel that the efficiency and conceptual complexity of code is the primary indicator of it's overall quality. In fact, I now realize that when efficiency comes at the cost of increased complexity and decreased readability it can often result in a net decrease to the code's quality.

### Ease of Review

![Code Quality](/assets/img/code_quality_2_2x.png)

{:.image-caption}
*I have the sneaking suspicion that this is how everyone who sees my code reacts. Comic courtesy of [XKCD](https://xkcd.com/1695/)*

Chances are that someone, at some point in the future, is going to need to review your code without the benefit of having you walk them through it step by step. Maybe that person is your boss or coworker, or maybe that person if your future self. Readablity of code is therefore critical. Readable code should be well commented and include descriptive naming of variables and functions. Readable code should also be well-organized and well-formatted. Although there is a degree of subjectivity in one's choice of style or convention, remaining consistent within one's code can be a major factor in ensuring that code is easy to read and to understand.

### Ease of Editing

Unless you are a perfect developer working a in a perfect world, there is a very high chance that at some point someone will need to make changes to your code in order to fix a default or extend its functionality. In many respects, both testing and readability factor heavily into whether or not a piece of software can be easily modified. Software which is easy to modify must be understandable and it can be a great help if tests are already in place to ensure th

### Testing/Testablity

Test-driven development is a software development methodology in which automated tests are written before coding any new feature. Test-driven development can be a powerful strategy for protecting against inadvertent defects in software and can significantly decrease the friction a new developer experiences when beginning to working with a codebase.

I am only just beginning to learn about writing tests and testable code and although  Although [Miško Hevery's Guide to Writing Testable Code](http://misko.hevery.com/attachments/Guide-Writing%20Testable%20Code.pdf) is a bit above my head at the moment, I look forward to learning more as I continue to grow as a developer.

I am, however, already familiar with the benefits of a well-crafted test-suite (and unfortunately the frustration that often comes with brittle tests). Well tested code allows me to understand the impact of the changes I make in a codebase and allows me to narrow my focus to one clearly stated digestible problem at a time.
