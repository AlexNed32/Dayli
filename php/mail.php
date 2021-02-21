<?php

    $data = file_get_contents('php://input');
    $data = json_decode($data, true);
    var_dump($data);

// //Сообщение
$message .='Email: '.$data['email']."\n";

$to = 'nedelkov.a.v@gmail.com';

// $data['email'].','.
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

// //Отправляем
$mail = mail($to, 'DailyApp', $message, implode("\r\n", $headers));
if($mail){
    echo 'yes';
} else {
    echo 'no';
}

?>