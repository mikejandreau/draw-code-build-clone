---
layout: post
title:  "Apocalypse Telecaster"
date: 2018-11-15 09:32:02 -0500
categories: Guitar Builds
excerpt: Fancy excerpt about some such whatever thing about stuff.

overview: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae distinctio, ea aspernatur beatae voluptatum sapiente ipsum asperiores harum qui! Consequuntur repellat voluptatum, tempora iure cumque ipsum nam, voluptate at temporibus.

featured_image: /assets/img/esquire11-large.jpg
featured_image_thumb: /assets/img/esquire11-small.jpg
gallery_basename: esquire
---


<div class="row">

{% comment %}<!-- mobile overview -->{% endcomment %}
<div class="col-lg-12 d-lg-none">
	<h2>Overview</h2>
	<p class="lead">{{ page.overview }}</p>
</div>

{% comment %}<!-- sidebar -->{% endcomment %}
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

{% comment %}<!-- main content & desktop overview -->{% endcomment %}
<div class="col-lg-8">
	<div class="d-none d-lg-block">
		<h2>Overview</h2>
		<p class="lead">{{ page.overview }}</p>
	</div>
	<h3>Process</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos reiciendis commodi aperiam in officiis minus necessitatibus, aspernatur nostrum voluptatibus unde quae error ipsum laudantium eius, praesentium deserunt nobis, architecto eveniet.</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, minus. Libero excepturi, nam! Voluptatem nostrum laborum perspiciatis iste repudiandae provident eius sequi aliquid in, quasi repellendus mollitia ea harum, consequatur!</p>
	<h3 id="href01" class="href-heading">Gallery</h3>
	<p>Tap/click an image to zoom.</p>
	<div class="gallery">
		{% for gallery_item in (1..12) %} {% comment %}<!-- set number to the amount of images to show -->{% endcomment %}
		<a href="/assets/img/{{ page.gallery_basename }}{{gallery_item | prepend: '00' | slice: -2, 2 }}-large.jpg" class="gallery-thumb col-md-6 col-lg-4" data-fancybox="images">
			<img src="/assets/img/{{ page.gallery_basename }}{{gallery_item | prepend: '00' | slice: -2, 2 }}-small.jpg" alt="{{ page.gallery_basename }}{{gallery_item | prepend: '00' | slice: -2, 2 }}" />
		</a>
		{% endfor %}
	</div>
	<h3>Details</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo animi eaque sapiente vero modi quisquam molestiae, alias magnam dolor amet a iusto consequuntur beatae quos, quaerat quas. Doloribus, libero illum.</p>
	<h3>Final Thoughts</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus optio quae sunt aliquid provident iste, harum veritatis consequatur, molestias nulla non odio voluptatum porro. Perferendis nam quia hic quae distinctio!</p>
</div>

</div>




<div class="row">
<div class="col-lg-8" markdown="1">
Bloop bloop bloop.

You’ll find this post in your <code>posts</code> directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run <code>jekyll serve</code>, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```


```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>/code/2018/11/15/welcome-to-jekyll.html</loc>
		<lastmod>2018-11-15T09:32:02-05:00</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
	</url>

	<url>
		<loc>/builds/music/2018/02/28/yoga-block-amplifier.html</loc>
		<lastmod>2018-02-28T00:00:00-05:00</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
	</url>

	<url>
		<loc>/builds/music/2017/10/11/mini-guitar-amplifier.html</loc>
		<lastmod>2017-10-11T01:00:00-04:00</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
	</url>

    <url>
      <loc>/feed.xml</loc>
        <lastmod>2018-12-15T21:33:47-05:00</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.3</priority>
    </url>
</urlset>
```


</div>
<div class="col-lg-4">
	<div class="sidebar-block" markdown="1">

  <h3>Project Info</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi accusantium placeat quibusdam blanditiis deserunt, reiciendis non, amet tempora animi odio fuga ab magnam, harum? Beatae ut, ea fugiat accusamus excepturi?.</p>
  <p>
  <strong>Dimensions</strong>: 9&frac12; x 6 x 4 in. <br>
  <strong>Material</strong>: 2.85 mm. PLA <br>
  <strong>Power</strong>: 9v battery / 12v AC<br>
  <strong>Output</strong>: 5 watts
  </p>
  
Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
</div>
</div>
</div>


