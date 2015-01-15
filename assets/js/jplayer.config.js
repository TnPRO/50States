
jQuery(document).ready(function() {
// Audio Player
    var $players_on_page = $('.jp-audio').length;
    var $song_title = '';

    if($players_on_page > 0){
        for(var i = 1; i <= $players_on_page; i++){
            $('.jp-audio').eq(i-1).addClass('jp-audio'+i);
        };

        setTimeout(function () {
			    var $cover = $('#jp_poster_0').attr('src');
                var $song_title = $('.jp-audio .jp-playlist ul li.jp-playlist-current .jp-playlist-current').html();
				var $twitter = $('.jp-audio .jp-playlist ul li.jp-playlist-current .ap-jp-song-url .free-dl').attr('href');
                $('.jp-audio .song_title').html($song_title);
				$('.jp-audio .page__content').css('background-image','url('+ $cover +')');
				$('.twitter_link').attr("href", "https://twitter.com/intent/follow?original_referer=&region=follow_link&screen_name="+$twitter+"&tw_p=followbutton");
				
				
				

        }, 2000);

        function switchSong() {
            setTimeout(function () {
                for(var i = 1; i <= $players_on_page; i++){
				    var $cover = $('#jquery_jplayer_1 img').attr('src');
					var $twitter = $('.jp-audio'+i+' .jp-playlist ul li.jp-playlist-current .ap-jp-song-url .free-dl').attr('href');
					$('.page__content').css('background-image','url('+ $cover +')');
					$('.twitter_link').attr("href", $twitter);
                    $('.jp-audio'+i+' .jp-previous, .jp-audio'+i+' .jp-next').removeClass('disabled');

                    if ($('.jp-audio'+i+' .jp-playlist ul li:last-child').hasClass('jp-playlist-current')) {
                        $('.jp-audio'+i+' .jp-next').addClass('disabled');
                    }
                    if ($('.jp-audio'+i+' .jp-playlist ul li:first-child').hasClass('jp-playlist-current')) {
                        $('.jp-audio'+i+' .jp-previous').addClass('disabled');
                    }
                    $song_title = $('.jp-audio'+i+' .jp-playlist ul li.jp-playlist-current .jp-playlist-item').html();
                    $('.jp-audio'+i+' .song_title').html($song_title);
                }
            }, 0)
        };

        $('.jp-previous, .jp-next, .jp-playlist ul').click(function() {
            switchSong()
        });
        $(".jp-jplayer").on($.jPlayer.event.ended, function(event) {
            switchSong()
        });
    };

    $(".jp-playlist-toggle").click(function () {
        var $this = $(this);
        for(var i = 1; i <= $players_on_page; i++){
            if ($this.parents('.jp-audio').hasClass('jp-audio'+i)) {
                $('.jp-audio'+i+' .jp-playlist').slideToggle("slow");
            }
        }
    });

});