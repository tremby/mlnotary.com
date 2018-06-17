+++
title = "Suitability Quiz"
draft = false
layout = "partner"
hero_subtitle = "Answer the questions below to see if Fergus is the right fit for you"
hero_title = "Suitability <span class=\"color:yellow font:underline\">Quiz</span>"
+++

<form class="form">

  <div class="form/item">
    <label for="Industry">What do you specialise in?</label>
    <div class="form/select form/select:fluid">
      <select id="Industry" name="Industry" class="form/input:fluid">
        <option>Air Conditioning</option>
        <option>Australia</option>
        <option>UK</option>
      </select>
      <div class="form/arrow"></div>
    </div>
  </div>

  <div class="form/item">
    <label for="LeadRole">What is your role?</label>
    <div class="form/select form/select:fluid">
      <select id="LeadRole" name="LeadRole" class="form/input:fluid">
        <option>Air Conditioning</option>
        <option>Australia</option>
        <option>UK</option>
      </select>
      <div class="form/arrow"></div>
    </div>
  </div>

  <div class="form/item">
    <label for="NumberOfEmployees">How big is the team?</label>
    <div class="form/select form/select:fluid">
      <select id="NumberOfEmployees" name="NumberOfEmployees" class="form/input:fluid">
        <option>Air Conditioning</option>
        <option>Australia</option>
        <option>UK</option>
      </select>
      <div class="form/arrow"></div>
    </div>
  </div>

  <div class="form/item">
    <label for="Pain_Points__c">What are you having the most problems with?</label>
    <div class="form/select form/select:fluid">
      <select id="Pain_Points__c" name="Pain_Points__c" class="form/input:fluid">
        <option>Air Conditioning</option>
        <option>Australia</option>
        <option>UK</option>
      </select>
      <div class="form/arrow"></div>
    </div>
  </div>


  <div class="form/item">
    <label for="Email">Email</label>
    <input id="Email" name="Email" type="text" class="form/input:fluid">
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
