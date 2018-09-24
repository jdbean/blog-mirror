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
img: rawpixel-653764-unsplash.jpg
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

 After combing through the test suite and looking for analagous tests I was able to put together some [proposed feature tests](https://gitlab.com/gitlab-org/gitlab-ce/blob/f59e3438ef8faee5b03de221db78107ef6c06c67/spec/features/issues/user_sees_breadcrumb_links_spec.rb). Rémy gave me some great feedback on style and efficiency improvements for these tests and also suggested that I might want to move all of these tests into the view tests directory. After spending quite a while trying to figure out how to test the breadcrumbs section of the `New Issue` page I finally decided I needed to ask Rémy for more help. I let him know about the trouble I was running into and he decided that the feature tests may have been the right way to go after all. I ultimately ended up with some fairly simple tests that looked like this:

 ```ruby
require 'rails_helper'

describe 'New issue breadcrumbs' do
  let(:project) { create(:project) }
  let(:user)    { project.creator }

  before do
    sign_in(user)
    visit new_project_issue_path(project)
  end

  it 'display a link to project issues and new issue pages' do
    page.within '.breadcrumbs' do
      expect(find_link('Issues')[:href]).to end_with(project_issues_path(project))
      expect(find_link('New')[:href]).to end_with(new_project_issue_path(project))
    end
  end
end
 ```

Once I had the proposed tests in place we were good to go.

# Changelog Entry

On last thing I needed before having my change merged was a changelog entry. Adding changelog entries in merge requests can be kind of a pain because it can often cause merge conflicts when multiple developers modify the same line in the changelog file. GitLab developed an elegant solution to this problem: Placing new entries in their own YAML file. I created a new changelog YAML file with my name, a description of my change, and the id of my Merge Request like so:

```yaml
---
title: "Fix breadcrumb link to issues on new issue page"
merge_request: 21305
author: J.D. Bean
type: fixed

```

When the request was merged my YAML file was used to automatically generate a new changelog entry.

# Merging/Deployment

When I began working on this issue the `New Issue` page looked like this:

![New Issues Breadcrumb Issue](/assets/img/gitlab-new-issues-issue.png)
*The GitLab "New Issue" page before my contribution*

Once my merge request was approved it was set to merge and about a day later, I logged in to GitLab.com to submit a new issue and I saw this:

![New Issues Breadcrumb Issue Resolution](/assets/img/gitlab-new-issues-fixed.png)
*The GitLab "New Issue" page after my contribution*

Admittedly, in the grand scheme of things the change is pretty small but it felt awfully good to see my change in production to rapidly. When the GitLab's monthly release for its self-hosted edition rolle around on September 22nd, I updated my own installation of the software and had my fix running live on my own production system.

# Conclusion

Seeing my change up live on heavily trafficked site so quickly was incredibly gratifying and the whole process of making this contriution was an excellent learning experience for me. I've since gone on to report and [fix simlar issues](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/21502) [on other pages](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/21661) and also moved on to work with some more substantial issues such as a [bug in GitLab's automated project license recognition code](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/21508) and [adding project license data to the GitLab API](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/21606).
