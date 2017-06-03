<?php
 /* Здесь проверяется существование переменных */
 if (isset($_POST['tel'])) {$contact_tel = $_POST['tel'];}


/* Сюда впишите свою эл. почту */
 $address = "colorkid@yandex.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Телефон: $contact_tel";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='ЛИД с салон за 33 900 руб.'; //сабж
$email='<salon@ampermedia.ru>'; // от кого
 $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="3; url=index.html">
<title>С вами свяжутся</title>
<meta name="generator">
<style type="text/css">
body
{
   
   background: rgba(248,183,56,1) url(img/zakaz.jpg) top -70% center no-repeat;
   
}

<script type="text/javascript">
setTimeout('location.replace("/index.html")', 3000);
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
</script> 
</head>
</body>
</html>