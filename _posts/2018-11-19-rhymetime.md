---
layout: post
title: "Project Spotlight: Rhyme Time"
subtitle:  #add subtitle (optional)
date: '2018-11-19'
description: Taking a look at my Python project Rhyme Time. #(optional)
tags:
  - "Project Spotlight"
  - Python
  - Testing
  - API
img: pisit-heng-642891-unsplash.jpg
fig-caption: # Add figcaption for img (optional)
---

Let's take a look at my recent Python project Rhyme Time.
<!-- more -->
Small projects are an awesome avenue for learning and practicing nearly any kind of skill. For software developers in particular, learning can be a lot more effective when one rolls up one's metaphorical sleeves and actually builds something compared to passively reading documentation or watching a tutorial video.

The thing about small projects is that they can sometimes feel like a poor use of time; They aren't really something you'd want to maintain and flesh out, they're really just a means to an end. For this reason, when I'm just looking to practice learning something new or to code for the love of coding I  often favor working on Open Source contributions where I can get many of the same benefits while doing work that will hopefully have some lasting impact. Sometimes, however, working on a bug-fix or a new feature in a preexisting codebase just isn't a substitute from working on something that I need to build from scratch. When I do work on small personal projects, I like to set out a clear intention: Not only what features my project will have, but what particular skills I am focusing on learning.

Recently I set out to work on a small project to focused on a fun API. The intended feature of my API was to work with finding rhyming words so I decided to call it "[Rhyme Time](https://github.com/jdbean/rhymetime)". My *real* goals in building the project, however, were first to try my hand at building a full application in Python, and second to work on building out a nice test suite. Because I was a little rusty on my basic Python syntax and totally unfamiliar with the broader Python ecosystem, I completely over-commented my code as a learning tool for myself.

To get started, I decided to work in a Python Virtual Environment with Python 3.5, Flask, pytest, and [Pronouncing](https://github.com/aparrish/pronouncingpy) a Python interface to the CMU Pronouncing Dictionary. In the rest of this post I'll describe a bit about the project and my experience in building it but feel free to clone the [project repository on github](https://github.com/jdbean/rhymetime) and have a loot at it yourself. There are detailed [installation instructions](https://github.com/jdbean/rhymetime/blob/master/README.md#basic-install-debianubuntumint-linux) and even a convenient [docker file](https://github.com/jdbean/rhymetime/blob/master/dockerfile) if you want to give the program a try.

# Routes
The API contains just three routes, each offering a distinct service.

## POST randomchoice

The `randomchoice` route accepts a JSON object containing a `words`
key with a value of a list containing two or more elements. The route
returns a JSON object with a key of 1`word` and a value of one of
the submitted elements selected at random.

This route opts for the use of POST over GET in order to be able
to more reliably support lengthy submissions

## GET pronunciations

The `pronunciations` route accepts a query with a `word` argument of one
English word and returns a json object containing a `pronunciations` and a
`word` key. The `pronunciations` key contains a list of the known possible
pronunciations of that word using [ARPAbet notation](https://en.wikipedia.org/wiki/ARPABET).
`word` contains the queried word.

Words are considered 'English' only if they appear in the CMU Pronouncing
Dictionary which contains over 134,000 words and their pronunciations.

## GET rhymes

The `rhymes` route accepts a query with a `word` argument of one
English word and optionally a `pronunciation_id` route corresponding
to the index of the pronunciation returned from `GET pronunciations`.
The route returns a JSON object with a `rhymes` and `word` key. The
`word` key always contains the queried word. If no optional parameter
is provided by the client, the `rhymes` key will contain a list of
all rhymes detected in the CMU pronouncing dictionary for all known
pronunciations of the queried word or, in the event that no rhymes
are found in dictionary, an empty list. If a valid pronunciation
index id is provided, the `rhymes` key will contain a list of only
those words that rhyme with the specified pronunciation.

`GET pronunciations` and `GET rhymes` are intended to be used together
to provide a more advanced search feature than `GET rhymes` alone.

# Unanticipated Learning Opportunity

As I built out my [test suite](https://github.com/jdbean/rhymetime/blob/master/tests/test_api.py)
I discovered what I could only assume was a bug I had inadvertently introduced:
A GET request to `rhymes` without a `pronounciation_id` argument was supposed to return list of
words that rhyme with *all* possible pronunciations of the `word` argument but it
was instead returning a list of words that rhymed only with one possible pronunciation.
After a bit of debugging I realized that the error wasn't in my code but was instead
the result of a bug in the Pronouncing library I was using to interface the CMU Pronouncing
Dictionary dataset.

[Pronouncing's documentation](https://github.com/aparrish/pronouncingpy/blob/0.2.0/docs/tutorial.rst#rhyme) indicated that:

> The `pronouncing.rhymes` function returns a list of all possible rhymes for the given word---i.e., words that rhyme with any of the given word's pronunciations.

but this was not actually the case. I did some digging into the source code for the Pronouncing library and developed a workaround for my Rhyme Time but decided not to leave it there. Since I had already identified the issue, and developed a work around I figured why not upstream some of my work so that other users of Pronouncing could benefit as well?

I tracked down the repository for Pronouncing and submitted an [issue report](https://github.com/aparrish/pronouncingpy/issues/45). I decided to see about fixing the problem in the main source code and was surprised to the see that a test suite and CI system were running that one would think would have detected this error already. I looked through the test and noticed something interesting about the test case for `pronouncing.rhymes`:

```python
def test_rhymes(self):
   def test_rhymes_for_single_pronunciation(self):
       rhymes = pronouncing.rhymes("sleekly")
       expected = [
           'beakley', 'bi-weekly', 'biweekly', 'bleakley', 'meekly',
           'obliquely', 'steakley', 'szekely', 'uniquely', 'weakley',
           'weakly', 'weekley', 'weekly', 'yeakley']
       self.assertEqual(expected, rhymes)
```

The test was absolutely correct but it wasn't comprehensive. "Sleekly" isn't a word
with multiple pronunciations so this test case never identified a problem with then
function. Along with fixing up the function itself I also fleshed out the test suite
a little to handle a few different cases such as words with once pronunciation, words
with multiple pronunciations, words not in the dictionary, and words that simply have
no rhymes (e.g. "orange"). The maintainers of Pronouncing were great to work with
and after a bit of code review merged my [pull request](https://github.com/aparrish/pronouncingpy/pull/46)
for the upcoming release.

# Conclusion

Rhyme Time was a really great little project for me to work on and I'm so glad
that I was able to focus on developing my Python and testings skills. Contributing
to the testing and functionality of Pronouncing was really just a bonus but I
have to admit it felt really great to be able to take the work I had been doing
on my own and apply it in collaboration with other developers.
