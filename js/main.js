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
var school = document.getElementById('school');
var studie = document.getElementById('studie');
var docent = document.getElementById('docent');
var docentEmail = document.getElementById('docent-email');
var docentTel = document.getElementById('docent-tel');
var error = document.querySelector('.error');


yourname.addEventListener("focus", function (event) {
  	$( "#error-name" ).remove();
  	yourname.removeAttribute("aria-invalid");
}, false);

tel.addEventListener("focus", function (event) {
  	$( "#error-tel" ).remove();
  	tel.removeAttribute("aria-invalid");
}, false);

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
  	$( "#error-email" ).remove();
  	email.removeAttribute("aria-invalid");
  }
}, false);

school.addEventListener("input", function (event) {
  if (school.validity.valid) {
  	$( "#error-school" ).remove();
  	school.removeAttribute("aria-invalid");
  }
}, false);

studie.addEventListener("input", function (event) {
  if (studie.validity.valid) {
  	$( "#error-studie" ).remove();
  	studie.removeAttribute("aria-invalid");
  }
}, false);

docent.addEventListener("input", function (event) {
  if (docent.validity.valid) {
  	$( "#error-docent" ).remove();
  	docent.removeAttribute("aria-invalid");
  }
}, false);

docentEmail.addEventListener("input", function (event) {
  if (docentEmail.validity.valid) {
  	$( "#error-docent-email" ).remove();
  	docent.removeAttribute("aria-invalid");
  }
}, false);

docentTel.addEventListener("input", function (event) {
  if (docentEmail.validity.valid) {
  	$( "#error-docent-tel" ).remove();
  	docent.removeAttribute("aria-invalid");
  }
}, false);

form.addEventListener("submit", function (event) {

	if ($(yourname).val() === '' && $(yourname).next('#error-name').length == 0) {
		$("<span id='error-name' class='error' aria-live='polite'>Error: Vul hier je naam in</span>").insertAfter(yourname);    
    	yourname.setAttribute("aria-invalid", "true");
    	event.preventDefault();
  	}

    if ($(tel).val() === '' && $(tel).next('#error-tel').length == 0) {
		$("<span id='error-tel' class='error' aria-live='polite'>Error: Vul hier je telefoonnummer in</span>").insertAfter(tel);    
    	tel.setAttribute("aria-invalid", "true");
    	event.preventDefault();
  	}

    if (!email.validity.valid  && $(email).next('#error-email').length == 0) {
		$("<span id='error-email' class='error' aria-live='polite'>Error: Vul je email correct in</span>").insertAfter(email);    
    	email.setAttribute("aria-invalid", "true");
    	event.preventDefault();
  	}

    if ($(school).val() === '' && $(school).next('#error-school').length == 0) {
		$("<span id='error-school' class='error' aria-live='polite'>Error: Vul hier de naam van je school in</span>").insertAfter(school);    
    	tel.setAttribute("aria-invalid", "true");
    	event.preventDefault();
  	}  	

    if ($(studie).val() === '' && $(studie).next('#error-studie').length == 0) {
		$("<span id='error-studie' class='error' aria-live='polite'>Error: Vul hier je studierichting en school in</span>").insertAfter(studie);    
    	tel.setAttribute("aria-invalid", "true");
    	event.preventDefault();
  	}   	

    if ($(docent).val() === '' && $(docent).next('#error-docent').length == 0) {
		$("<span id='error-docent' class='error' aria-live='polite'>Error: Vul hier de naam van je docent in</span>").insertAfter(docent);    
    	tel.setAttribute("aria-invalid", "true");
    	event.preventDefault();
  	}  

    if (!docentEmail.validity.valid  && $(docentEmail).next('#error-docent-email').length == 0) {
		$("<span id='error-docent-email' class='error' aria-live='polite'>Error: Vul het e-mailadres van je docent correct in</span>").insertAfter(docentEmail);    
    	email.setAttribute("aria-invalid", "true");
    	event.preventDefault();
  	}  	

    if (!docentTel.validity.valid  && $(docentTel).next('#error-docent-tel').length == 0) {
		$("<span id='error-docent-tel' class='error' aria-live='polite'>Error: Vul het telefoonnummer van je docent correct in</span>").insertAfter(docentTel);    
    	email.setAttribute("aria-invalid", "true");
    	event.preventDefault();
  	}   	

}, false);