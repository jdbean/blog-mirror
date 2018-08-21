---
layout: post
title: Rails Helpers
date: 2018-08-20
description: Discovering Rails helpers.
tags:
- Programming
- Ruby
- Rails
- Development
img: help.jpg
---

## Introduction

This week I began work on my first substantial technical contribution to a Free and Open Source project. It's been a great experience to be able to apply my engineering expertise in an area that I've spent so much time working in already. The experience really merits a post of its own so in this post I'm going to focus on one particular technical learning experience I had: Rails Helpers.

## Navigating a New Codebase

So I picked out what seemed like an approachable issue for the project, got my development environment up and running, and went off to hunt for the cause of the bug in question. I had poked at the code for this project in the past and have done a few projects using rails but I was nonetheless intially overwhelmed by the formidable size and scope of the code base I was working with. Thanks to a few deep breaths and a little determination, I found that I was able to start to get my bearings fairly quickly. After some sleuthing, I was faily confident that I found the view file responsible for the bug I was hunting for and I was relieved to see that it was a marvelously brief haml file:

```haml
- breadcrumb_title "Issues"
- page_title "New Issue"

%h3.page-title
  New Issue
%hr

= render "form"
```

I had never worked with Haml beforehand but I had briefly looked at it in the past. Combined with my experience using ERB I was comfortable figuring out what going on. Starting from the bottom, the view file is evaluating and inserting the return value of the Ruby/Rails `render` method for the form view. The next section of code up is Haml code to insert the following HTML:

```html
<h3 class="page-title">
  New Issue
</h3>
<hr>
```

The top two lines had me stumped and unfortunately seemed to be the most likely source of the bug I was hunting. I knew that the dash symbol at the start of each line indicated that these lines were evaluating but not inserting the subsequent Ruby code. What I couldn't figure out is where the two methods were coming from.

I had two theories on how to better understand the provinence and function of these two 'mystery' methods. One idea was that these method were features that came in through Rails like `form_for`, `form_with`, `form_tag`, and `link_to` which I had used extensively in the past. A quick search of the rails docs came up with nothing so I moved on to my second theory that the methods were some how being passed in to the views from the corresponding controller. I tracked down the controller and navigating up its inheritance chain all the way to to the main application controller but couldn't find any trace of these methods. Finally, I resorted to rule number one of Eric Raymond's [How To Ask Questions The Smart Way](http://catb.org/~esr/faqs/smart-questions.html#before): Try to find an answer by searching.

![Search First!](/assets/img/search_first.gif)

{:.image-caption}
*The first rule of online fora: Search before starting a new post.*

## Rails Helpers

After searching through the repository I realized that the methods were defined in files under the `app/helpers` directory. After a bit of research on Rails helpers I learned that my first theory on my 'mystery' methods wasn't that far off. Although the methods are not standard rails methods they were acessible thanks to the same rails 'magic' as the `form_with` and `link_to` helper methods I was already familiar with. Rails helper methods are basically just auto-included modules.

It turns out that Rails helper methods are pretty awesome tools when it comes to writing dry, readable, testable code. Helpers allow one to remove verbose and often repetetive conditionals from views. It turns out that all that `breadcrumb_title` was doing was setting up an instance variable:

```ruby
def breadcrumb_title(title)
  return if defined?(@breadcrumb_title)

  @breadcrumb_title = title
end
```

Thanks to a bit of logic tucked away in some broadly utilized layout files in `app/views/layouts` and a couple of other helpers, this helper method allowed the project to set up flexible breadcrumb navigation throughout the its routes. Once I untangled everything for myself I couldn't help but be astounded at how powerful these tools were; due to their elegant the view files remained wonderfully simple and readable. I'm definitly sold on Rails helper methods!

One thing to keep in mind about helpers in Rails is that by default each helper module is included in each and every view. This means that the methods have a global namespace so thoughtful naming and organization becomes particularly important.

## Conclusion

This experience was really fantastic. Navigating a code base of this size and ferreting out some more advanced topics in Rails was exciting, challenging, empowering, and ultimately a really powerful vehicle for learning.
