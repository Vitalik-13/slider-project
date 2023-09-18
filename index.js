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
      infinite: false,
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
let prevScrollY = window.scrollY;

document.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > prevScrollY && currentScrollY > 200) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }

  prevScrollY = currentScrollY;
});
AOS.init();

let link = document.querySelectorAll(".link");
link.forEach((item) => {
  item.addEventListener("click", scrollElement);
});

function scrollElement(e) {
  e.preventDefault();
  let targetId = this.getAttribute("href");
  let targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
}

let filterItems = document.querySelectorAll(".text-foto-in-slider");

filterItems.forEach((image) => {
  image.addEventListener("mouseover", () => {
    filterItems.forEach((otherImage) => {
      if (otherImage !== image) {
        otherImage.classList.add("filter");
      }
    });
  });

  image.addEventListener("mouseout", () => {
    filterItems.forEach((otherImage) => {
      otherImage.classList.remove("filter");
    });
  });
});
