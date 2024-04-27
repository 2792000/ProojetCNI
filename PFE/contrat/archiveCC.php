<?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
		
		$sql =  "UPDATE `contrat_client` cc SET `archive`=1 WHERE `date_fin`<DATE( NOW() ) and `montant`<=(select SUM(mant_paym) from payment p WHERE p.`id_contratClient`=cc.`id_contratClient` )" ;
		
       $result = mysqli_query($conn, $sql);
		if ($result===true) {	
	         echo json_encode(array( 'RESPONSE'=> 'Contrat Client modifiee' )); 




		}else { 
			echo json_encode(array( 'RESPONSE'=>'Erreur modification' )); 
		}
    }
    else {
		echo json_encode(array( 'RESPONSE'=>'Erreur reception parametres' ));  
    }
 
?> 
 