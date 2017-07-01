         $(document).ready(function(){
           $("a").on('click', function(event) {
         
             if (this.hash !== "") {
               event.preventDefault();
         
               var hash = this.hash;
               $('html, body').animate({
                 scrollTop: $(hash).offset().top
               }, 800, function(){
                 window.location.hash = hash;
               });
             }
           });
         });
         
      document.addEventListener("DOMContentLoaded", func=function(){
         Typed.new("#typed", {
            strings: ["Programming","Machine Learning","Web Development",""],
            typeSpeed: 50,
            backDelay: 2000,
            callback: function (){
            func();
          }
         });
      });

	$("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});

	$(document).scroll(function() {
	  var y = $(this).scrollTop();
	  if (y > 800) {
	    $('#stt').fadeIn("fast");
	  } else {
	    $('#stt').fadeOut("fast");
	  }
	});

         $(document).ready(function(){
              $("#puzz").click(function(){
                  $("#p").fadeToggle(1000);
              });
         });
         
          $(document).ready(function(){
              $("#gas").click(function(){
                  $("#g").fadeToggle(1000);
              });
          });
          $(document).ready(function(){
              $("#edu").click(function(){
                  $("#e").fadeToggle(1000);
              });
          });
          $(document).ready(function(){
              $("#quiz").click(function(){
                  $("#q").fadeToggle(1000);
              });
          });
          $(document).ready(function(){
               $(".landing").css("min-height", $( window ).height()- $(".nav-wrapper").height());
               $(".container").css("margin-top", $( window ).height()/25);
               $(".links").css("top", $( window ).height()*75/100)
               $(".links").css("left", $( window ).width()*75/100)
          });
          $(document).ready(function(){
         		$('.modal').modal();
         });
         $(document).ready(function(){
         $('#construction').modal('open');
         });
         $(document).ready(function(){
         $('.carousel').carousel();
         });
         $(document).ready(function(){
         $('.materialboxed').materialbox();
         });
