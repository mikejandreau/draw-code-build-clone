---
layout: page
title: Projects
permalink: /projects/
active: projects
---

portfolio page stuff.



<div class="row">

  {% for projects in site.projects %}
    
    
      <div class="col-xs-12 col-sm-6 col-md-4" style="margin-bottom: 30px; padding-bottom: 30px; border-bottom: 1px solid #eee;">
        <div class="panel panel-primary">
          <div class="panel-heading">
              <h3><a href="{{ projects.url | prepend: site.baseurl }}">{{ projects.title }}</a></h3>
          </div>
          <div class="panel-body">
            {{ projects.excerpt }}
            <a href="{{ projects.url | prepend: site.baseurl }}" class="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
    

  {% endfor %}

</div>