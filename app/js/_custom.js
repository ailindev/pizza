$(function () {

   $('#carousel-main').slick({
      infinite: false
   });

   $('#carousel-pizza').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 2,
      dots: true,
   });

   $('#carousel-snack').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 2,
      dots: true,
   });


});
