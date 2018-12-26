$(document).ready(function(){

  //Mobile Menu open function
  $('.icon-menu').on('click' , function(e){
    event.preventDefault();
    $('.menu').addClass('active');
  });

  //Mobile Menu close function
  $('.icon-cross').on('click' , function(e){
    event.preventDefault();
    $('.menu').removeClass('active');
  });

  //Mobile Menu link function
  $('#mobileMenu .menu ul li').click(function(e){
    event.preventDefault();

    var sectionPos =  $('.main section').index();
    var elementPos =  $(this).index();

    $('.menu').removeClass('active');
    $(".main section").moveTo(elementPos+1);
  });

});
