$(document).ready(function () {
  //Плавно прокручивает страницу до id-ка
  //Ссылка должна быть с id на якорь и классом prokrutkaslide.
  $(".prokrutkaslide").click(function () {
    var el = $(this).attr("href");
    el = el.replace(/[^\#]*/, ""); //вытаскиваем id из ссылки
    $("body,html").animate(
      {
        scrollTop: $(el).offset().top,
      },
      2000
    );
    return false;
  });
});


$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__topmenu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

// header slider
$(".header__slider").slick({
  slidesToShow: 1,
  autoplaySpeed: 3000,
  autoplay: true,
  arrows: false,
});

// SLider for clients//
$(function () {
  $(document).ready(function () {
    $(".find__content-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  });
});

// SLider for review//
$(function () {
  $(document).ready(function () {
    $(".rev__items").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
});

// Scroll up button for site//
$(function () {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        $(".scrollup").fadeIn();
      } else {
        $(".scrollup").fadeOut();
      }
    });
    $(".scrollup").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1200);
      return false;
    });
  });
});
// END Scroll up button for site//

// Picture ZOOM //
$(function () {
  $(".product__img, .garumnew__img2, .garumnew__img").click(function (event) {
    var i_path = $(this).attr("src");
    $("body").append(
      '<div id="overlay"></div><div id="magnify"><img src="' +
        i_path +
        '"><div id="close-popup"><i></i></div></div>'
    );
    $("#magnify").css({
      left: ($(document).width() - $("#magnify").outerWidth()) / 2,
      // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
      top: ($(window).height() - $("#magnify").outerHeight()) / 2,
    });
    $("#overlay, #magnify").fadeIn("fast");
  });

  $("body").on("click", "#close-popup, #overlay", function (event) {
    event.preventDefault();

    $("#overlay, #magnify").fadeOut("fast", function () {
      $("#close-popup, #magnify, #overlay").remove();
    });
  });
});
// END  Picture ZOOM //
