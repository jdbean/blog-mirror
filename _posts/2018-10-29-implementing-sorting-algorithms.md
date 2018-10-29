---
layout: post
title: Implementing Sorting Algorithms
subtitle:  #add subtitle (optional)
date: '2018-10-29'
description: Implementing Quicksort in Ruby #(optional)
tags:
  - Ruby
  - Javascript
  - Bubblesort
  - Quicksort
  - Algorithms
img: marco-secchi-549646-unsplash.jpg
fig-caption: # Add figcaption for img (optional)
---

Lately, I've been spending some time trying to better understand some fundamental algorithms.
<!-- more -->
Sorting algorithms have been a particularly interesting area of study. Sorting and array is a common task and there are a wide variety of well-established sorting algorithms to dig into.

#Bubblesort

I started out looking at Bubblesort. Bubblesort is a fairly simple concept---just step through an array comparing each pair of values and swap if them if the value at the higher index is less than the value at the lower index. This ends up functioning like this:

![Bubblesort example](/assets/img/Bubble-sort-example-300px.gif)
*[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) courtesy of Swfung8 on [wikipedia.org](https://wikipedia.org).*

As a visual learner, I rigged up a setup for visualizing array changes in javascript and implemented my bubblesort algorithm like this:

```javascript
function bubbleSort(arr) {
  let length = arr.length;
  //iterate over the entire array n times
  for (let i = 0; i < length; i++) {
    //on each pass, iterate through each element
    for (let j = 0; j < (length - i - 1); j++) {
      //Compare adjacent value pairs
      if (arr[j] > arr[j + 1]) {
        //Swap the numbers
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}
```

In this code, I iterate through the array `n` times where `n` is the length of the array and, on compare each pair of adjacent values and swap them if the greater value is located in the lower index of the pair. Here is a cool visualization of this exact code executing in my browser:


![Bubblesort](/assets/img/bubblesort.gif)
*Visualization of bubblesorting an unsorted array of integers*

Not bad huh? Bubblesort is nice a straight forward but, as you might have reasoned for yourself by now, it also slow as molasses. With a runtime complexity of *O(n<sup>2</sup>)*
