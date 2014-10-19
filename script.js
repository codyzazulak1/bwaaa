$(document).ready(function() {
  var snd = new Audio("sample.mp3");
  var counter = 0;
  var value = parseInt($.cookie("bwa"));
  
  if ( isNaN(value) ) {
    counter = 0;
  } else {
    counter = value;
    $(".count").text("BWAAA x " + counter); 
  }

  $(".bwa").click(function() {
    snd.play();
    snd.currentTime=0;
    $(this).fadeOut(50);
    $(this).fadeIn(50);
    counter += 1;
    $.cookie('bwa', counter);
    console.log("BWAAA x " + $.cookie("bwa") );
    $(".count").text("BWAAA x " + counter);
  });
});