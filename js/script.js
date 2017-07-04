$(function(){

	$.fn.countMe = function(year, mounth, day, id){

		var note = $('.counts'),
			ts = new Date(year, mounth, day),
			newYear = true;
		
		if((new Date()) > ts){
			// ааАаДаАаЕаМ баОбаКб аОбббаЕбаА аДаЛб аПбаИаМаЕбаА. абббб аБбаДаЕб аОбаЕбаЕаДаНаОаЙ ааОаВбаЙ аГаОаД аИаЛаИ аДаАбаА баЕбаЕаЗ 10 аДаНаЕаЙ.
			// ааБбаАбаИбаЕ аВаНаИаМаАаНаИаЕ аНаА *1000 аВ аКаОаНбаЕ - аВбаЕаМб аДаОаЛаЖаНаО аЗаАаДаАаВаАбббб аВ аМаИаЛаЛаИбаЕаКбаНаДаАб
			ts = (new Date()).getTime() + ts*60*60*1000;
			newYear = false;
		}
			
		$(id).countdown({
			timestamp	: ts,
			callback	: function(days, hours, minutes, seconds){
				
				var message = "";
				
				//message += "ааНаЕаЙ: " + days +", ";
				message += /*"баАбаОаВ: " */+ hours + " Час. ";
				message += + minutes + " Мин. ";
				message +=  + seconds + " Сек.";
				
				/*if(newYear){
					message += "аОббаАаЛаОбб аДаО ааОаВаОаГаО аГаОаДаА!";
				}
				else {
					message += "аОббаАаЛаОбб аДаО аМаОаМаЕаНбаА баЕбаЕаЗ 10 аДаНаЕаЙ!";
				}*/
				
				note.html(message);
			}
		});

	};
});