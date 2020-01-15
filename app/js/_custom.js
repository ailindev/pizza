$(function () {
   
   // Слайдер Slick
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

      let winWidth = $(window).width();
      let headerS = $('.page-header');
      let mainNav = $('.page-header .main-nav');
      let mainMenu = $('.page-header .main-nav ul.nav');
      let scrollTop = $(window).scrollTop();
      let btnMenu = $('.menu-button');
      let overlay = $('.overlay');

      $(window).on('scroll', menuFixed);

      // Установка условий, когда меню будет прикрепляться вверху экрана
      function menuFixed() {
         scrollTop = $(window).scrollTop() + 220;

         // Проверка на разрешение экрана
         if (winWidth < 992 && winWidth > 768) {
            if (scrollTop > headerS.height()) {
               mainMenu.addClass('nav--fixed');
            } else if (scrollTop < headerS.height()) {
               mainMenu.removeClass('nav--fixed');
            }
         } else if (winWidth > 992) {
            if (scrollTop > headerS.height()) {
               mainNav.addClass('main-nav--fixed');
            } else if (scrollTop < headerS.height()) {
               mainNav.removeClass('main-nav--fixed');
            }
         }
      }

      menuFixed();

      // Кнопка меню
      btnMenu.on('click', menuToggle);

      function menuToggle() {
         overlay.fadeToggle(200);
         mainMenu.fadeToggle(200);
         $(this).toggleClass('menu-button--show');

         // Проверка на открытое меню
         if ($(this).hasClass('menu-button--show')) {
            $(document).on('click', hideMenuAndOverlay);
            $(document).on('scroll', hideMenuAndOverlay);
         }

         // Добавлениие фиксации
         if (winWidth < 768) {
            mainMenu.addClass('nav--fixed');
         } else if (winWidth > 768) {
            mainMenu.removeClass('nav--fixed');
         }
      }

      // Функция, срабатывающая при клике вне меню
      function hideMenuAndOverlay(e) { // событие клика по веб-документу
         if (!mainNav.is(e.target) // если клик был не по нашему блоку
             && mainNav.has(e.target).length === 0) { // и не по его дочерним элементам
            mainMenu.fadeOut(200); // скрываем его
            btnMenu.removeClass('menu-button--show');
            overlay.fadeOut(200); // скрываем его
         }
      }

      // Подсветка пунктов меню
      $(window).on('scroll', itemHighlight);

      function itemHighlight() {
         let header = $('#page-header').offset().top,
             section1 = $('#s-pizza').offset().top - 200,
             section2 = $('#s-snack').offset().top - 200,
             section3 = $('#s-drink').offset().top - 200,
             section4 = $('#s-delivery').offset().top;
             // section5 = $('#s-checkout').offset().top,
             // footer = $('#page-footer').offset().top;

         // Проверка положения секции относительно других и добавление подсветки
         if (scrollTop >= header && scrollTop < section1) {
            $('li a[href^="#"]').parent().removeClass('active');
            $('li a[href="#page-header"]').parent().addClass('active');
         } else if (scrollTop >= section1 && scrollTop < section2) {
            $('li a[href^="#"]').parent().removeClass('active');
            $('li a[href="#s-pizza"]').parent().addClass('active');
         } else if (scrollTop >= section2 && scrollTop < section3) {
            $('li a[href^="#"]').parent().removeClass('active');
            $('li a[href="#s-snack"]').parent().addClass('active');
         } else if (scrollTop >= section3 && scrollTop < section4) {
            $('li a[href^="#"]').parent().removeClass('active');
            $('li a[href="#s-drink"]').parent().addClass('active');
         } else {
            $('li a[href^="#"]').parent().removeClass('active');
         }
      }

      itemHighlight();

      // Переход по секциям
      $($('.page-header .main-nav a[href^="#"]').on('click', goToAnchor));
      $($('.page-footer .main-nav a[href^="#"]').on('click', goToAnchor));
      $($('a[href^="#"].arrow-down').on('click', goToAnchor));

      function goToAnchor(e) {


         let sc = $(this).attr("href"),
             dn = $(sc).offset().top;

         // Изменение отступов для разных экранов(минус высота меню)
         if ($(window).width() > 1200) {
            dn = $(sc).offset().top - 63.25;
         } else if ($(window).width() < 1200 && $(window).width() > 768) {
            dn = $(sc).offset().top - 46.25;
         } else if ($(window).width() < 768) {
            dn = $(sc).offset().top + 1;
         }

         // Анимация только для настольных экранов
         if ($(window).width() > 1024) {
            $('html, body').stop().animate({scrollTop: dn}, 1000);
         } else {
            $('html, body').stop().animate({scrollTop: dn}, 0);
         }

         e.preventDefault();
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

   // Настройка кнопок "выбрать"
   let btnSelect = $('a.button.select');
   btnSelect.on('click', btnSelected);

   function btnSelected(e) {
      let th = $(this);
      th.addClass('selected');
      // Проверка на выбранность
      if (th.hasClass('selected') && th.html() === '<i class="icon-check"></i>Выбрать') {
         th.html('Количество<input type="text"><i class="icon-check"></i>');
         th.children('input').focus();
      }

      e.preventDefault();
   }

});