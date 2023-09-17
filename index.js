$(document).ready(function () {
  $(".slider").slick({
    vertical: true,
    dots: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    cssEase: "linear",
  });
});
//===================================================================
// slider-one-end

// $(document).ready(function () {
//   $(".last-slider").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: false,
//   });
// });

/// two slider
$(document).ready(function () {
  let slickInitialized = false;

  function initializeSlider(slidesToShow) {
    $(".two-pack").slick({
      // autoplay: true,
      // autoplaySpeed: 1000,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
    });
    slickInitialized = true;
  }

  function updateSlider() {
    if ($(window).width() <= 1300 && $(window).width() > 950) {
      if (slickInitialized) {
        $(".two-pack").slick("unslick");
        slickInitialized = false;
      }
      $(".two-pack").slick({
        // autoplay: true,
        // autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
      });
    } else if ($(window).width() <= 950 && $(window).width() > 650) {
      if (slickInitialized) {
        $(".two-pack").slick("unslick");
        slickInitialized = false;
      }
      initializeSlider(2);
    } else if ($(window).width() <= 650) {
      if (slickInitialized) {
        $(".two-pack").slick("unslick");
        slickInitialized = false;
      }
      initializeSlider(1);
    } else {
      if (slickInitialized) {
        $(".two-pack").slick("unslick");
        slickInitialized = false;
      }
      initializeSlider(4);
    }
  }

  $(window).on("resize", function () {
    updateSlider();
  });

  updateSlider();
});
//===================================================================
// three slider

$(document).ready(function () {
  let slickInitialized = false;

  function initializeSliderThreeslider(slidesToShow) {
    $(".three-pack-slider").slick({
      // autoplay: true,
      // autoplaySpeed: 1000,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
    });
    slickInitialized = true;
  }

  function updateSliderThreeslider() {
    if ($(window).width() <= 1300 && $(window).width() > 750) {
      if (slickInitialized) {
        $(".three-pack-slider").slick("unslick");
        slickInitialized = false;
      }
      $(".three-pack-slider").slick({
        // autoplay: true,
        // autoplaySpeed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
      });
    } else if ($(window).width() <= 750) {
      if (slickInitialized) {
        $(".three-pack-slider").slick("unslick");
        slickInitialized = false;
      }
      initializeSliderThreeslider(1);
    } else {
      if (slickInitialized) {
        $(".three-pack-slider").slick("unslick");
        slickInitialized = false;
      }
      initializeSliderThreeslider(3);
    }
  }

  $(window).on("resize", function () {
    updateSliderThreeslider();
  });

  updateSliderThreeslider();
});

//===================================================================
//last slider

$(document).ready(function () {
  let slickInitialized = false;

  function initializeSliderThreesliders(slidesToShow) {
    $(".last-slider").slick({
      infinite: false,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
    });
    slickInitialized = true;
  }

  function updateSliderThreesliders() {
    if ($(window).width() <= 1300 && $(window).width() > 960) {
      if (slickInitialized) {
        $(".last-slider").slick("unslick");
        slickInitialized = false;
      }
      $(".last-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
      });
    } else if ($(window).width() <= 960) {
      if (slickInitialized) {
        $(".last-slider").slick("unslick");
        slickInitialized = false;
      }
      initializeSliderThreesliders(1);
    } else {
      if (slickInitialized) {
        $(".last-slider").slick("unslick");
        slickInitialized = false;
      }
      initializeSliderThreesliders(3);
    }
  }

  $(window).on("resize", function () {
    updateSliderThreesliders();
  });

  updateSliderThreesliders();
});
//===================================================================
let header = document.querySelector(".header");
document.addEventListener("scroll", () => {
  if (scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
AOS.init();
