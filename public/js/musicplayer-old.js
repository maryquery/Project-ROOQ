/// Audio Player - date@sep18 -
var audio;

//Hide Pause button
$('.pauseBtn').hide();

//Initilize Audio
initAudio( $('#playlist li:first-child'));

//Initilizer Function
function initAudio(element){
  var song = element.attr('song');
  var title = element.text();
  var cover = element.attr('cover');
  var artist = element.attr('artist');
  //Create  Audio Object
  audio = new Audio('src/audio/' + song);

  //wenn der song nicht gestartet ist
  if(!audio.currentTime){
    $('#duration').html('0.00');
  }

  //Artist in title
  $('#musicPlayer .title').text(title);
  $('#musicPlayer .artist').text(artist);

  //Insert Cover Image
  //var coverURL = ('img/'+ cover);
  //$("div.cover").css("background-image", "url( '"+coverURL+"')");

  $('#playlist li').removeClass('active');
  element.addClass('active');
}

//Play Button
$('.playBtn').click(function(){
    audio.play();
    $('.playBtn').hide();
    $('.pauseBtn').show();
    $('#duration').fadeIn(400);
    showDuration();
});

//Pause Button
$('.pauseBtn').click(function(){
    audio.pause();
    $('.pauseBtn').hide();
    $('.playBtn').show();
});

//Stop Button
$('.stopBtn').click(function(){
    audio.pause();
    audio.currentTime = 0;
    $('.pauseBtn').hide();
    $('.playBtn').show();
    $('#duration').fadeOut(400);
});

//Next Button
$('.nextBtn').click(function(){
    audio.pause();
    var next = $('#playlist li.active').next();

    if(next.lenght  == 0){
      next = $('#playlist li:first-child');
    }
    initAudio(next);
    audio.play();
    showDuration();
});

//Prev Button
$('.prevBtn').click(function(){
    audio.pause();
    var prev = $('#playlist li.active').prev();

    if(prev.lenght  == 0){
      prev = $('#playlist li:last-child');
    }
    initAudio(prev);
    audio.play();
    showDuration();
});

//Click li
$('#musicPlayer #playlist ul li').click(function(){
    audio.pause();
    var song = $(this);

    initAudio(song);
    audio.play();
    showDuration();
});

//Volume control
$('#volume').change(function(){
  audio.volume = parseFloat(this.value / 10);
});

//Time duration
function showDuration(){
  $(audio).bind('timeupdate', function(){
    //Get Hours & Minutes
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt((audio.currentTime) / 60) % 60;
    //Add 0 if less than 10
    if(s<10){
      s = '0'+ s;
    }
    $('#duration').html(m + '.' + s);
    var value = 0;
    if(audio.currentTime > 0){
      value = Math.floor((100 / audio.duration) * audio.currentTime);
    }
    $('#progress').css('width', value + '%');
  })


}
