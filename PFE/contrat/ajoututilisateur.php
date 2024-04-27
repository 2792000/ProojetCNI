<?php
include('../config.php');

$postdata = file_get_contents("php://input"); 

    if (isset($postdata)) {

		$request = json_decode($postdata);

		$id='';
		$prenom=$request->prenom;
		$num_tel=$request->num_tel;
		$role=$request->role;
		$login=$request->login;
		$password=$request->password;
		$email=$request->email;
		$date=date("Y-m-d");
		$nom=$request->nom;

			$insertcompte =  "INSERT INTO `utilisateur`( `nom`, `prenom`, `login`, `pass_word`, `email`, `num_tel`, `role`, `date_ouverture`) VALUES 
			('$nom','$prenom','$login','$password','$email','$num_tel','$role','$date')" ; 
			$result2 = mysqli_query($conn, $insertcompte);
			if ($result2===true) {
			
					echo json_encode(array("add utilisateur  ok"));
				}
					else{
					echo json_encode(array("Erreur add utilisateur"));

				}
	}
	else {
		echo json_encode(array( 'RESPONSE'=>'Erreur Ajout ' )); 
	}
?>













	











		
	
  