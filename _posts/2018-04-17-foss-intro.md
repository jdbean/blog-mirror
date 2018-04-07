---
layout: post
title: "FOSS Basics"
date:  2018-04-07
description: > #(optional)
    An introduction to free and open source software
    for new developers.
img: alvaro-serrano-133380-unsplash.jpg
tags: [FOSS, Free and Open Source Software, Copyright]  #(optional)
---

# A Free and Open Source Primer for New Developers

> Free as in ‘speech’ not as in ‘beer’
>
> \- FSF (RMS?)

*DISCLAIMER: Nothing in this post should be construed as legal advice and it is not a substitute for the advice of a competent attorney. This post is intentionally written as introductory material intended for those wholly unfamiliar with concepts such as FOSS and software licensing. It is intentionally over-simplified.*

Free and open source software (“FOSS”) is hard to escape in the modern software development landscape. The majority of the tools I’m using to learn software development are FOSS: GNU/Linux, Atom, Ruby, PostgreSQL, SQLite, Git, Firefox, Bash and so forth and so on. Coming from my background working with FOSS developers I’m familiar with the minutiae of FOSS; for many of the folks that I’m learning alongside of however, FOSS is probably a somewhat hazy concept that might be hard to distinguish from something like freeware.  I thought I’d use this post to provide a brief introduction to the basics of FOSS for new developers.

# “Free” and “Open Source”

It is quite common to assume that FOSS describes software that is both free of cost and for which the source code is available to the public for review. While these characteristics are both common for FOSS, neither is actually a necessary condition to be considered FOSS.
Free software and open source software are basically two schools of philosophy for describing the same thing. Most of the time, software which qualifies as “free” is also “open source’: hence “free and open source”.
The “free” in free software, contrary to popular belief, does not refer to pricing. Instead, the “free” in free software refers to being free from restriction. Proponents of the free software movement are fond of the sayings “free as in speech not as in beer” or “free as in freedom” to describe free software. In fact, charging for free software is an entirely acceptable practice. The free software movement (also sometimes called the free/libre software movement) is a social movement predicated on ensuring the rights of individuals with respect to the software that they use.
Open source was a term coined in 1998 as an effort to rebrand some of the concepts free software. Open source has come to represent a pragmatic reimagining of free software in a form that emphasizes business advantages and technical-merit over ethical questions.

The Free Software Foundation (“FSF”) and the Open Source Initiative (“OSI”), are each well-regarded authorities for defining the boundaries of their respective movements. For FSF, free software must provide users with the following four freedoms:

> FOUR FREEDOMS
>
> The freedom to run the program as you wish, for any purpose (freedom 0).
>
> The freedom to study how the program works, and change it so it does your computing as you wish (freedom 1). Access to the source code is a precondition for this.
>
> The freedom to redistribute copies so you can help your neighbor (freedom 2).
>
> The freedom to distribute copies of your modified versions to others (freedom 3). By doing this you can give the whole community a chance to benefit from your changes. Access to the source code is a precondition for this.

For OSI, open source software must be distributed on terms that meet the following criteria:

>THE OPEN SOURCE DEFINITION
>
>1\. Free Redistribution
>
>The license shall not restrict any party from selling or giving away the software as a component of an aggregate software distribution containing programs from several different sources. The license shall not require a royalty or other fee for such sale.
>
>2\. Source Code
>
>The program must include source code, and must allow distribution in source code as well as compiled form. Where some form of a product is not distributed with source code, there must be a well-publicized means of obtaining the source code for no more than a reasonable reproduction cost, preferably downloading via the Internet without charge. The source code must be the preferred form in which a programmer would modify the program. Deliberately obfuscated source code is not allowed. Intermediate forms such as the output of a preprocessor or translator are not allowed.
>
>3\. Derived Works
>
>The license must allow modifications and derived works, and must allow them to be distributed under the same terms as the license of the original software.
>
>4\. Integrity of The Author's Source Code
>
>The license may restrict source-code from being distributed in modified form only if the license allows the distribution of "patch files" with the source code for the purpose of modifying the program at build time. The license must explicitly permit distribution of software built from modified source code. The license may require derived works to carry a different name or version number from the original software.
>
>5\. No Discrimination Against Persons or Groups
>
>The license must not discriminate against any person or group of persons.
>
>6\. No Discrimination Against Fields of Endeavor
>
>The license must not restrict anyone from making use of the program in a specific field of endeavor. For example, it may not restrict the program from being used in a business, or from being used for genetic research.
>
>7\. Distribution of License
>
>The rights attached to the program must apply to all to whom the program is redistributed without the need for execution of an additional license by those parties.
> 8\. License Must Not Be Specific to a Product
>
>The rights attached to the program must not depend on the program's being part of a particular software distribution. If the program is extracted from that distribution and used or distributed within the terms of the program's license, all parties to whom the program is redistributed should have the same rights as those that are granted in conjunction with the original software distribution.
>
>9\. License Must Not Restrict Other Software
>
>The license must not place restrictions on other software that is distributed along with the licensed software. For example, the license must not insist that all other programs distributed on the same medium must be open-source software.
>
>10\. License Must Be Technology-Neutral
>
>No provision of the license may be predicated on any individual technology or style of interface.

Each group maintains a list of software licenses that meet their standards and, despite their distinct philosophical approaches, FSF’s and OSI’s lists commonly align. Before delving deeper into FOSS licenses lets take a moment to discuss the relevance of licenses to software in general.

# Copyright and Licenses
A common misconception among developers is that source code one finds on the internet can be used in any way that one wishes.  Along with other expressive works like writing, photos, music, and paintings, computer software is automatically protected by copyright which means that permission is required for most use-cases. A public Git repository without a license is, despite appearances, far from an open invitation for reuse. A license file provides permission for using software and defines any limitations on the scope of that permission;  using someone else’s software without a license risks infringing copyright as would using that software outside of the scope of what its license permits.

# FOSS/Cookie Licenses
There are a good selection of established and approved FOSS licenses that software projects can choose from. These licenses typically fall into one of three broad categories: 1.) permissive (ex. 3-clause BSD, MIT, Apache 2.0) 2. weak copyleft (ex. LGPL, MPL, CDDL), and 3. strong copyleft (ex. GPL, AGPL). Rather than speak about these types of licenses in any technical or legal detail I find that an analogy serves as a far better introductory teaching tool even if it glazes over many of the finer points. For this post I’m going to use cookies, my all time favorite FOSS licensing analogy borrowed from Jim Jagielski. As a brief aside it is worth noting that [recipes are considered uncopyrightable subject matter](https://www.copyright.gov/circs/circ33.pdf) but I will kindly ask the reader to suspend disbelief.

## The Permissive Licensed Cookie

To understand the basics of how a permissive FOSS license works imagine a dedicated baker’s really exceptional chocolate chip cookie recipe. Unlike many home cooks who guard their secret recipes zealously, the creator of this cookie decides to share their recipe with others but isn’t sure what license to choose.

![Chocolate Chip Cookies](/assets/img/gianna-ciaramello-461814-unsplash.jpg)

{:.image-caption}
*Photo by [Gianna Ciaramello](https://unsplash.com/photos/Bh-soXo84Gg)*

Consider what would occur if the recipe were shared with a permissive license. The main requirement of a permissive license is that future users of the recipe must give credit to the recipe’s creator. Anyone who manages to get a copy of the recipe is otherwise free to do with it as they wish; they could make as many batches of the cookies a they like, and they could even change the recipe or package and sell the cookies in stores.

## The Weak Copyleft Cookie
The cookie’s creator might not be happy with some of the outcomes from using a permissive license for her recipe. Under a permissive license someone might improve on the original recipe by adding a hint of orange zest and make a fortune selling these modified cookies in stores. It might bother the initial creator of the cookie to go to the store and buy a box of cookies based on her recipe but not be shown how her recipe was changed. In fact, the cookie’s original creator might be prohibited from even trying to figure out on her own what changes were made to improve upon her original recipe.

![Orange and Chocolate Chip Cookies](/assets/img/jade-wulfraat-96025-unsplash.jpg)

{:.image-caption}
*Photo by [Jade Wulfraat](https://unsplash.com/photos/Wo_JUaWp7Dg)*

In this case, the cookie creator might opt to choose a weak copyleft license for her recipe instead. Under a weak copyleft license the scope of the permission granted is a little more complex. Users of the recipe are permitted to make the cookies or modified versions of them freely but they must share the recipe under the same license terms with anyone that they give their cookies to. This reciprocal sharing requirement is the heart of copyleft.

## The Strong Copyleft Cookie

For some creators, weak copyleft is a step in the right direction but doesn’t go quite far enough. In the abstract, a recipe is merely an instruction for collecting a set of ingredients, combing them in specific way, and treating that combination with a particular process that transforms it into something greater than the sum of its parts. Just as the cookie is made of ingredients, it can also be an ingredient itself. Consider:

[Cookies and cream ice-cream]

![Ice Cream Sandwich](/assets/img/Ice_Cream_Sandwich.jpg)

[cookie w/frosting]

A weak copyleft license ensures that the cookie recipe itself is shared with recipients but its requirements do not extend to a greater product which is based upon the cookie recipe. A strong copyleft program, on the other-hand, extends the reciprocal sharing requirement to cover these cases.

# FOSS in Practice
Now that we’ve got a sense of the broad categories of FOSS licenses lets take a quick look at  how a program can be impacted by the preexisting FOSS tools it is based on.
For the beginner developer, discovering how to add and use additional libraries in a program is a watershed moment that unlocks a world of potential. Sometimes the excitement of this moment can make it seem as if all of these tools are magical gifts bestowed by fairies or elves.

![Keebler Elves](/assets/img/keebler-logo.jpg)

{:.image-caption}
*This is not the dude to thank for that sweet web framework you just started using*

In fact, libraries are created and shared by developers like anyone else under terms of their choosing which can have a real impact on the software we use them in. Let’s take the ruby gem ecosystem as an example. Ruby gems can be installed from public git repos or gem servers in addition to the popular catalog on rubygems.org. Even on [rubygems.org](http://guides.rubygems.org/specification-reference/#license=), there is no restriction on a gem’s choice of license terms or even a requirement to have a license in the first place.
Gems on rubygems.org frequently use FOSS licenses and provide metadata about their licenses that can be referenced by running "gem licenses" to display an overview of the licenses provided by each of one’s install gems. Here is the "gem licenses" out put for a sample program.

[sample `gem licenses`]

Let’s say that I want to make a command-line application with an intuitive and visually rich interface. The first feature I want to employ is adding color to my program’s console output. To do that I add a new line to my gem file "{FIXME} colorize". Now when I check "gem licenses" I see that the license of colorize is “GPLv2+”, a strong copyleft license.

[`gem licenses` with colorize gem]

 As a result of using this gem I’m now accountable for abiding by the license for that gem including licensing it to recipients under the same or compatible license terms.

# Conclusion

While I could happily keep writing about this topic for days, I think this gives a pretty solid introduction to what FOSS is, the different types of FOSS, and some of the issues to look out for when using FOSS in program.
