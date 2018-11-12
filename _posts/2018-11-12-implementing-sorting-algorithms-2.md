---
layout: post
title: Implementing Sorting Algorithms Pt. II
subtitle:  #add subtitle (optional)
date: '2018-11-12'
description: Implementing more sorting algorithms #(optional)
tags:
  - Mergesort
  - Algorithms
img: william-felker-38344-unsplash.jpg
fig-caption: # Add figcaption for img (optional)
---
This post is going to continue the past few posts' sorting trend.
<!-- more -->
So far we've looked at bubblesort and quicksort of arrays and also about topological sort of a directional graph. In this post I'd like to cycle back to array sorting algorithms. I don't want to sound like a broken record, but I've really been enjoying digging deeper into basic array sorting algorithms! These types of alogrithms peform a ubiquitous function and I think it is really helpful to understand how they do their work. Moreover, they have been an excellent vehicle for understanding some of the nuance in algorithm performance: not only space and time complexity in the aggregate but also in the best and worst case scenarios. It is an absolute mistake to describe quicksort as "the best sorting algorithm". While quicksort does perform very well in many situations, in its worst case scenario is can perform rather poorly with a runtime complexity of O(*n*<sup>2</sup>)*. I'd like to take this post, then, to consider mergesort, an alternative to quicksort.

Mergesort, like quicksort is a "divide and conquer" algorithm; it is based around the basic strategy of solving a problem by breaking it up into smaller chunks. Mergesort involves two main operations: partition and merge. In the partition phase the array is split in half into sub-arrays and in the merge phase those sub-arrays are reassembled in correct order.



```ruby
def mergesort(array)
  return array if array.length == 1
  middle = array.length / 2
  merge mergesort(array[0...middle]), mergesort(array[middle..-1])
end


def merge(left, right)
  result = []
  until left.length == 0 || right.length == 0 do
    result << (left.first <= right.first ? left.shift : right.shift)
  end
  result + left + right
end
```
