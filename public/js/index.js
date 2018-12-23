$(document).ready(function(){

  //Mobile Menu open/close
  $('.icon-menu').on('click' , function(e){
    event.preventDefault();
    $('.menu').addClass('active');
  });

  $('.icon-cross').on('click' , function(e){
    event.preventDefault();
    $('.menu').removeClass('active');
  });

  $('#mobileMenu .menu ul li').click(function(){

    var sectionPos =  $('.main section').index();
    var elementPos =  $(this).index();

    $(".main section").moveTo(elementPos+1);
  });

});
