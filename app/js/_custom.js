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
               arrows: false,
               dots: true
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
         },
         {
            breakpoint: 576,
            settings: {
               arrows: false,
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


   // Настройка главной навигации(меню)
   function menuSettings() {

      let headerS = $('.page-header');
      let mainNav = $('.page-header .main-nav');
      let mainMenu = $('.page-header .main-nav ul.nav');
      let scrollTop = $(window).scrollTop();

      $(window).on('scroll', menuVisible);

      // Установка условий, когда меню будет прикрепляться вверху экрана
      function menuVisible() {
         scrollTop = $(window).scrollTop();

         // Проверка на разрешение экрана
         if($(window).width() < 992) {
            if (headerS.height() < scrollTop) {
               mainMenu.addClass('nav--fixed');
            } else if (headerS.height() > scrollTop) {
               mainMenu.removeClass('nav--fixed');
            }
         } else if ($(window).width() > 992) {
            if (headerS.height() < scrollTop) {
               mainNav.addClass('main-nav--fixed');
            } else if (headerS.height() > scrollTop) {
               mainNav.removeClass('main-nav--fixed');
            }
         }
      }
      menuVisible();

      // Задаем отступ от блока с навигацией с абсолютным позиционированием, чтобы он появлялся, не влияя на прокрутку
      if ($(window).width() < 992) {
         $('.carousel-main').css('marginTop', $('.main-nav').outerHeight() + 'px');
      }

   }

   menuSettings();


   // Настройка размеров пиццы
   $('.carousel-pizza .size-price-wrap .size').on('click', function () {
      // Удаление класса active со всех элементов
      $(this).parent().children('.size').removeClass('active');

      // Добавление/Удаление класса active с элемента карусели
      if (!$(this).hasClass('active')) {
         $(this).addClass('active');

      } else if ($(this).hasClass('active')) {
         $(this).removeClass('active');
      }

      // Изменение стоимости
      let price = +$($(this).parents('.size-price-wrap').find('.sum')).attr('data-price');
      let size = +$($(this).parents('.size-price-wrap').find('.size.active')).attr('data-size');
      let totalPrice = Math.ceil(price + (price * 0.15));

      // Функция для соблюдения пробелов у сумм более тысячи
      function toNiceView(n) {
         n += "";
         n = new Array(4 - n.length % 3).join("U") + n;
         return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
      }

      // Перезапись переменных
      price = toNiceView(price);
      totalPrice = toNiceView(totalPrice);

      // Присваивание цены, в зависимости от размера
      if (size === 32) {
         $(this).parents('.size-price-wrap').find('.sum').text(totalPrice);
      } else if (size === 26) {
         $(this).parents('.size-price-wrap').find('.sum').text(price);
      }

   });


});
