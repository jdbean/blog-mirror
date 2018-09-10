---
layout: post
title: Rails Presenters
date: '2018-09-03'
description: My first taste of the Rails presenter pattern.
tags:
- Programming
- Ruby
- Rails
- Development
- Patterns
img: presentation.jpg
---

While working on a new issue this week I came upon and interesting concept: Rails presenters.
<!-- more -->
In a [recent blog post](/rails-helpers) I wrote about my dive into Rails helpers while working on some of my first code contributions to a substantial FOSS project. Presenters are different from Rails helpers but appear somewhat similar at first glance. Unlike Rails helpers though, presenters seem to be more of an independent design pattern than a feature built in to the Rails framework. Before diving in much further it's probably worth noting that some of the issues I'm going to try to discuss here are fairly complex and many are certainly up for debate. In fact, it is entirely possible that I don't have the slightest idea what I'm talking about. So take that as you will.

As a quick introduction for any readers who might be unfamiliar, the Rails framework subscribes to the model-view-controller (MVC) pattern of developing user interfaces. In the MVC paradigm, models are tasked with managing the data of an application's resources while views are responsible for presentation of the model to the user and the controller handles receiving user input and translating it into commands for the models. Some would argue that the kind of paradigm Rails encourages doesn't technically qualify as genuine OG MVC but I don't see the benefit of engaging with that debate for the purposes of this post.

MVC, as Rails implements it, has a number of advantages: It enforces a separation of concerns and greatly decoulples many aspects of an application from one another. This generally leads to better organized and easier to work with code bases. While the distinctions between models, views, and controllers can be fairly easy to spot in broad strokes, MVC has its grey areas.

Rails helpers, for example, occupy an odd space. They are commonly used to provide reusable methods for producing view  that can be invoked in any view file. Although ideally views would be as close to a template as possible, it is difficult for a complex application to avoid some degree of logic in views. In Rails 5 and on, [Helper methods can even be easily called in controllers methods](https://api.rubyonrails.org/v5.2.0/classes/ActionController/Helpers.html) through the use of `#helpers`. The examples that I've seen have convinced me that Rails helpers are an extremely powerful tool for sliming down views and collecting large portions of view-related logic into a location dedicated to that purpose. With great power comes great responsibility and my reading suggests that helpers are extremely easy to misuse and their shared namespace can contribute to helpers becoming a poorly organize dumpster fire of regret for the unwise.

Rails presenters are another new-to-me way of dealing with some of the thornier issues that can come up when trying to maintain the MVC paradigm in Rails. Presenters aren't the same as helpers and they aren't the ideal solution to all of the problems that helpers can be useful in solving. The presenter pattern for Rails offers a slightly different approach to a slightly different problem than helpers. From what I've gathered, presenters in Rails are a way of developing an object-oriented solution to the need for shared logic that transforms data from the model for consumption in the view.

Presenters open up some really interesting possibilities by allowing one to access a special class that contains custom view-related logic/data methods for a particular model. Using a presenter helps to keep logic out of views but also to keep models from swelling with methods that are needed entirely for use in a view.

I've seen a few different way of implementing presenters but here is the basic idea. First set up a `BasePresenter` class like so:

```ruby
class ApplicationPresenter < SimpleDelegator
  def initialize(model)
    super(model)
  end
end
```

This creates a new class which thanks to Ruby's `SimpleDelegator` class and `super` in the class `intialize` method, the class will pass on any methods that are not defined in the class to the specified model.

Using this base class, for each model that you want to create a corresponding presenter, set up a child class of ApplicationPresenter using the format `[model]Presenter` like so:

```ruby
class ExamplePresenter < ApplicationPresenter
  def custom_view_logic
    [custom view logic here]
  end
end
```
In order to instatiate presenter objects conveniently, setup a helper method to wrap the parent model object like so:

```ruby
module PresenterHelper
  def present(model)
    klass = "#{model.class}Presenter".constantize
    presenter = klass.new(model, self)
    yield(presenter) if block_given?
  end
end
```

This wrapper function allows one call custom logic in a view file with something like this:

```haml
- example = present(@example)
  %h1= example.name
  %p= example.custom_view_logic
```

When presenters are used responsibly, view-related rules are more explicit and views are more readable and maintainable. I'm not so sure that presenters would be my first stop if for my next Rails project but I'm glad to know that they are an option and to understand a bit more about Rails by understanding the need that they fill.
