var Slider = {
  GLOBAL: {
    imgList: [
      { img: "/JS_B1/image/coffee1.jpg", text: "The long and winding road" },
      { img: "/JS_B1/image/coffee2.jpg", text: "Happy trees" },
      { img: "/JS_B1/image/coffee3.jpg", text: "Funky roots" },
    ],

    index: 0,
  },
  CONSTS: {},
  SELECTORS: {
    slide_img: "#slide-img",
    img_name: "#img-name",
    prev_button: ".prev-button",
    next_button: ".next-button",
    image_slide_container: ".image-slide-container",
    slide_order_container: ".slide-order-container",
    img_container: ".img-container",
    slide_order: ".slide-order",
  },
  init: function () {
    Slider.renderImgContainer();
    Slider.setUpEvent();
  },

  setUpEvent: function () {
    $(Slider.SELECTORS.prev_button).on("click", function () {
      $(
        Slider.SELECTORS.img_container + `[index=${Slider.GLOBAL.index}]`
      ).removeClass("show");

      $(
        Slider.SELECTORS.slide_order + `[index=${Slider.GLOBAL.index}]`
      ).removeClass("active");

      Slider.GLOBAL.index =
        Slider.GLOBAL.index <= 0
          ? Number(Slider.GLOBAL.imgList.length) - 1
          : Number(Slider.GLOBAL.index) - 1;
      $(
        Slider.SELECTORS.img_container + `[index=${Slider.GLOBAL.index}]`
      ).addClass("show");

      $(
        Slider.SELECTORS.slide_order + `[index=${Slider.GLOBAL.index}]`
      ).addClass("active");
    });

    $(Slider.SELECTORS.next_button).on("click", function () {
      $(
        Slider.SELECTORS.img_container + `[index=${Slider.GLOBAL.index}]`
      ).removeClass("show");

      $(
        Slider.SELECTORS.slide_order + `[index=${Slider.GLOBAL.index}]`
      ).removeClass("active");

      Slider.GLOBAL.index =
        Slider.GLOBAL.index >= Number(Slider.GLOBAL.imgList.length) - 1
          ? 0
          : Number(Slider.GLOBAL.index) + 1;

      $(
        Slider.SELECTORS.img_container + `[index=${Slider.GLOBAL.index}]`
      ).addClass("show");

      $(
        Slider.SELECTORS.slide_order + `[index=${Slider.GLOBAL.index}]`
      ).addClass("active");
    });

    $(Slider.SELECTORS.slide_order).on("click", function () {
      $(
        Slider.SELECTORS.img_container + `[index=${Slider.GLOBAL.index}]`
      ).removeClass("show");

      $(
        Slider.SELECTORS.slide_order + `[index=${Slider.GLOBAL.index}]`
      ).removeClass("active");

      let currentIndex = $(this).attr("index");

      Slider.GLOBAL.index = currentIndex;

      $(
        Slider.SELECTORS.img_container + `[index=${Slider.GLOBAL.index}]`
      ).addClass("show");

      $(
        Slider.SELECTORS.slide_order + `[index=${Slider.GLOBAL.index}]`
      ).addClass("active");
    });

    // $(Slider.SELECTORS.img_container + "[index=0]").addClass("show");
  },

  renderImgContainer: function () {
    var html = "";
    var htmlSlideOrder = "";
    $.each(Slider.GLOBAL.imgList, function (index, item) {
      html += `<div class="img-container ${
        index === 0 ? "show" : ""
      }" index=${index}>
          <img id="slide-img" src="${item.img}" alt="${item.text}">
          <span id="img-name">${item.text}</span>
      </div>`;

      htmlSlideOrder += `<div class="slide-order ${
        index === 0 ? "active" : ""
      }" index=${index}></div>`;
    });

    $(Slider.SELECTORS.image_slide_container).append(html);
    $(Slider.SELECTORS.slide_order_container).html(htmlSlideOrder);
  },
  functionB: function () {},
};

$(document).ready(function () {
  Slider.init();
});
