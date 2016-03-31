$(document).ready(function(){

   $(".button-projects").click(function(event){
      event.preventDefault();
	   var goTop = $(".projects").offset().top;
	   //conaole.log($(".projects").offset().top;
      $("html, body").animate({scrollTop:goTop}, 1000,"easeInOutQuart" );
   });

   $(".button-about").click(function(event){
      event.preventDefault();
      var goTop = $(".about").offset().top;
      //conaole.log($(".projects").offset().top;
      $("html, body").animate({scrollTop:goTop}, 1000,"easeInOutQuart" );
   });
   $(".button-home").click(function(event){
      event.preventDefault();
      var goTop = $(".splash").offset().top;
      //conaole.log($(".projects").offset().top;
      $("html, body").animate({scrollTop:goTop}, 1000,"easeInOutQuart" );
   });

   $(".button-contact").click(function(event){
      event.preventDefault();
      var goTop = $(".contact").offset().top;
      //conaole.log($(".projects").offset().top;
      $("html, body").animate({scrollTop:goTop}, 1000,"easeInOutQuart" );
   });

   window.sr = ScrollReveal();
   sr.reveal('.splash .header', { duration: 200 });
   sr.reveal('.splash .description', { duration: 400 });
   sr.reveal('.splash .projects', { duration: 400 });
});