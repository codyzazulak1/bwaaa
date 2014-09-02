$(document).ready(function() {
  var counter = 0
  var snd = new Audio("sample.mp3");

  $(".bwa").click(function() {
    snd.play();
    snd.currentTime=0
    $(this).fadeOut(50);
    $(this).fadeIn(50);
    counter += 1
    console.log("BWAAA x " + counter)

    $(".count").text("BWAAA x " + counter);
  });
});