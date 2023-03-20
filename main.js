$(function(){
    $(".btn-mob").click(function(){
         $(this).toggleClass("active");
         $(".collapse").slideToggle();
    });

       $(".accodian a").click(function(e){
         e.preventDefault();
         if($(this).hasClass("active")==false){
         $(".accodian a").removeClass("active");
         $(".accodian p").slideUp();
         $(this).addClass("active");
         $(this).next("p").slideDown();
         }
       })
   });

   $(".map").click(function () {
       $("body").append(`<div class="overlay"></div>`)
       $("body").append(`<div class="popover"></div>`)
       $(".popover").append(
           `<a href="" class="close" aria-label="close">&times;</a>
           <iframe class="map-iframe"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14346.319230559926!2d77.3075178733184!3d28.587805597636375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45e3eccb8a7%3A0xd5eb60e62b19e6ba!2sSector%2015%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1679302716515!5m2!1sen!2sin" width="600"
            height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
       )
       $(".popover .close").click(function (e) {
           e.preventDefault();
           $(".popover, .overlay").remove()
       });

       $(".overlay").click(function () {
           $(".popover, .overlay").remove()
       });
       $(window).keyup(function (e) {
           if (e.which == 27) {
               $(".popover, .overlay").remove()
           }
       })
   });