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



// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.

var form  = document.getElementsByTagName('form')[0];
var yourname = document.getElementById('name');
var tel = document.getElementById('tel');
var email = document.getElementById('email');
var error = document.querySelector('.error');


tel.addEventListener("input", function (event) {
  if (tel.validity.valid) {
  	$( ".error-tel" ).remove();
  	tel.removeAttribute("aria-invalid");
  }
}, false);

yourname.addEventListener("input", function (event) {
  if (yourname.validity.valid) {
  	$( ".error-yourname" ).remove();
  	yourname.removeAttribute("aria-invalid");
  }
}, false);

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
  	$( ".error-email" ).remove();
  	email.removeAttribute("aria-invalid");
  }
}, false);

form.addEventListener("submit", function (event) {

   if ($(yourname).val() === '') {
	$("<span id='error-yourname' class='error error-yourname' aria-relevant='additions removals' aria-live='polite'>Error: Vul hier je naam in</span>").insertAfter(yourname);    
    yourname.setAttribute("aria-invalid", "true");
  }

   if ($(tel).val() === '') {
	$("<span class='error error-tel' aria-live='polite'>Error: Vul hier je naam in</span>").insertAfter(tel);    
    tel.setAttribute("aria-invalid", "true");
  }

   if (!email.validity.valid) {
	$("<span class='error error-email' aria-live='polite'>Error: Vul je email corect in</span>").insertAfter(email);    
    email.setAttribute("aria-invalid", "true")
  }

 
event.preventDefault();
}, false);