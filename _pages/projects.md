---
layout: page
title: Projects
permalink: /projects/
active: projects
slug: projects
---

portfolio page stuff.



<div class="row">

  {% for projects in site.projects reversed %}
    

<div class="col-md-6 col-lg-4">
<div class="preview-item-container">
<a class="preview-item-link" href="{{ projects.url | prepend: site.baseurl }}">
<img class="preview-item-image" src="{{ projects.featured_image_thumb }}" alt="{{ projects.title }}"/>
</a>
<div class="preview-text">
<h4><a href="{{ projects.url | prepend: site.baseurl }}">{{ projects.title }}</a></h4>
<p class="post-meta">
{% include article-date.html %}
{% include article-read-time.html content=post.content %}
</p>
<p>{{ projects.excerpt }}</p>
<a href="{{ projects.url | prepend: site.baseurl }}" class="btn btn-primary">View Project</a>
</div>
</div>
</div>


  {% endfor %}

</div>