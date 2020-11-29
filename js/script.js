// アコーディオン
$(function () {
  $(".accordion__bottom").hide();
  $(".accordion__bottom").first().show();

  $(".accordion__top").click(function () {
    if ($(this).hasClass("accordion__top--active")) {
      $(this).next(".accordion__bottom").slideUp("fast");
      $(this).removeClass("accordion__top--active");
    } else {
      $(this).next(".accordion__bottom").slideDown("fast");
      $(this).addClass("accordion__top--active");
    };
  });
});

//フローのアコーディオン(他要素がとじる)
$(function () {
  $(".accordion-flow__bottom").hide();
  $(".accordion-flow__bottom").first().show();
  $(".accordion-flow__top").click(function () {
    if ($(this).hasClass("accordion-flow__top--active")) {
      $(this).next(".accordion-flow__bottom").slideUp("fast");
      $(this).removeClass("accordion-flow__top--active");
    } else {
      $(".accordion-flow__top").removeClass("accordion-flow__top--active");
      $(this).addClass("accordion-flow__top--active");
      $(this).next(".accordion-flow__bottom").slideDown("fast");
      $(".accordion-flow__top").not(".accordion-flow__top--active").next(".accordion-flow__bottom").slideUp("fast");
    };
  });
});

// トップへ戻るボタン
$(function () {
  var pagetop = $("#page-top");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500); //0.5秒かけてトップへ移動
    return false;
  });
});



$(function () {
  $("#top-page").css("background-color", "red");
});

$(function () {
  $(".select").click(function () {
    if ($(this).hasClass("active")) {
      $(this).css("transform", "rotate(0turn)");
      $(this).removeClass("select");
    } else {
      (this).css("transform", "rotate(0.5turn)");
      $(this).addClass("active");
    };
  });
});