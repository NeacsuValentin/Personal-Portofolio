$('#navbar a, .btn').on('click', function(event) {
    const hash = this.hash;

    if(this.hash !== '') {
    // event.preventDefault();
    
    $('html, body').animate (
    {
        scrollTop: $(hash).offset().top - 80
        },
        800
        );
    }
});


// $(document).ready(function () {
//     $('#contact-form').submit(function (e) {
//     const form = document.querySelector('form[id="contact-form"]');
//     const username = form.elements['firstName'].value;
//     const userMail = form.elements['email'].value;
//     const subject = form.elements[‘subject’].value;
//     const message =  userMail + <br> + "Summary:"+ form.elements['message'].value;
//     e.preventDefault();
//     var data = {
//     service_id: 'gmail',
//     template_id: 'template_2SvIv66k',
//     user_id: 'user_4zzBA7YZCHYpMTbQc2v5p',
//     template_params: {
//     from_name: username,
//     to_name: 'Sucheta',
//     subject: subject,
//     message_html: message
//     }
//     };
//     $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
//     }).done(function() {
//     alert('Your mail is sent!');
//     }).fail(function(error) {
//     alert('Oops… ' + JSON.stringify(error));
//     })
//     })
//     })
//     </script>



// var myform = $("form#contact-form");
// myform.submit(function(event){
// 	event.preventDefault();

//   // Change to your service ID, or keep using the default service
//   var service_id = "gmail";
//   var template_id = "template_2SvIv66k";

//   myform.find("button").text("Sending...");
//   emailjs.sendForm(service_id,template_id,myform[0])
//   	.then(function(){ 
//     	alert("Sent!");
//        myform.find("button").text("Send");
//     }, function(err) {
//        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
//        myform.find("button").text("Send");
//     });
//   return false;
// });

var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "gmail";
  var template_id = "template_2SvIv66k";
  var deleteFirstName = document.getElementById('deleteFirstName');
  var cuvaloare = deleteFirstName.value
  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("Sent!");
       myform.find("button").text("Send in your inbox")
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});