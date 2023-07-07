import {USERNAME,PASSWORD,HOST,TO,FROM} from "../../config.js";
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
          let body = document.getElementById("content").value;
          let email = document.getElementById("email").value;
          let subject = document.getElementById("subject").value;
          if (body !== "" && email != "" && subject !== "") {            
              Email.send({
              Host: HOST,
              Username: USERNAME,
              Password: PASSWORD,
              To: TO,
              From: FROM,
              Subject: subject + "["+email+"]",
              Body: body
          }).then(
              message => alert("Votre email a bien été envoyé !")
          );
          }
          console.log(body);
        }, false);
      });
    }, false);
  })();