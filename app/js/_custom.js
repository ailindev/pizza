$(function () {

   $('#carousel-main').slick({
      infinite: false,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               dots: true
            }
         },
         {
            breakpoint: 576,
            settings: {
               arrows: false
            }
         }
      ]
   });

   $('#carousel-pizza').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 2,
      dots: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false
            }
         }
      ]
   });

   $('#carousel-snack').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 2,
      dots: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });

   $('#carousel-drink').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 1,
      centerPadding: '0px',
      centerMode: true,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               centerMode: false,
               initialSlide: 0,
               dots: true
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               centerMode: false,
               initialSlide: 0,
               dots: true
            }
         }
      ]
   });


});
