<?php
include('../config.php');
$postdata = file_get_contents("php://input");
if (isset($postdata)) {
    $mail =$_GET['mail'] ; 
    $string = "";
    $chaine = "0a1b2c3d4e5f6j7h8i9jklmnopqrstuvwxyz";
    srand((double)microtime()*1000000);
    for($i=0; $i<8; $i++) {
    $string .= $chaine[rand()%strlen($chaine)];
    }
    
   
	$sql =  " SELECT * FROM `utilisateur` WHERE `email`='$mail'" ;
		
        $result = mysqli_query($conn, $sql);
		if ($result->num_rows > 0) {	
			while($row = mysqli_fetch_assoc($result))
			$tab[0] =$row; 
			echo ($row);
			
			// `id_utilisateur`, `nom`, `prenom`, `login`, `pass_word`, `email`, `num_tel`, `role`
$iduser = $tab[0]["id_utilisateur"];
$nomuser = $tab[0]["nom"];
$prenomuser = $tab[0]["prenom"];
$roleuser = $tab[0]["role"];
$loginuser = $tab[0]["login"];
$mpduser = $tab[0]["pass_word"];
$email = $tab[0]["email"];

$sql =  "UPDATE `utilisateur` SET `pass_word`='$string' WHERE`email`='$email'"; 
        $result = mysqli_query($conn, $sql);
        if ($result===true) {
            $destinataire=$mail;
           
$expediteur ='mehdihassine23@gmail.com'; 
$headers='MIME-Version: 1.0' . "\n"; 
$headers .= 'From: "ERP Boulangerie & patesserie Sfar"<'.$expediteur.'>'."\n"; 
$headers.= 'Content-type: text/html; charset="uft-8"'."\n";
$headers.='Content-transfer-Encoding: 8bit';
$headers .= 'Reply-To: '.$expediteur."\n"; // Mail de reponse//

$headers .= 'Delivered-to: '.$destinataire."\n"; 
$message = '<head>
		<title>Internal_email-29</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<style type="text/css">
			* {
				-ms-text-size-adjust:100%;
				-webkit-text-size-adjust:none;
				-webkit-text-resize:100%;
				text-resize:100%;
			}
			a{
				outline:none;
				color:#40aceb;
				text-decoration:underline;
			}
			a:hover{text-decoration:none !important;}
			.nav a:hover{text-decoration:underline !important;}
			.title a:hover{text-decoration:underline !important;}
			.title-2 a:hover{text-decoration:underline !important;}
			.btn:hover{opacity:0.8;}
			.btn a:hover{text-decoration:none !important;}
			.btn{
				-webkit-transition:all 0.3s ease;
				-moz-transition:all 0.3s ease;
				-ms-transition:all 0.3s ease;
				transition:all 0.3s ease;
			}
			table td {border-collapse: collapse !important;}
			.ExternalClass, .ExternalClass a, .ExternalClass span, .ExternalClass b, .ExternalClass br, .ExternalClass p, .ExternalClass div{line-height:inherit;}
			@media only screen and (max-width:500px) {
				table[class="flexible"]{width:100% !important;}
				table[class="center"]{
					float:none !important;
					margin:0 auto !important;
				}
				*[class="hide"]{
					display:none !important;
					width:0 !important;
					height:0 !important;
					padding:0 !important;
					font-size:0 !important;
					line-height:0 !important;
				}
				td[class="img-flex"] img{
					width:100% !important;
					height:auto !important;
				}
				td[class="aligncenter"]{text-align:center !important;}
				th[class="flex"]{
					display:block !important;
					width:100% !important;
				}
				td[class="wrapper"]{padding:0 !important;}
				td[class="holder"]{padding:30px 15px 20px !important;}
				td[class="nav"]{
					padding:20px 0 0 !important;
					text-align:center !important;
				}
				td[class="h-auto"]{height:auto !important;}
				td[class="description"]{padding:30px 20px !important;}
				td[class="i-120"] img{
					width:120px !important;
					height:auto !important;
				}
				td[class="footer"]{padding:5px 20px 20px !important;}
				td[class="footer"] td[class="aligncenter"]{
					line-height:25px !important;
					padding:20px 0 0 !important;
				}
				tr[class="table-holder"]{
					display:table !important;
					width:100% !important;
				}
				th[class="thead"]{display:table-header-group !important; width:100% !important;}
				th[class="tfoot"]{display:table-footer-group !important; width:100% !important;}
			}
		</style>
	</head>
<table data-module="module-2" cellpadding="0" cellspacing="0">
						<tr>
							<td data-bgcolor="bg-module" bgcolor="#eaeced">
								<table class="flexible" width="600" align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">
									
									<tr>
										<td data-bgcolor="bg-block" class="holder" style="padding:58px 60px 52px;" bgcolor="#f9f9f9">
											<table width="100%" cellpadding="0" cellspacing="0">
												<tr>
													<td data-color="title" data-size="size title" data-min="25" data-max="45" data-link-color="link title color" data-link-style="text-decoration:none; color:#292c34;" class="title" align="center" style="font:20px/23px Arial, Helvetica, sans-serif; color:#292c34; padding:0 0 24px;">
													Recuperation Mot de Passe 
													</td>
												</tr>
												<tr>
													<td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;" align="center" style="font:bold 16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
												Cher Utilisateur '.$nomuser.'&nbsp;'.$prenomuser.' <br>
												Votre Mot de passe est: <b>'.$string.'<b>
							 
													</td>
												</tr>
												
											</table>
										</td>
									</tr>
									<tr><td height="28"></td></tr>
								</table>
							</td>
						</tr>
					</table>

';

if(mail($destinataire,"Recuperation mot de Passe",$message,$headers)){
    echo json_encode(array( 'RESPONSE'=>'Votre message a bien été envoyé' )); 
	echo $nvmdp;
	
}
else 
   

{
	echo json_encode(array( 'RESPONSE2'=>'Votre message n\'a pas pu être envoyé' )); 
}
}
else{
    echo json_encode(array( 'RESPONSE'=>'Erreur modification ' )); 
}

}else { 
    echo json_encode(array( 'RES'=>'Aucune email trouvee' )); 
}

}
else {
    echo json_encode(array( 'RES'=>'Erreur reception parametres' ));  
}
?>
