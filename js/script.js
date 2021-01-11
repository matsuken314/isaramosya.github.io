$(function() {

  /*⑤こちらがQ&Aのアコーディオンメニュー*/
  /*こちらもそのまま使っていただければ*/
  /*これはCSSの設定が主な作業になります*/
  /*CSSと合わせてお使いください*/
  $(".answer-txt:not(:first-of-type)");
  // 矢印の向きを変えておく
  $(".question-ttl:first-of-type").addClass("open");
  $('.aco-contents').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('rotate');
  });
  $('.question-ttl').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('rotate2');
});

 /*トップへ戻るボタン*/
 var pagetop = $('#pagetop');
 // ボタン非表示
 pagetop.hide();
 // 100px スクロールしたらボタン表示
 $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
         pagetop.fadeIn();
    } else {
         pagetop.fadeOut();
    }
 });
 pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
 });
// ページ内リンク
 $('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top - 65;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});
});

   