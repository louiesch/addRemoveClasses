$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("#red-box").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
    $("#red-box").addClass("red-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("#red-box").removeClass();
    $("body").addClass("red-background");
  });

 
});