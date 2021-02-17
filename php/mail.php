<?php
$msg_box = ""; // в этой переменной будем хранить сообщения формы

if($_POST['btn_submit']){
// собираем данные из формы
$message = "Имя: " . $_POST['name'] . "<br/>";
$message .= "Телефон: " . $_POST['phone'] . "<br/>";
send_mail($message); // отправим письмо
// выведем сообщение об успехе
$msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
}

// функция отправки письма
function send_mail($message){
// почта, на которую придет письмо
$mail_to = "адрес_почты_получателя_";
// тема письма
$subject = "Заказан обратный звонок";

// заголовок письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
$headers .= "From: Заказ обратного звонка <адрес_почты_на_хосте>\r\n"; // от кого письмо

// отправляем письмо
mail($mail_to, $subject, $message, $headers);
}
?>
