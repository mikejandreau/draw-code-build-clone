---
layout: page
title: Resume
permalink: /resume/
active: resume
---

{% assign cv = site.data.cv %}

<div class="entries">
	{% include cv/basics.html %}
	{% include cv/work.html %}
	{% include cv/volunteer.html %}
	{% include cv/education.html %}
	{% include cv/awards.html %}
	{% include cv/publications.html %}
	{% include cv/skills.html %}
	{% include cv/languages.html %}
	{% include cv/interests.html %}
	{% include cv/references.html %}
</div>
