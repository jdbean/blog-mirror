---
layout: post
title: Topological Search
subtitle:  #add subtitle (optional)
date: '2018-11-05'
description: Solving a topoligcal search problem #(optional)
tags:
  - Ruby
  - Topological Search
  - Graphs
  - Algorithms
img: raphael-koh-287327-unsplash.jpg
fig-caption: # Add figcaption for img (optional)
---
This week I spent some time working on a CS problem that required me to perform topological search of a graph.
<!-- more -->
The problem didn't seem so complicated at first glance:

> Design a program which takes as input two parameters: an array of tasks and an array containing pairs of dependency relationships. Each dependency relationship consists of a pair of tasks wherein the first task must be completed before the second task is completed. Your progam must must return an array consisting of a valid order in which each of the tasks may be completed or return an error if no valid order is possible.

Solving this problem, however, isn't quite so straightforward as many of the string and array manipulation questions I typically get confronted with on a day to day basis. The question really requires diving into the topic of topological sorting of graphs. This question really excited me so I decided to sit down, put in the time, and work my way through a solution.

What captured my attention about this problem is that its practical application was immediatly clear to me: this is dependency resolution. In other words, the problem solved by this excercise is the same fundamental problem that many of the tools I rely on every single day address such as Bundler to install Ruby gem dependencies, Apt to manage package dependencies on my Debian GNU/Linux laptop, and Systemd to manage process initialization on my servers.

Although the inputs in this excercise are Arrays, they are ultimately describing the edges of a directed graph, *i.e.* a graph in which nodes have a one-way or directional relationship to adjacent nodes. In this case the directionaly is the `dependency -> dependant` relationship between some of the task nodes.

According to [Wikipedia](https://en.wikipedia.org/wiki/Topological_sorting), topoligcal sorting of a directed graph can be described as

>a linear ordering of its vertices such that for every directed edge *uv* from vertex *u* to vertex *v*, *u* comes before *v* in the ordering. For instance, the vertices of the graph may represent tasks to be performed, and the edges may represent constraints that one task must be performed before another; in this application, a topological ordering is just a valid sequence for the tasks. A topological ordering is possible if and only if the graph has no directed cycles, that is, if it is a directed acyclic graph (DAG). Any DAG has at least one topological ordering, and algorithms are known for constructing a topological ordering of any DAG in linear time.

Simple right? So how do we actually implement topological sorting and solve the problem at hand? Let's consider a sample data set.

Lets say that we are given a list of projects and their respective dependency relationships in the following form:

```ruby
tasks = ["a", "b", "c", "d", "e", "f", "g"]

dependencies = [["b", "e"], ["a", "e"], ["f", "b"],
                ["f", "c"], ["c", "a"], ["f", "a"],
                ["b", "a"], ["d", "g"]]
```

As a first step, let's see if we can interpret this data to more naturally visualize it as a graph. The each element in the dependencies array represents a directional connection from, for example, task `b` to task `e`. While we want to capture this representation programattically in Ruby let's start out by using the DOT graph description language to generate a graph diagram. The graph in this sample input can be described (with some tweaks for aesthetics and clarity) by the following DOT file:

```dot
digraph G {
	rankdir=tb
	d -> g;
	f -> b;
	f -> c;
	f -> a;
	b -> a;
	c -> a;
	a -> e;
	b -> e;
	{ rank=same "d" "f" }
	{ rank=same "e" "g" }
	{ rank=same "c" "b" }
}
```

Once compiled, the above file produces this chart:

![chart of sample input](/assets/img/topologicalsort.svg)

From just a quick look at this image we can ascertain a few basic facts:

 1. This graph is disconnected and therefore there is not a path between each node and all other nodes.
 2. This graph contains no cycles and therefore should have at least one valid topological sorting order.
 3. This graph contains nodes with multiple distinct dependencies and therefore likely has multiple valid topological sorting orders because the order of dependencies is not strictly prescribed.

 Here is the first version of the code I came up with to solve this problem:

```ruby
# Main method, takes specified input arrays
# returns array of tasks in valid order
# unless error is raised
def build_order(tasks, dependencies)
  # Converts graph data to hash representation
  deps = create_deps(tasks, dependencies)
  completion_order = []
  # Loops through hash removing tasks which do not have
  # dependencies and adding them to `completion_order`
  while !deps.empty? do
    processing = add_no_dependants(deps)
    completion_order << processing
    # decrement the dependencies key for all dependants
    processing.each do |t|
      if !deps[t][:dependants].empty?
        deps[t][:dependants].each do |d|
          deps[d][:dependencies] -= 1
        end
      end
      # delete the task
      deps.delete(t)
    end
  end
  # return the completion order array
  return completion_order.flatten
end

# Parse graph and store in Hash datastructure
def create_deps(tasks, dependencies)
  deps = Hash.new
  # set the default deps hash value for each task
  tasks.each do |t|
    deps[t] = {dependencies: 0, dependants: []}
  end

  dependencies.each do |d|
      # add each dependant to the dependency's :dependants array
      deps[d[0]][:dependants] << d[1]
      # increment the dependant task's :dependencies counter
      deps[d[1]][:dependencies] += 1
  end

  return deps
end

# Iterate through the `deps` hash to find tasks with
# no dependencies
def add_no_dependants(deps)
  processing = []
  # Find all tasks which have no dependencies
  deps.keys.each do |t|
    if deps[t][:dependencies] == 0
      processing << t
    end
  end

  return processing if !processing.empty?
  # if processing is empty than we have reached an irreconcilable cycle
  raise "An error has occurred. No valid order detected."
end
```
Here is a quick overview of how this code functions:

1. This solution starts out by parse the graph and transforming it it as a hash where each task is the key and the value is a nested hash with a `:dependants` key containing an array of dependant tasks and a `:dependencies` key containing a counter of that task's dependencies.
2. The solution then performs a loop through the graph hash looking for root tasks which have no dependencies.
3. The root tasks are then added to the `completion_order` array and removed from the graph hash.
4. The removed task's dependants also have their `:dependencies` counter decremented.
5. On the next loop around any new root task are identified and the cycle continues until either the each task in the graph has been added to the `completion_order` array or no new root task can be found and an error is raised.

Given the sample input, the program returns:

```console
=> ["d", "f", "b", "c", "g", "a", "e"]
```

What if we tweak the sample in put just a bit by adding a element `["b", "f"]` to the `dependencies` array input? Our graph now looks like this:

![chart of invalid sample input](/assets/img/topologicalsort-1.svg)

And now, when we run our program on this modified input we get the following output:

```console
An error has occurred. No valid order detected.
```

As you can see, this small change creates a big problem! The newly added `b -> f` depency creates a bidirectional connection. In other words, without `f` there can be no `b` and without `b` there can be no `f`. Accordingly there is *no* valid order in which the tasks can be completed and the program correctly raises an error.

This code a solid solution and although I imagine there are some improvemnts I could make in my approach, I must say that I'm quite pleased with it. I did, however, discover something interesting: Topological sort is actually an included module in the Ruby standard library! Using the `TSort` module and a custom class, we can accomplish the same outcome with far fewer lines of code:

```ruby
require 'tsort'

def build_order(tasks, dependencies)
  deps = create_hash(projects, dependencies)
  graph = G.new(deps)
  graph.tsort
end

def create_hash(tasks, dependencies)
  deps = Hash.new

  tasks.each do |t|
    deps[t] = []
  end

  dependencies.each do |d|
    deps[d[1]] << d[0]
  end

  return deps
end

class G
  include TSort
  def initialize(g)
    @g = g
  end

  def tsort_each_child(n, &b)
    @g[n].each(&b)
  end

  def tsort_each_node(&b)
    @g.each_key(&b)
  end
end
```

This is one of the first graph problems I've had to deal with and I'm really excited
to further explore how I can use graphs to solve challenging problems.
