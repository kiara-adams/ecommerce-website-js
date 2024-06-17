

window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.backgroundColor = "pink";
        navbar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
    }
};

$(document).ready(function(){
    $('#reviewCarousel').carousel({
      interval: 3000,
      ride: 'carousel'
    });
  });
  