$(document).ready(function() {
  $('body').hide();
  var snd = new Audio("sample.mp3");
  var counter = 0;
  var cook = parseInt($.cookie("bwa"));
  
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

$(window).load(function () {
  $('body').fadeIn(1000);
  return false;
});