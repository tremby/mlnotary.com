+++
title = "Partner"
draft = false
layout = "partner"
hero_subtitle = "Fergus partners with a range of bookkeepers and accountants that work with trade businesses."
hero_title = "<span class=\"color:yellow font:underline\">Partner</span> with us"
+++

<h4 class="align:center">Get in touch with us for more information.</h4>

<form class="form">
  <div class="form/item">
    <label for="Company">Company</label>
    <input id="Company" name="Company" type="text" class="form/input:fluid">
  </div>

  <div class="form/item">
    <label for="Website">Website</label>
    <input id="Website" name="Website" type="text" class="form/input:fluid">
  </div>

  <div class="form/item">
    <label for="Address">Address</label>
    <textarea id="Address" name="Address" class="form/textarea:fluid"></textarea>
  </div>

  <div class="form/item">
    <label for="City">City</label>
    <input id="City" name="City" type="text" class="form/input:fluid">
  </div>

  <div class="form/item">
    <label for="PostalCode">Postal Code</label>
    <input id="PostalCode" name="PostalCode" type="text" class="form/input:fluid">
  </div>



  <div class="form/item">
    <label for="Country">Country</label>
    <div class="form/select form/select:fluid">
      <select id="Country" name="Country" class="form/input:fluid">
        <option>New Zealand</option>
        <option>Australia</option>
        <option>UK</option>
      </select>
      <div class="form/arrow"></div>
    </div>
  </div>

  <div class="form/item">
    <label for="Phone">Phone</label>
    <input id="Phone" name="Phone" type="text" class="form/input:fluid">
  </div>

  <div class="form/item">
    <label for="Email">Key Contact Email</label>
    <input id="Email" name="Email" type="text" class="form/input:fluid">
  </div>

  <div class="form/item">
    <label for="FirstName">First Name</label>
    <input id="FirstName" name="FirstName" type="text" class="form/input:fluid">
  </div>

  <div class="form/item">
    <label for="LastName">Last Name</label>
    <input id="LastName" name="LastName" type="text" class="form/input:fluid">
  </div>


  <div class="form/item margin-bottom:4">
    <label class="form/checkbox font-size:tiny">
      I agree to the <a href="{{ .Site.BaseURL }}/terms-of-service">Terms and Conditions</a>
      <input type="checkbox"/>
      <div class="form/checkbox-indicator"></div>
    </label>
  </div>

  <div class="form/item">
    <input type="submit" class="button button:fluid color:yellow button:elevate" value="Submit">
  </div>
</form>
