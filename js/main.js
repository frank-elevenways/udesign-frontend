// TOOLTIP

(function() {
  // Get all the toggletip buttons
  var toggletips = document.querySelectorAll('[data-toggletip-content]');

  // Iterate over them
  Array.prototype.forEach.call(toggletips, function (toggletip) {
    // Get the message from the data-content element
    var message = toggletip.getAttribute('data-toggletip-content');

    // Get the live region element
    var liveRegion = toggletip.nextElementSibling;

    // Toggle the message
    toggletip.addEventListener('click', function () {
        liveRegion.innerHTML = '';
        window.setTimeout(function() {
          liveRegion.innerHTML = '<span class="toggletip-bubble">'+ message +'</span>';
        }, 100);
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (toggletip !== e.target) {
        liveRegion.innerHTML = '';
      }                        
    });

    // Remove toggletip on ESC
    toggletip.addEventListener('keydown', function (e) {
      if ((e.keyCode || e.which) === 27)
      liveRegion.innerHTML = '';
    });
    
    // Remove on blur
    toggletip.addEventListener('blur', function (e) {
      liveRegion.innerHTML = '';
    });
  });
}());


// Form validation
var form  = document.getElementsByTagName('form')[0];
var yourname = document.getElementById('name');
var tel = document.getElementById('tel');
var email = document.getElementById('email');
var error = document.querySelector('.error');


yourname.addEventListener("focus", function (event) {
  	$( ".name .error" ).remove();
  	yourname.removeAttribute("aria-invalid");
}, false);

tel.addEventListener("focus", function (event) {
  	$( ".tel .error" ).remove();
  	tel.removeAttribute("aria-invalid");
}, false);

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
  	$( ".email .error" ).remove();
  	email.removeAttribute("aria-invalid");
  }
}, false);

form.addEventListener("submit", function (event) {

   if ($(yourname).val() === '') {
	$("<span id='error-name' class='error' aria-live='polite'>Error: Vul hier je naam in</span>").insertAfter(yourname);    
    yourname.setAttribute("aria-invalid", "true");
  }

   if ($(tel).val() === '') {
	$("<span id='error-tel' class='error' aria-live='polite'>Error: Vul hier je telefoonnummer in</span>").insertAfter(tel);    
    tel.setAttribute("aria-invalid", "true");
  }

   if (!email.validity.valid) {
	$("<span id='error-email' class='error' aria-live='polite'>Error: Vul je email correct in</span>").insertAfter(email);    
    email.setAttribute("aria-invalid", "true")
  }

 
event.preventDefault();
}, false);