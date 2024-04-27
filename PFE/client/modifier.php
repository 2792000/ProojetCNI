<?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
	
		$id=$request->id;
		$nom=$request->nom; 
		$fax=$request->fax;
		$num_tel=$request->num_tel;
		$email=$request->email; 
        $adresse=$request->adresse; 
		$type=$request->type; 
		$sql =  " UPDATE `client` SET`nom`='$nom',`adresse`='$adresse'
		          ,`fax`='$fax',`email`='$email',`num_tel`='$num_tel',`type`='$type' WHERE `id_client`='$id' " ; 
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
   