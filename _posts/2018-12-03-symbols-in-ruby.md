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
A little while back I was sitting with another software engineer discussing how to *optimally* solve a particular problem. After a bit of back and forth debate and some solid collaborative brainstorming we settled on what we felt was the best overall approach but we decided to spend a few moments discussing any potential targeted optimizations that we might be able to make to eke out just a little bit better performance. I tossed out the idea of using a Symbol, a relatively commonly used data type in Ruby, in favor of a String. The engineer I was working with wasn't familiar with Symbols so he asked me to explain.

I tried to do so but I quickly came to the realization that I really needed to do a little reading before potentially misleading someone else. Symbols are so common in even basic Ruby programming that I hadn't considered that they might be rarely (if ever) used in other languages. It turns out that in many languages neither symbols nor their analogs are a supported data type.

# Properties of Symbols

At first glance, Symbols in Ruby seem to have a good deal in common with Strings. They are both objects and they both can be used to represent a word. In fact, although Symbol object do not have all of the same methods as String objects they do have decidedly String-like methods such as `#upcase`, `#downcase`, and `#capitalize`.

Symbols are distinct from Strings, however, and one of the most obvious differences between the two is that Symbols are immutable. In this sense, Symbols can be said to resemble Constants. While strings can be made immutable through `#freeze`, Symbols are inherently immutable. Symbols can also be faster to work with than a String because each reference to a Symbol having the same value uses the exact same object in memory instead of creating an additional instance of the class would be the case with a String.

# Uses for Symbols

Symbols are often used in place of Strings as the keys in a Hash and, as I was suggesting in this particular instance, they can also be used as the value when the Symbol is standing in as a representation for a particular state/status. For example if a given vehicle object is either parked, in drive, or in reverse, one could set the vehicle objects status to `:reverse`, `:parked` or `:drive`. This approach is easier for developers to work with than using an integer (i.e. `1`, `2`, or `3`) more convenient than using a constant (i.e. `PARKED = "parked"`) and both more reliable and more performant than using a string (i.e. `"parked"`).

Another common use of symbols is when passing a method name as an argument to another method like in the final line of this example code:

```ruby
class Klass
  def hello(*args)
    "Hello " + args.join(' ')
  end
end
k = Klass.new
k.send :hello, "gentle", "readers"   #=> "Hello gentle readers"
```

Symbols also show up as arguments for the heavily used `attr_accessor`, `attr_reader`, and `attr_writer` methods for defining class getters and setters.

# Conclusion
This research didn't really uncover much that I wasn't already aware of and it may not be new to you either as a reader. That said, being asked to explain something that I had simply taken at face value did help me to link together a bunch of disparate pieces of information into a more cohesive understanding. Prior to going through this process I had a sense of how to work Symbols and an idea of what they were recommended for but I honestly didn't really *think* about what why they exsisted. I feel fairly comfortable now describing a Symbol as an immutable String-like object which is optimized for use as a label of sorts (at least in Ruby). I also learned that ECMAScript6(ES6) introduced Symbols as a primitive type for JavaScript!
