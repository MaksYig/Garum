// Slider clients logo//
$(function () {
  $('.find__content-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".rev_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// End Slider clients logo//
// Picture ZOOM //
$(function () {
  $(".product__img").click(function (event) {
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
// Sandwich Menu for @Media//
$(function () {
  $(".header_btn_menu").on("click", function () {
    $(".menu_header ul").slideToggle();
  });
});
// END Sandwich Menu for @Media//
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
