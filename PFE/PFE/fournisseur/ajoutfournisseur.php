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
		
		
	
	
			$insertcompte =  "INSERT INTO `fournisseur`(`nom`, `adresse`, `fax`, `email`, `num_tel`) VALUES 
			('$nom','$adresse','$fax','$email','$num_tel')" ; 
			$result2 = mysqli_query($conn, $insertcompte);
		
    
    
			if ($result2===true) {
	
					echo json_encode(array("add fournisseur ok"));

	
				}
					else{
					echo json_encode(array("Erreur add fournisseur"));
  

				}
				
			
			


	}
	else {
		echo json_encode(array( 'RESPONSE'=>'Erreur Ajout ' )); 
	}
	

?>













	











		
	
  
