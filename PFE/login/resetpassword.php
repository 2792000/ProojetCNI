<?php
require '../PHPmailer/PHPMailer.php';
require '../PHPmailer/SMTP.php';
require '../PHPmailer/Exception.php';	
require  '../config.php';
//Define name spaces
use PHPMailer\PHPMailer\PHPMailer;
$postdata = file_get_contents("php://input");
    if (isset($postdata)) {

      
        $request = json_decode($postdata);
        $email = $request->email;
        $sql =  "SELECT * FROM `utilisateur` WHERE `email`='$email' ";
        $result = mysqli_query($conn, $sql);
		if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
		$id=$row["id_utilisateur"];
		$password =  $row["pass_word"];
		$nom=  $row["nom"];
		$prenom=  $row["prenom"];
		$role=  $row["role"];
	
//chaine aléatoire
function genererChaineAleatoire($longueur = 10)
{
 $caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 $longueurMax = strlen($caracteres);
 $chaineAleatoire = '';
 for ($i = 0; $i < $longueur; $i++)
 {
 $chaineAleatoire .= $caracteres[rand(0, $longueurMax - 1)];
 }
 return $chaineAleatoire;
}
$nwepass=genererChaineAleatoire(10);
$sql =  "UPDATE `utilisateur` SET `pass_word`='$nwepass' WHERE `id_utilisateur`='$id' ";
        $result1 = mysqli_query($conn, $sql);
//Create instance of PHPMailer
$mail = new PHPMailer();
//Set mailer to use smtp
$mail->SMTPDebug = 2;    
$mail->isSMTP();
//Define smtp host
//$mail->Host = 'smtp.zoho.in';  
$mail->Host = 'smtp.gmail.com';  
//Enable smtp authentication
$mail->SMTPAuth = true;
//Set smtp encryption type (ssl/tls)
$mail->SMTPSecure = "tls";
//Port to connect smtp
$mail->Port = 587;
//Set gmail username

$mail->Username = "mohamedhlel321@gmail.com";
$mail->Password = "tuhn vqrq veni rcqj";
//Email subject
$mail->Subject = "test";
//Set sender email
$mail->setFrom('oussamahassanisimplon@gmail.com',"Centre national de l'informatique");
//Enable HTML
$mail->isHTML(true);
//attachment
// $mail->addAttachment('img/attachment.png');
//Email body
$mail->AddAddress($email);
$mail->Subject ="Reinitialiser le mot de passe ";
$body = "<p>Bonjour <b>".$nom." ".$prenom."</b>. vous avez oublié le mot de passe de votre compte ".$role." sur le site  gestion des contrat <br>
Votre nouveau mot de passe est:  <b style='color:red;'>".$nwepass."</b></p> \n";
$mail->MsgHTML($body);
$mail->IsHTML(true);

//Finally send email
if ( $mail->send() ) {
    json_encode(array( 'RESPONSE'=>'Email envoyer' ));
}else{
    json_encode(array( 'RESPONSE'=>"Mailer Error: " . $mail->ErrorInfo ));;
}
}

    }

 //echo json_encode(array( 'RESPONSE'=>'Email envoyer' ))
//Closing smtp connection
// $mail->smtpClose();
// $mail->Port = 587;
// $mail->Host = "smtp.gmail.com"; // SMTP server
// $mail->Username = "oussamahassanisimplon@gmail.com"; // SMTP account username
// $mail->Password = "ou_2s_ma200"; // SMTP account password
// $mail->From = "oussamahassanisimplon@gmail.com";
// $mail->FromName = "Test";
// //Add recipient
// $mail->AddAddress("hassani20120@gmail.com"); // Receiving Mail ID, it can be either domain mail id (or ) any other mail id i.e., gmail id
// $mail->Subject ="PhpMailer script with basic smtp authentication";
// $mail->AltBody = " ";
// $mail->WordWrap = 80;
// $body = "test message";
// $mail->MsgHTML($body);
// $mail->IsHTML(true);
// if(!$mail->send())
// {
//     json_encode(array( 'RESPONSE'=>"Mailer Error: " . $mail->ErrorInfo ));

// }
// else
// {
//     json_encode(array( 'RESPONSE'=>'Email envoyer' ));
// }
?> 