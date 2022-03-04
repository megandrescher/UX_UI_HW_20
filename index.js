$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

$(".jumbotronAll").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $("jumbotronAll").css({ height: $(window).height() + "px" });
});


/*const jumbotron = document.querySelector('.jumbotron');
const slider = document.querySelector('.slider');
const navbar = document.querySelector('#navbar');
const cardContainer = document.querySelector('.cardContainer');


const tl = new TimelineMax();

tl.fromTo(hero,1, {height: "0%"}, {height: '80%'})

$(".tile").hover(function () {
  $(this).find('.tile-hover').fadeIn(100);
},
function () {
  $(this).find('.tile-hover').fadeOut(100);
});*/

/*$('.tile').hover(
  function() {
        $(this).children('img').fadeTo('slow', 0.5);
 },
  function() {
        $(this).children('img').fadeTo('slow', 1);
 }
);*/

$(function() {
  $('.bbutton').click(function(){
    $(".bbutton").attr('src',"/UX_UI_HW_19/images/clickedNewsletter.png");
    return false;
  });
 });