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

var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "gmail";
  var template_id = "template_2SvIv66k";
  var deleteFirstName = document.getElementById('deleteFirstName');
  var cuvaloare = deleteFirstName.value
  myform.find("button");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("Sent!");
       myform.find("button");
       $("#myform")[0].reset();
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});


function Circlle(el) {
  $(el).circleProgress({fill: {color: '#3693ff'}})
  .on('circle-animation-progress', function(event, progress, stepValue){
    $(this).find('strong').text(String(stepValue.toFixed(2))+'%');
  })
}

Circlle('round');