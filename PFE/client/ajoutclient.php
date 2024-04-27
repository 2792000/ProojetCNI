<?php
include('../config.php');

$postdata = file_get_contents("php://input"); 

    if (isset($postdata)) {

		$request = json_decode($postdata);

		$id='';
		$adresse=$request->adresse;
		$num_tel=$request->num_tel;
		$email=$request->email;
		$nom=$request->nom;
		$fax=$request->fax;		
		$type=$request->type;
		
		
		
	
	
			$insertcompte =  "INSERT INTO `client`(`nom`, `adresse`, `fax`, `email`, `num_tel`, `type`)
			VALUES ('$nom','$adresse','$fax','$email','$num_tel','$type')" ; 
			$result2 = mysqli_query($conn, $insertcompte);

    
    
			if ($result2===true) {
	
					echo json_encode(array("add client ok"));

	
				}
					else{
					echo json_encode(array("Erreur add client"));
  

				}
				
			
			


	}
	else {
		echo json_encode(array( 'RESPONSE'=>'Erreur Ajout ' )); 
	}
	

?>













	











		
	
  
