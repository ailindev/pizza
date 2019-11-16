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

   $('#carousel-drink').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 1,
      centerPadding: '0px',
      centerMode: true
   });


});
