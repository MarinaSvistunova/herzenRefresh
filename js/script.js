 jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 8000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});

$(document).ready(function() {
    $('#SpecialityCarousel').carousel({
	    interval: 10000
	})
});

$(document).ready(function(){
    console.log($(document).width());
   if ($(document).width() < 900) {
       $('.main-menu__wrapper').addClass('pushy pushy-left');
       $('.main-menu').addClass('pushy-content');
       $('.main-menu__item').addClass('pushy-link');
   } else {
       $('.main-menu__wrapper').removeClass('pushy pushy-left');
       $('.main-menu').removeClass('pushy-content');
       $('.main-menu__item').removeClass('pushy-link');
   }
});

$(document).ready(function(){
  $('#newsparse').load('../data/news.txt');
  $('#anonsparse').load('../data/anons.txt');
  $('#eventparse').load('../data/event.txt');
  $('#news1').load('../news/news1.txt');
  $('#news2').load('../news/news2.txt');
});