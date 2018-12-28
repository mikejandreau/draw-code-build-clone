---
layout: page
title: Contact
permalink: /contact/
active: contact
---


<div class="row">
  
<div class="col-md-8">
<p>Thank you for your interest in {{ site.title | escape }}. Please feel free to use the form on this page below to get in touch. We can’t wait to hear from you!</p>

<p>For general inquiries, comments, and requests for specific tutorials, please use the form below. I am moderately active on social media, but I do check email daily and try to respond within 24 hours during the work week.</p>

<form id="contactform" class="contact-form mb-4" method="POST">
<input type="hidden" name="_subject" value="Incoming message from website">
<div class="form-group">
  <label for="fullname">Full name</label>
  <input type="text" class="form-control" id="fullname" name="fullname" placeholder="Your name" required="">
</div>
<div class="form-group">
  <label for="_replyto">Email address</label>
  <input type="email" class="form-control" id="_replyto" name="_replyto" aria-describedby="emailHelp" placeholder="Enter email" required="">
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
  <label for="reasonforcontact">Reason for contacting</label>
  <select class="form-control" id="reasonforcontact" name="reasonforcontact" required="">
  <option value="General question" selected="selected">General question</option>
  <option value="Spotted an error or typo">Spotted an error or typo</option>
  <option value="Tutorial or feature request">Tutorial or feature request</option>
  </select>
</div>
<div class="form-group">
  <label for="message">Message</label>
  <textarea class="form-control" id="message" name="message" rows="3" placeholder="Please type your message here" required=""></textarea>
</div>
<input type="text" name="_gotcha" style="display:none">
<input type="submit" class="btn btn-primary" value="Send">
<input type="hidden" name="_next" value="/thanks/">
</form>
</div>

<div class="col-md-4">
  social links
  {% comment %}
  {% include sidebar-social.html %}
  {% endcomment %}
</div>

</div>




