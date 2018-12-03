---
layout: post
title: "Symbols in Ruby"
subtitle:  #add subtitle (optional)
date: '2018-12-03'
description: Having a closer look at Ruby Symbols. #(optional)
tags:
  - Ruby
  - Symbol
img: rawpixel-584292-unsplash.jpg
fig-caption: # Add figcaption for img (optional)
---

In this post, I'd like to have a closer look at the Symbol data type in Ruby.
<!-- more -->
A little while back I was sitting with another software engineer discussing how to *optimally* solve a particular problem. After bit of back and forth debate and some solid collaborative brainstorming we settled on what we felt was the best overall approach but we decided to spend a few moments discussing any potential targeted optimizations that we might be able to make to eke out just a little bit better performance. I tossed out the idea of using a Symbol, a relatively commonly used data type in Ruby, in favor of a String. The engineer I was working with wasn't familiar with Symbols so he asked me to explain.

I tried to do so but I quickly came to the realization that I really needed to do a little reading before potentially misleading someone else. Symbols are so common in even basic Ruby programming that I hadn't considered that they might be rarely is ever used in other languages. It turns out that in many languages neither symbols nor their analogs are a supported data type.

# Properties of Symbols

At first glance, Symbols in Ruby seem to have a good deal in common with Strings. They are both objects and they both can be used to represent a word. In fact, although Symbols have all of the same methods as Strings they do have decidedly string-like methods such as `#upcase`, `#downcase` and `#capitalize`.

Symbols are distinct from Strings, however, and one of the most obvious differences between the two is that Symbols are immutable like a Constant. While strings can be made immutable through `#freeze`, Symbols are inherently immutable. Symbols can also be faster to work with than a String because each reference to a Symbol with the same value uses the exact same object instead of creating an additional instance of the Symbol class.

# Uses for Symbols

Symbols are often used in place of strings as the keys in a Hash but, as I was suggesting in this particular instance, they can also be used as the value when the Symbol is standing in as a representation for a particular state/status. Another common use of symbols is when passing a method name as an argument to another method.

Symbols also show up when defining `attr_accessor`, `attr_reader`, and `attr_writer` for class getters and setters.

# Conclusion
This research didn't really uncover much that I wasn't already aware of and perhaps it didn't do so for you either. That said, being asked to explain something that I had simply taken at face value did help me to link together a bunch of disparate pieces of information into a more cohesive understanding. I feel fairly comfortable now describing a Symbol as and immutable String-like object which is optimized for use as a label of sorts (at least in Ruby). I also learned that ECMAScript6(ES6) introduced Symbols as a primitive type for JavaScript!
