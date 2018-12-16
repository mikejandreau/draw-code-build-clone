---
layout: page
title: Contact
permalink: /contact/
active: contact
---



<div class="row">
<div class="col-md-6 col-lg-8">
<p>For general inquiries, comments, and requests for specific tutorials, please use the form below. I am moderately active on social media, but I do check email daily and try to respond within 24 hours during the work week.</p>

<form id="contactform" class="contact-form" method="POST">
<input type="hidden" name="_subject" value="Incoming message from website">
<div class="row">
<div class="column md-6">
  <label for="fullname">Name</label>
  <input type="text" name="fullname" placeholder="Your full name" required="">
</div>
<div class="column md-6">
  <label for="_replyto">Email</label>
  <input type="email" name="_replyto" placeholder="Your email address" required="">
</div>
</div>
<label for="reasonforcontact">Reason for contacting</label>
<select name="reasonforcontact">
  <option value="General question" selected="selected">General question</option>
  <option value="Spotted an error or typo">Spotted an error or typo</option>
  <option value="Tutorial or feature request">Tutorial or feature request</option>
</select>
<label for="message">Message </label>
<textarea name="message" placeholder="Please type your message here" required=""></textarea>
<input type="text" name="_gotcha" style="display:none">
<input type="submit" value="Send">
<input type="hidden" name="_next" value="/thanks/">
</form>

</div>
<div class="col-md-6 col-lg-4">
	social links
	{% comment %}
  {% include sidebar-social.html %}
  {% endcomment %}
</div>
</div>
