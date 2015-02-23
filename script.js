$(document).ready(function() {
  var snd = new Audio("sample.mp3");
  var counter = 0;
  var cook = parseInt($.cookie("bwa"));
  var randomNum = Math.floor((Math.random() * 3) + 1);

  if (randomNum == 1) {
    $('body').css('background-image', 'url(bg.jpg )');
  } else if (randomNum == 2) {
    $('body').css('background-image', 'url(bg2.jpg)');
  } else {
    $('body').css('background-image', 'url(bg3.jpg)');
  }
  
  if ( isNaN(cook) ) {
    counter = 0;
    $(".count").text("# # BWAAA x " + counter + " # #");
  } else {
    counter = cook;
    $(".count").text("# # BWAAA x " + counter + " # #");
  }

  $(".bwa").click(function() {
    snd.play();
    snd.currentTime=0;
    $(".horn").fadeTo(50, 0.4);
    $(".bwa").fadeTo(50, 0.8);
    $(this).fadeOut(50);
    $(this).fadeIn(50);
    counter += 1;
    $.cookie('bwa', counter);
    $(".count").text("# # BWAAA x " + counter + " # #");
  });

  $(".reset").click(function() {
    counter = 0;
    $.cookie('bwa', counter);
    $(".count").text("# # BWAAA x " + counter + " # #");
  });

});