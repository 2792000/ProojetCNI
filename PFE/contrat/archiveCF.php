<?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
		
		$sql =  "UPDATE `contrat_fournisseur` cf SET `archive`=1 WHERE cf.`date_fin`<DATE( NOW() ) and `montant`<=(
		select SUM(mant_paym) from payment_cf p WHERE p.`id_contratFrn`=cf.`id_contratFrn`)" ;
		
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
 