---
layout: post
title: First FOSS Contribution Pt. II
subtitle:  #add subtitle (optional)
date: '2018-09-24'
description: My first technical contributions to a major FOSS project. #(optional)
tags:
- FOSS
- Open Source
- Ruby
- Rails
- GitLab
- Development
- Programming
img: rawpixel-678089-unsplash.jpg
fig-caption: # Add figcaption for img (optional)
---

Good development practice isn't just about "making it work"<!-- more --> one needs to consider code style, efficiency, and of course testing (not to mention navigating the written and unwritten processes for getting your code accepted and deployed into production)!

As you might recall from [Part I](/first-foss-contribution), over the past weeks I've been on a mission to actively contribute to free and open source software (FOSS) and am using these posts as an opportunity for me reflect on the process and for readers to get a sense of what contributing to a new project might look like.

As a quick recap, in part one I covered:
1. [selecting a FOSS project (GitLab)](/first-foss-contribution#selecting-a-foss-project);
2. [getting started with a developmenty environment](/first-foss-contribution#getting-started);
3. [selecting an issue to work on](/first-foss-contribution#finding-a-first-issue-to-work-on); and
4. [resolving the issue](/first-foss-contribution#fixing-the-issue).

# Running The Test Suite

Once I was confident that I had a fix in place that was consistent with style guidelines and project norms, I knew I needed to run the test suite. GitLab has a rake test configured to run all the tests `rake gitlab:test`. As soon as this command started running, however, I got the strong sense that these tests were going to take *quite* a while to complete---many hours most likely. I took a look at the [GitLab development docs](https://docs.gitlab.com/ce/development/rake_tasks.html#run-tests) and saw that GitLab encourages developers to use GitLab.com's integrated Continuous Integration testing rather than running the full test suite locally. I pushed my fix to the feature branch of my fork of the GitLab-CE repository and the CI tests started churning. An hour or so later I checked back and was happily met with a screen full of green lights!

# Writing My Own Tests

GitLab's contribution workflow emphasizes providing new tests for most merge requests. In order to have my fix submitted, therefore, I needed to write new tests to make sure that developers don't accidentially break my changes in the future. In many ways, this was the most overwhelming part of my contribution. Prior to beginning work on GitLab I didn't have a lot of experience with such a thorough and wide-ranging test suite. Although GitLab does offer pretty rigorous [documentation for testing](https://docs.gitlab.com/ce/development/testing_guide/index.html) it can be a little intense to digest right off the bat. Ultimately, I was successful in implementing tests for my merge request by working with Rémy Coutable at GitLab who provided me with some really helpful feedback.

 After combing through the test suite and looking for analagous tests I was able to put together some [proposed feature tests](After combing through the test suite and looking for analagous tests I was able to). Rémy gave me some great feedback on style and efficiency improvements for these tests and also suggested that I might want to move all of these tests into the view tests directory. After spending quite a while trying to figure out how to test the breadcrumbs section of the `New Issue` page I finally decided I needed to ask Rémy for more help. I let him know about the trouble I was running into and he decided that the feature tests may have been the right way to go after all. Once I had the proposed tests in place we were good to go.

# Changelog Entry

On last thing I needed before having my change merged was a changelog entry. Adding changelog entries in merge requests can be kind of a pain because it can often cause merge conflicts when multiple developers modify the same line in the changelog file. GitLab developed an elegant solution to this problem: Placing new entries in their own YAML file. I created a new changelog YAML file with my name, a description of my change, and the id of my Merge Request. When the request was merged my YAML file was used to automatically generate a new changelog entry.

#
