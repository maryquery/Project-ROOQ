console.log('ready');

$(document).ready(function(){
  // Add scrollspy to <body>
  //$('#content').scrollspy({target: "nav", offset: 0});

  // Add smooth scrolling on all links inside the navbar
  $("nav a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('#content').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  // active nav
  $(function() {
     $("nav a").click(function() {
        // remove classes from all
        $("nav a").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
     });
  });

});
