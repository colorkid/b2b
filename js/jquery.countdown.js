/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 */

(function($){
	
	// аАТаАааАааАааБТаАааБТаБТаАааАа аБТаАааАааБТаАааАа аАа аАааАааАааАааАааАа аАааБТаАааАааАааАааАааАааАа аАааБТаБТаАааАааАааАа
	var days	= 24*60*60,
		hours	= 60*60,
		minutes	= 60;
	
	// аАааАааАааАааАааАааАа аАааАааАааАааАааАа
	$.fn.countdown = function(prop){
		
		var options = $.extend({
			callback	: function(){},
			timestamp	: 0
		},prop);
		
		var left, d, h, m, s, positions;

		// аАааАааАааБТаАааАааАааАааАааАааБТаБТаАааАа аАааАааАааАааАааАа
		init(this, options);
		
		positions = this.find('.position');
		
		(function tick(){
			
			// аАТаБТаБТаАааАааАааБТаБТ аАааБТаАааАааАааАааАа
			left = Math.floor((options.timestamp - (new Date())) / 1000);
			
			if(left < 0){
				left = 0;
			}
			
			// аАТаБТаБТаАааАааАааБТаБТ аАааАааАааАа
			d = Math.floor(left / days);
			updateDuo(0, 1, d);
			left -= d*days;
			
			// аАТаБТаБТаАааАааАааБТаБТ аБТаАааБТаАааАа
			h = Math.floor(left / hours);
			updateDuo(2, 3, h);
			left -= h*hours;
			
			// аАТаБТаБТаАааАааАааБТаБТ аАааАааАааБТаБТ
			m = Math.floor(left / minutes);
			updateDuo(4, 5, m);
			left -= m*minutes;
			
			// аАТаБТаБТаАааАааАааБТаБТ аБТаАааАааБТаАааАа
			s = left;
			updateDuo(6, 7, s);
			
			// аАТаБТаАааБТаАааАааАааАа аАааАааАааАааБТаАааБТаАааБТаБТ аБТаБТаАааАааБТаАааБТ аАааАааАааБТаАааАааАааАааБТаАааАааБТ
			options.callback(d, h, m, s);
			
			// аАТаАааАааАааАааБТаБТаАааАа аБТаАааАааАааБТаБТаБТаАааАа аАааБТаАааАааАа аАааАааАааАааАааАа аБТаБТаАааАааБТаАааАа аБТаАааБТаАааАа 1 аБТаАааАааБТаАааАааБТ
			setTimeout(tick, 1000);
		})();
		
		// аАТаАааАааАааАааБТ аБТаБТаАааАааБТаАааБТ аАааАааАааАааАааАааБТаАааБТ аАааАааАа аБТаАааБТаАааБТаАааАааБТаАа аАааАааАааАааБТаАааАа аАааАа аАааАааАааАа аБТаАааАа
		function updateDuo(minor,major,value){
			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			switchDigit(positions.eq(major),value%10);
		}
		
		return this;
	};


	function init(elem, options){
		elem.addClass('countdownHolder');

		// аАааАааАааАааАааАааАа аБТаАааАааАааАааБТаАааБТ аАааАааБТаБТаБТаАа аАааАааАааБТаАааАааАааАааБТаАа
		$.each(['Days','Hours','Minutes','Seconds'],function(i){
			$('<span class="count_wrap count'+this+'">').html(
				'<span class="lay"></span>\
				<span class="position">\
					<span class="digit static">0</span>\
				</span>\
				<span class="position">\
					<span class="digit static">0</span>\
				</span>'
			).appendTo(elem);
			
			if(this!="Seconds"){
				elem.append('<span class="countDiv countDiv'+i+'"></span>');
			}
		});

	}

	// аАааАааАааАааАааАааАа аАааАааАааАааАааБТаАааАааАааАааАааБТаАа аАааАааБТаАааБТаАааАа аАааАааАааАааБТ аАааАааБТаАааБТ аБТаАааБТаБТаАааАааАа
	function switchDigit(position,number){
		
		var digit = position.find('.digit')
		
		if(digit.is(':animated')){
			return false;
		}
		
		if(position.data('digit') == number){
			// аАТаБТ аБТаАааАа аАааБТаАааАааАааАа аАааАааАааАааБТаБТ аБТаАааБТаБТаБТ
			return false;
		}
		
		position.data('digit', number);
		
		var replacement = $('<span>',{
			'class':'digit',
			css:{
				top:'-2.1em',
				opacity:0
			},
			html:number
		});
		
		// аАТаАааАааБТаБТ .static аАааАааАааАааАааАааБТаАааБТаБТаБТ, аАааАааАааАааАа аАааАааАааАааБТаБТаАааАааБТаБТаБТ аАааАааАааАааАааБТаАааБТ.
		// аАТаБТаАааАааАааАааАааАааАааАа аАааАааАааБТ аАааАааАааАааАа аАааАааАааАааАааАа.
		
		digit
			.before(replacement)
			.removeClass('static')
			.animate({top:'2.5em',opacity:0},'fast',function(){
				digit.remove();
			})

		replacement
			.delay(100)
			.animate({top:0,opacity:1},'fast',function(){
				replacement.addClass('static');
			});
	}
})(jQuery);