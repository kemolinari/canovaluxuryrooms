

$(".navbar-toggler-icon").click(function(){

  $(".background-title").fadeToggle();

$(".grafic").slideToggle();

$(".grafic2").slideToggle();

});


$("*").click(function(){

  $(".background-title").show();

  $(".grafic").show();

  $(".grafic2").show();

  $(".navbar-collapse").removeClass("show");

});

jQuery(document).ready(function() {
    jQuery('#loading').fadeOut(1000);
});
