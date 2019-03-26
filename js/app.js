  
  $('document').ready(function() {
    $('#sec-abt-misson-box2-img').css({'height': $('#sec-abt-misson-box1').innerHeight()});
});
  window.onresize = function() {
    $('#sec-abt-misson-box2-img').css({'height': $('#sec-abt-misson-box1').innerWidth()});
    $('#sec-abt-misson-box2-img').css({'height': $('#sec-abt-misson-box1').innerHeight()});
}
/*smartphone look nav bar*/ 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }