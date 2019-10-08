---
layout: post
title:  "Yoga Block Boombox"
date:   2018-02-28 00:00:00 -0500
categories: Builds Music
excerpt: The perfect workout companion, with a 3D printed outer shell.
overview: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae distinctio, ea aspernatur beatae voluptatum sapiente ipsum asperiores harum qui! Consequuntur repellat voluptatum, tempora iure cumque ipsum nam, voluptate at temporibus.
featured_image: /assets/img/blacktele08-large.jpg
featured_image_thumb: /assets/img/blacktele08-small.jpg

---



<!-- 
<h1 class="d-none d-lg-block">visible large</h1>
<h1 class="d-lg-none">visible small</h1>
 -->


<div class="row">

<div class="col-lg-12 d-lg-none">
	<h2>Overview</h2>
	<p class="lead">{{ page.overview }}</p>
</div>

<div class="col-lg-4 order-lg-12">
	<hr class="d-lg-none">
	<div class="sidebar-block">
		<h3>Project Specs</h3>
		<p>Yadda yadda project blah blah.</p>
		<p>
			<strong>Dimensions</strong>: 9&frac12; x 6 x 4 in. <br>
			<strong>Material</strong>: 2.85 mm. PLA <br>
			<strong>Power</strong>: 9v battery / 12v AC<br>
			<strong>Output</strong>: 5 watts
		</p>
		<div class="d-none d-lg-block">
			<a class="js-scroll-trigger btn-block" href="#page-top">Back to Top</a>
			<a class="js-scroll-trigger btn-block" href="#href01">Gallery</a>
		</div>
	</div>
	<hr class="d-lg-none">
</div>

<div class="col-lg-8">
	<div class="d-none d-lg-block">
		<h2>Overview</h2>
		<p class="lead">{{ page.overview }}</p>
	</div>
	<h3>Process</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos reiciendis commodi aperiam in officiis minus necessitatibus, aspernatur nostrum voluptatibus unde quae error ipsum laudantium eius, praesentium deserunt nobis, architecto eveniet.</p>
	<h3 id="href01" class="href-heading">Gallery</h3>
	<p>Tap/click an image to zoom.</p>

<div class="gallery">
<a href="/assets/img/blacktele01-large.jpg" class="gallery-thumb col-md-6 col-lg-4" data-fancybox="images">
<img src="/assets/img/blacktele01-small.jpg" alt="" />
</a>
<a href="/assets/img/blacktele02-large.jpg" class="gallery-thumb col-md-6 col-lg-4" data-fancybox="images">
<img src="/assets/img/blacktele02-small.jpg" alt="" />
</a>
<a href="/assets/img/blacktele03-large.jpg" class="gallery-thumb col-md-6 col-lg-4" data-fancybox="images">
<img src="/assets/img/blacktele03-small.jpg" alt="" />
</a>
<a href="/assets/img/blacktele04-large.jpg" class="gallery-thumb col-md-6 col-lg-4" data-fancybox="images">
<img src="/assets/img/blacktele04-small.jpg" alt="" />
</a>
<a href="/assets/img/blacktele05-large.jpg" class="gallery-thumb col-md-6 col-lg-4" data-fancybox="images">
<img src="/assets/img/blacktele05-small.jpg" alt="" />
</a>
<a href="/assets/img/blacktele06-large.jpg" class="gallery-thumb col-md-6 col-lg-4" data-fancybox="images">
<img src="/assets/img/blacktele06-small.jpg" alt="" />
</a>
<a href="/assets/img/blacktele07-large.jpg" class="gallery-thumb col-md-6 col-lg-4" data-fancybox="images">
<img src="/assets/img/blacktele07-small.jpg" alt="" />
</a>
<a href="/assets/img/blacktele08-large.jpg" class="gallery-thumb col-md-6 col-lg-4" data-fancybox="images">
<img src="/assets/img/blacktele08-small.jpg" alt="" />
</a>
</div>

	{% comment %}
	<div class="gallery">
	{% for image in site.static_files %}
	  {% if image.path contains 'assets/img/blacktele' %}
	    {% unless image.path contains '-small.' %}
	      <a href="{{ image.path }}" class="gallery-thumb col-md-6 col-lg-4" data-fancybox="images">
	        <img src="{{ site.imgpath }}{{ image.basename | remove: '-large' | append: '-small' | append: image.extname }}" alt="">
	      </a>
	    {% endunless %}
	  {% endif %}
	{% endfor %}
	</div>
	{% endcomment %}

	<h3>Details</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo animi eaque sapiente vero modi quisquam molestiae, alias magnam dolor amet a iusto consequuntur beatae quos, quaerat quas. Doloribus, libero illum.</p>
	<h3>Final Thoughts</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus optio quae sunt aliquid provident iste, harum veritatis consequatur, molestias nulla non odio voluptatum porro. Perferendis nam quia hic quae distinctio!</p>
</div>

</div>





