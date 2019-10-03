---
layout: post
title:  "Yoga Block Boombox"
date:   2018-02-28 00:00:00 -0500
categories: Builds Music
excerpt: The perfect workout companion, with a 3D printed outer shell.
featured_image: /assets/img/featured06-2000px.jpg
featured_image_thumb: /assets/img/featured06-300px.jpg

post_image_name: featured04
img:
  small:  featured06-100px.jpg
  medium: featured06-800px.jpg
  large:  featured06-2000px.jpg
---

<div class="row">
<div class="col-lg-8">

<h2>Overview</h2>
<p>The goal of this project was to build a portable audio amplifier that balanced decent volume with long battery life. I considered building the outer shell out of wood, but we have a 3D printer at work and I had the opportunity to try it out. Since 3D printers rely on 3D designs, I needed to "build" the shell virtually first.</p>
<p>To build the 3D model for the printer, I used Autodesk's Tinkercad. It's free, easy to use, and capable of creating pretty detailed models. If you need a more full-featured 3D program, Blender is another good option. I won't be going over how to use Tinkercad or Blender here, but may in the future if enough people express interest.</p>

Video: https://www.youtube.com/watch?v=9f4MwZLr0J8

<h3>Design Process</h3>
<p>I took measurements of the internal components to determine the minimum internal space needed to house two 4-inch speakers, PCB (printed circuit board), battery box, and controls. The intent was to have a <em>usable</em> yoga block, so I decided the outside walls should be &frac14;-inch thick for strength.</p>
<p>Two &frac14;-inch outer walls plus two 4-inch speakers totals 8&frac12; inches - the absolute minimum width of the block. That would be a bit tight for assembly later, so I added &frac14; inch of space from the outer wall and &frac12; inch of space between the speakers, giving a total outer width of  9&frac12; inches. With the rough dimensions in mind, I started building the basic shapes in Tinkercad.</p>






{% for image in site.static_files %}
    {% if image.path contains 'assets/img/{{ page.post_image_name }}' %}
        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
    {% endif %}
{% endfor %}

<p>{% for image in site.static_files %}
    {% if image.path contains 'assets/img/featured04' %}
        {{ site.baseurl }}{{ image.path }}
    {% endif %}
{% endfor %}</p>

<div class="gallery">

<a href="{{ page.img_large_1 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_1 }}; descPosition: right;">
<img src="{{ page.img_small_1 }}" alt="{{ page.img_title_1 }}">
<div class="glightbox-desc">{{ page.img_descr_1 }}</div>
</a>

<a href="{{ page.img_large_2 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_2 }}; descPosition: right;">
<img src="{{ page.img_small_2 }}" alt="{{ page.img_title_2 }}">
<div class="glightbox-desc">{{ page.img_descr_2 }}</div>
</a>

<a href="{{ page.img_large_3 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_3 }}; descPosition: right;">
<img src="{{ page.img_small_3 }}" alt="{{ page.img_title_3 }}">
<div class="glightbox-desc">{{ page.img_descr_3 }}</div>
</a>

<a href="{{ page.img_large_4 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_4 }}; descPosition: right;">
<img src="{{ page.img_small_4 }}" alt="{{ page.img_title_4 }}">
<div class="glightbox-desc">{{ page.img_descr_4 }}</div>
</a>

<a href="{{ page.img_large_5 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_5 }}; descPosition: right;">
<img src="{{ page.img_small_5 }}" alt="{{ page.img_title_5 }}">
<div class="glightbox-desc">{{ page.img_descr_5 }}</div>
</a>

<a href="{{ page.img_large_6 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_6 }}; descPosition: right;">
<img src="{{ page.img_small_6 }}" alt="{{ page.img_title_6 }}">
<div class="glightbox-desc">{{ page.img_descr_6 }}</div>
</a>

<a href="{{ page.img_large_7 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_7 }}; descPosition: right;">
<img src="{{ page.img_small_7 }}" alt="{{ page.img_title_7 }}">
<div class="glightbox-desc">{{ page.img_descr_7 }}</div>
</a>

<a href="{{ page.img_large_8 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_8 }}; descPosition: right;">
<img src="{{ page.img_small_8 }}" alt="{{ page.img_title_8 }}">
<div class="glightbox-desc">{{ page.img_descr_8 }}</div>
</a>

<a href="{{ page.img_large_9 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_9 }}; descPosition: right;">
<img src="{{ page.img_small_9 }}" alt="{{ page.img_title_9 }}">
<div class="glightbox-desc">{{ page.img_descr_9 }}</div>
</a>

</div>

<h3>3D Printing</h3>
<p>With the design finalized, sliced, and exported, it was time to send it to the printer. I lost the photos of the print process, but roughly 30 hours later I had all the parts for assembly. </p>

<div class="gallery">

<a href="{{ page.img_large_10 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_10 }}; descPosition: right;">
<img src="{{ page.img_small_10 }}" alt="{{ page.img_title_10 }}">
<div class="glightbox-desc">{{ page.img_descr_10 }}</div>
</a>

<a href="{{ page.img_large_11 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_11 }}; descPosition: right;">
<img src="{{ page.img_small_11 }}" alt="{{ page.img_title_11 }}">
<div class="glightbox-desc">{{ page.img_descr_11 }}</div>
</a>

<a href="{{ page.img_large_12 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_12 }}; descPosition: right;">
<img src="{{ page.img_small_12 }}" alt="{{ page.img_title_12 }}">
<div class="glightbox-desc">{{ page.img_descr_12 }}</div>
</a>

</div>

<h3>Assembly</h3>
<p>I epoxied the edges of the main halves and clamped them together for a few hours. Once dry, I drilled out the holes and sanded the edges and flat surfaces.</p>
<p>While the epoxy was drying I soldered the battery box leads to the PCB and fixed the loose connections. I found that I had neglected to leave enough space for the leads coming out of the battery box, and ended up having to grind a bit of the shell down to make room.</p>
<p>Aside from it being a bit tight for my fingers to get in and tighten the nuts on the speakers, the rest of the assembly process went pretty smoothly.</p>

<div class="gallery">

<a href="{{ page.img_large_13 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_13 }}; descPosition: right;">
<img src="{{ page.img_small_13 }}" alt="{{ page.img_title_13 }}">
<div class="glightbox-desc">{{ page.img_descr_13 }}</div>
</a>

<a href="{{ page.img_large_14 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_14 }}; descPosition: right;">
<img src="{{ page.img_small_14 }}" alt="{{ page.img_title_14 }}">
<div class="glightbox-desc">{{ page.img_descr_14 }}</div>
</a>

<a href="{{ page.img_large_15 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_15 }}; descPosition: right;">
<img src="{{ page.img_small_15 }}" alt="{{ page.img_title_15 }}">
<div class="glightbox-desc">{{ page.img_descr_15 }}</div>
</a>

<a href="{{ page.img_large_16 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_16 }}; descPosition: right;">
<img src="{{ page.img_small_16 }}" alt="{{ page.img_title_16 }}">
<div class="glightbox-desc">{{ page.img_descr_16 }}</div>
</a>

<a href="{{ page.img_large_17 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_17 }}; descPosition: right;">
<img src="{{ page.img_small_17 }}" alt="{{ page.img_title_17 }}">
<div class="glightbox-desc">{{ page.img_descr_17 }}</div>
</a>

<a href="{{ page.img_large_18 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_18 }}; descPosition: right;">
<img src="{{ page.img_small_18 }}" alt="{{ page.img_title_18 }}">
<div class="glightbox-desc">{{ page.img_descr_18 }}</div>
</a>

<a href="{{ page.img_large_19 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_19 }}; descPosition: right;">
<img src="{{ page.img_small_19 }}" alt="{{ page.img_title_19 }}">
<div class="glightbox-desc">{{ page.img_descr_19 }}</div>
</a>

<a href="{{ page.img_large_20 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_20 }}; descPosition: right;">
<img src="{{ page.img_small_20 }}" alt="{{ page.img_title_20 }}">
<div class="glightbox-desc">{{ page.img_descr_20 }}</div>
</a>

<a href="{{ page.img_large_21 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_21 }}; descPosition: right;">
<img src="{{ page.img_small_21 }}" alt="{{ page.img_title_21 }}">
<div class="glightbox-desc">{{ page.img_descr_21 }}</div>
</a>

<a href="{{ page.img_large_22 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_22 }}; descPosition: right;">
<img src="{{ page.img_small_22 }}" alt="{{ page.img_title_22 }}">
<div class="glightbox-desc">{{ page.img_descr_22 }}</div>
</a>

<a href="{{ page.img_large_23 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_23 }}; descPosition: right;">
<img src="{{ page.img_small_23 }}" alt="{{ page.img_title_23 }}">
<div class="glightbox-desc">{{ page.img_descr_23 }}</div>
</a>

<a href="{{ page.img_large_24 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_24 }}; descPosition: right;">
<img src="{{ page.img_small_24 }}" alt="{{ page.img_title_24 }}">
<div class="glightbox-desc">{{ page.img_descr_24 }}</div>
</a>
</div>


<h3>Additional Parts</h3>
<p>During assembly I realized the threaded part of the auxiliary input and headphone jack was too short to reach all the way through the outer chassis, meaning they could not be fastened securely to the control panel. Since plugging in an external audio source is pretty integral to this particular build, I designed a couple of workarounds.</p>
<p>The first option was a control panel replacement with a thinner outer wall. The second was a sort of countersunk washer with a recessed cavity. Basically the same idea, but with smaller parts and less work. I wasn't sure which would ultimately be the best, so I made a design for both.</p>
<p>After drilling out the new holes and dry fitting the buttons, the full control panel replacement seemed unnecessary. I added the second replacement button and fastened the input jacks into their new homes.</p>

<div class="gallery">

<a href="{{ page.img_large_25 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_25 }}; descPosition: right;">
<img src="{{ page.img_small_25 }}" alt="{{ page.img_title_25 }}">
<div class="glightbox-desc">{{ page.img_descr_25 }}</div>
</a>

<a href="{{ page.img_large_26 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_26 }}; descPosition: right;">
<img src="{{ page.img_small_26 }}" alt="{{ page.img_title_26 }}">
<div class="glightbox-desc">{{ page.img_descr_26 }}</div>
</a>

<a href="{{ page.img_large_27 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_27 }}; descPosition: right;">
<img src="{{ page.img_small_27 }}" alt="{{ page.img_title_27 }}">
<div class="glightbox-desc">{{ page.img_descr_27 }}</div>
</a>

{% comment %}
<a href="https://www.youtube.com/watch?v=G4kaDizs17k" class="glightbox1">Video</a>
<!-- img_large_27: https://www.youtube.com/watch?v=G4kaDizs17k -->
<a href="https://www.youtube.com/watch?v=G4kaDizs17k" class="glightbox1">
<img src="{{ page.img_small_26 }}" alt="{{ page.img_title_26 }}">
<div class="glightbox-desc">{{ page.img_descr_26 }}</div>
</a>
{% endcomment %}

<a href="{{ page.img_large_28 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_28 }}; descPosition: right;">
<img src="{{ page.img_small_28 }}" alt="{{ page.img_title_28 }}">
<div class="glightbox-desc">{{ page.img_descr_28 }}</div>
</a>

<a href="{{ page.img_large_29 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_29 }}; descPosition: right;">
<img src="{{ page.img_small_29 }}" alt="{{ page.img_title_29 }}">
<div class="glightbox-desc">{{ page.img_descr_29 }}</div>
</a>

<a href="{{ page.img_large_30 }}" class="glightbox1" data-glightbox="title: {{ page.img_title_30 }}; descPosition: right;">
<img src="{{ page.img_small_30 }}" alt="{{ page.img_title_30 }}">
<div class="glightbox-desc">{{ page.img_descr_30 }}</div>
</a>

</div>

<h3>Final Thoughts</h3>
<p>I have some ideas for improvements that I'll be incorporating into the next version, but overall I think this yoga block amp build was pretty successful. It's loud enough for a small room, the sound quality isn't half bad, and if the battery dies it's still a functional yoga block.</p>
<p>Even if it doesn't work, it works.</p>

</div>

<div class="col-lg-4">
	<div class="sidebar-block">
		<h3>Project Info</h3>
		<p>The yoga block amplifier was designed in Tinkercad and printed on an Ultimaker 3.</p>
		<p>
			<strong>Dimensions</strong>: 9&frac12; x 6 x 4 in. <br>
			<strong>Material</strong>: 2.85 mm. PLA <br>
			<strong>Power</strong>: 9v battery / 12v AC<br>
			<strong>Output</strong>: 5 watts
		</p>

{% comment %}
		<span><strong>Build your own:</strong></span>
		<ul>
			<li><a href="{{ page.product_amp_1 }}" target="_blank">20W Class D amp</a></li>
			<li><a href="{{ page.product_amplifier }}" target="_blank">3W Class D amp</a></li>
			<li><a href="{{ page.product_speakers }}" target="_blank">4" full range 8 &#x2126; speakers</a></li>
			<li><a href="{{ page.product_battery_box }}" target="_blank">9V Battery Box (optional)</a></li>
		</ul>
{% endcomment %}

		<h4>External Resources</h4>
		<p>If you're interested in tinkering with 3D modeling or electronics, below are links to some great places to start.</p>

<div class="row">
<div class="col-sm-4 col-lg-12">
<p><a href="https://www.adafruit.com/category/526" target="_blank"><img src="{{ page.img_logo_1 }}" alt="Adafruit"></a></p>
</div>
<div class="col-sm-4 col-lg-12">
<p><a href="https://www.tinkercad.com/" target="_blank">
<img src="{{ page.img_logo_2 }}" alt="Tinkercad">
</a></p>
</div>
<div class="col-sm-4 col-lg-12">
<p><a href="https://www.blender.org/" target="_blank">
<img src="{{ page.img_logo_3 }}" alt="Blender">
</a></p>
</div>
</div>

</div>
</div>

</div>





