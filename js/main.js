<script>
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

</script>
