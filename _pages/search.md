---
layout: page
title: Search
permalink: /search/
active: search
slug: search
---

<div class="row">
<div class="col-lg-8">

<p>Looking for something specific? If you can't remember the what you were looking for but you have a general idea, you can start typing in the box below to find it.</p>

<div class="search-content">
	<label class="search-label" for="search">{{ site.data.theme.t.site_search | default: 'Site Search' }}</label>
	<input type="text" id="search" class="form-control search-input" aria-describedby="results-count" tabindex="-1" placeholder="{{ site.data.theme.t.menu.search_placeholder_text | default: 'Enter your search term...' }}" />
	<div id="results" class="results"></div>
</div>


</div>
<div class="col-lg-4">
	sidebar
</div>
</div>


{%- if site.search -%}
	{% include search/lunr-search-scripts.html %}
{%- endif -%}
