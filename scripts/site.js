$('.preload').hide();
var loaded = false;
$( window ).on( "load", function() {
  loaded = true;
});
var bodyBottomPadding = function (){
  var footerHeight = $('footer').height();
  $('body').css('padding-bottom', footerHeight)
}
$(document).ready(function(){
  var loadPage = function(){
    if (loaded == true) {
      $('.svg').addClass('loaded');
      $('.svg.loaded').css('max-width', '69px').after(function(){
        $('.preload').fadeIn();
      });

    }
    else {
      rotation();
    }
  }
  var rotation = function (){
    $(".svg").rotate({
      angle:0,
      animateTo:360,
      callback: loadPage
    });
  }
  rotation();
  bodyBottomPadding();
  $('#copyYear').text((new Date()).getFullYear());
})
$(window).resize(bodyBottomPadding());
$('.loop').hover(function(){
  var currentAttr = $(this).attr('src');
  $(this).attr('src', 'img/loop-logo-hover.png');
  $(this).mouseleave(function(){
    $(this).attr('src', currentAttr);
  })
});
$('.river').click (function(){
  $(this).hide();
  $("#river-video").show();
  $("#river-video").html('<iframe src="https://player.vimeo.com/video/341119823?autoplay=1" width="100%" height="auto" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
})
$('.ubercold').click (function(){
  $(this).hide();
  $("#ubercold-video").show();
  $("#ubercold-video").html('<iframe src="https://player.vimeo.com/video/296369486?autoplay=1" width="100%" height="auto" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
})
$('.loop').click(function(){
    $(this).hide();
     $('#loop-video').show();
    $('#loop-video').html('<iframe src="https://player.vimeo.com/video/230518869?autoplay=1" width="100%" height="auto" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
})

$('.learn-more').click(function(){
  $('.watch-trailer, .more-info').slideToggle();
  $('.arrow.down').toggleClass( "up" );
  $('.first-section, .second-section').slideToggle();
});

//@codekit-append "blueimp-gallery.min.js", "lazyload.js", "rotate.js";
