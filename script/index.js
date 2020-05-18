jQuery(document).ready(function($) {
  $("#gauge1").gauge(80,{color: "#ff4f81",unit: " %",type: "halfcircle"});
  $("#gauge2").gauge(40, {color: "#2dde98", unit: " %",type: "halfcircle"});
  (function() {
    $.fatNav();
  }());
  $(window).load(function(){
    $('.flexslider').flexslider({
    animation: "slide",
    start: function(slider){
      $('body').removeClass('loading');
    }
    });
  });
  // scrolling script
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
  });
  $(".footer_passion").html("Made with Passion | "+new Date().getFullYear());
});
//submit contact form data
function submitFormData() {
  var myObject = new Object();
  myObject.name = $("#name").val();
  myObject.email = $("#email").val();
  myObject.phone = $("#name1").val();
  myObject.message = $("#message").val();
  if (myObject.name == "") {
    alert("Please enter name");
  }else if (myObject.email == "") {
    alert("Please enter email");
  }else if (myObject.phone == "") {
    alert("Please enter phone");
  }else {
    alert("Thank you for contact me, will get back to you in sometime!");
    window.location.reload();
  }
}
