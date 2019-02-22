$(document).ready(function(){

	var swiper = new Swiper('.first-screen .swiper-container', {
      loop: true,
      navigation: { 
        nextEl: '.first-screen .swiper-button-next',
        prevEl: '.first-screen .swiper-button-prev',
      },
    });
    var swiper = new Swiper('.RecentPosts .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    var containerEl = document.querySelector('.latestProjects .container');

            var mixer = mixitup(containerEl);
    var swiper = new Swiper('.RecentPosts .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    $('.menu-icon').click(function(){
        $('.menu').toggle();
    });
});
$(document).ready(function () {
 
    var show = true;
    var countbox = ".benefits_inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 750 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits_number').css('opacity', '1');
            $('.benefits_number').spincrement({
                thousandSeparator: "",
                duration: 8000
            });
             
            show = false;
        }
    });
 
});
