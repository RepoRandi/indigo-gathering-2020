jQuery(document).ready(function($) {

	$( '.wpcdt-countdown-timer' ).each(function( index ) {

		var date_id   = $(this).attr('id');
		var date_conf = $.parseJSON( $(this).closest('.wpcdt-countdown-wrp').find('.wpcdt-date-conf').attr('data-conf'));

		$('#'+date_id).TimeCircles({
			'animation': (date_conf.animation != '')					? date_conf.animation 				: 'smooth',
			'bg_width': (date_conf.backgroundwidth != '')				? date_conf.backgroundwidth 		: 1.2,
			'fg_width': (date_conf.circlewidth != '')					? date_conf.circlewidth 			: 0.1,
			'circle_bg_color': (date_conf.backgroundcolor != '')		? date_conf.backgroundcolor 		: '#313332',
			'time': {
				'Days': {
					'text': (date_conf.days_text != '')					? date_conf.days_text 				: 'Days',
					'color': (date_conf.daysbackgroundcolor != '')		? date_conf.daysbackgroundcolor 	: '#e3be32',
					'show': (date_conf.is_days == 1)					? true : false,
				},
				'Hours': {
					'text': (date_conf.hours_text != '')				? date_conf.hours_text 				: 'Hours',
					'color': (date_conf.hoursbackgroundcolor != '')		? date_conf.hoursbackgroundcolor 	: '#36b0e3',
					'show': (date_conf.is_hours == 1)					? true : false,
				},
				'Minutes': {
					'text': (date_conf.minutes_text != '')				? date_conf.minutes_text 			: 'Minutes',
					'color': (date_conf.minutesbackgroundcolor != '')	? date_conf.minutesbackgroundcolor 	: '#75bf44',
					'show': (date_conf.is_minutes == 1)					? true : false,
				},
				'Seconds': {
					'text': (date_conf.seconds_text != '')				? date_conf.seconds_text 			: 'Seconds',
					'color': (date_conf.secondsbackgroundcolor != '')	? date_conf.secondsbackgroundcolor 	: '#66c5af',
					'show': (date_conf.is_seconds == 1)					? true : false,
				}
			}
		});

		$(window).resize(function(){
			$('#'+date_id).TimeCircles().rebuild(); 
		});

		/* close on timer end  */
		$('#'+date_id).TimeCircles().addListener(countdownComplete);

		function countdownComplete(unit, value, total){
			if( total <= -1 ) {
				$('#'+date_id).TimeCircles().stop();
			}
		}
	});
});