---
layout: post
title: Recursion (Again)
subtitle:  #add subtitle (optional)
date: '2018-10-08'
description: Working with Recursion #(optional)
tags:
  - Algorithms
  - Recursion
  - Programming
img: tine-ivanic-679622-unsplash.jpg
fig-caption: # Add figcaption for img (optional)
---

I find designing recursive algorithms to be a real challenge.
<!-- more -->
If it wasn't absolutely clear from my last post on [recursion](/recursion), I definitely struggle when it comes to thinking recursively. In preparation for my earlier post I put in a good chunk of time to trying to get myself comfortable with recursive concepts and most importantly firming up my grasp on how the execution of recursive algorithms operates. Writing that post was a great help and had me feeling much better about recursion. Recently, however, someone tossed me a bit of a curve ball that has me taking another dip into recursion. I was asked to design an algorithm to solve a pretty simple problem: Take an input of a string representing a single word and return the reverse of that string. There was just one extra requirement---the algorithm had to be implemented recursively. No matter how hard I tried to think recursively, I kept finding myself dragged back toward my familiar habit of iteration.

While I feel pretty decently about my ability to work with recursive algorithms that I encounter, I still get blocked when it comes to designing an original recursive algorithm myself. I understand how recursion works. I know that I need a base case to reduce down toward. For some reason, however, I seem struggle when it comes to putting it all together and developing my own recursive solution to a problem. Recursion, it seems, simply isn't yet a natural way for me to approach problem solving. In this post I'm going to return to the topic of recursion and spend a bit of time working through a recursive solution to the particular string reversal problem that had me so stumped.

To review, the problem is this: *Design a recursive algorithm that takes a string representing a single word and returns the string in reverse.*

In order to get started with a recursive solution I'll need to identify one or more base case conditions to reduce the problem down towards. My initial instinct was that the base case should be a string of length one but it seems that a common approach is to use an empty string (`""`) as the base case. A solution using this common base case approach starts out looking like this:

```javascript
function reverseStringRecursively(str) {
  if (str === "") { // I'm the base case!
    return "";
  }
}
```

What am I trying to do with a base case of an empty string? How does one usefully reduce down toward an empty string in order to return a reversed string? I think the best way for me to figure that out is to try to model out what I might do if I were asked to reverse a string myself by hand. If given a very long string to reverse I would probably construct a reversed string by successively removing the first character from the start of the initial string (crossing each character off) and prepending that character to the start of the reversed string. Once I had removed the last character from the initial string, I would stop. Iteratively speaking this would be equivalent to something like this in code:

```javascript
function reverseStringIteratively(str) {
  let reversed = ""
  let forward = str
  while (forward.length > 0) {
    let first = forward[0]; // get the first char in the string
    reversed = first + reversed; // add to the start of new string
    forward = forward.substring(1); // chop the the first char off the string
  }
  return reversed
}
```

But of course, I'm making the same mistake I usually make: I'm thinking *iteratively* rather than recursively! How can I go about converting this iterative solution into a recursive one? It still isn't particularly natural for me but it seems I'd do something like this:

```javascript
function reverseStringRecursively(str) {
  if (str === "") { // I'm the base case!
    return "";
  } else {
    // console.log(`${str.substrring(1)} + ${str[0]}`);
    return reverseString(str.substring(1)) + str[0];
  }
}
```
Here, instead of storing the reversed string in a variable (`reversed` in my iterative solution), I employ recursion to apply the addition of each character all at once. If one uncomments the logging line and executes the function with an argument of `"recursive"`, it should print the following output:

```console
ecursive + r
cursive + e
ursive + c
rsive + u
sive + r
ive + s
ve + i
e + v
 + e
=> 'evisrucer'
```

As you can see, the function reduces the initial string down until it is empty and therefore triggers the base case. The function then resolves back up adding each character to a new empty string. Interestingly, my initial instinct about the base case might not have been so off base after all. I can easily tweak this function to use `str.length <= 1` as the base case.

```javascript
function reverseStringRecursively(str) {
  if (str.length <= 1) { // I'm the new base case!
    return str;
  } else {
    return reverseString(str.substring(1)) + str[0];
  }
}
```

This change to the code not only returns the correct reversed string but it also has the benefit of avoiding one extraneous recursive function call by starting to resolve when the string contains only its last character instead of none. The execution of this modified function should now behave like this:

```console
ecursive + r
cursive + e
ursive + c
rsive + u
sive + r
ive + s
ve + i
e + v
=> 'evisrucer'
```

That wasn't so hard, right? Yes and no. Recursion isn't really that difficult but, at this point, it is without a doubt *awkward* for me. I am simply not yet a native recursive thinker and I am still pretty likely to get thrown by a request to solve a specific problem recursively. This isn't a problem that can, or for the matter should, be solved with memorization. The only way that I am going to be able to improve on my recursive algorithm design abilities is by forcing myself to practice. Perhaps, as a starting point I will try to work on improving my ability to adapt iterative solutions into recursive ones.
