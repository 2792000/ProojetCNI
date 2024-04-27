<?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
	
		$id_utilisateur=$request->id_utilisateur;
		$nom=$request->nom;
		$prenom=$request->prenom; 
		$login=$request->login;
		$pass_word=$request->pass_word;		 
		$email=$request->email;
		$num_tel=$request->num_tel;
		echo($id_utilisateur);
		echo($nom);
		echo($prenom);
		echo($email);
		echo($login);
		echo($pass_word);
		
		$sql ="UPDATE `utilisateur` SET `nom`='$nom',`prenom`='$prenom',`login`='$login',`pass_word`='$pass_word',`email`='$email',`num_tel`='$num_tel',`num_tel`='$num_tel' WHERE `id_utilisateur`='$id_utilisateur'"; 
        $result = mysqli_query($conn, $sql);
		if ($result===true) {	
	         echo json_encode(array( 'RESPONSE'=> 'modifiee' )); 




		}else { 
			echo json_encode(array( 'RESPONSE'=>'Erreur modification' )); 
		}
    }
    else {
		echo json_encode(array( 'RESPONSE'=>'Erreur reception parametres' ));  
    }
 
?> 
   