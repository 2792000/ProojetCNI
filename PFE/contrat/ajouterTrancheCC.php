<?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
		$id_contratClient = $_GET['id_contratClient'] ; 
		$mant_paym=$request->mant_paym;
		$type_paym=$request->type_paym;
		$date_paym=$request->date_paym;


		$sql =  " INSERT INTO `payment`( `id_contratClient`, `mant_paym`, `type_paym`, `date_paym`) VALUES ('$id_contratClient','$mant_paym','$type_paym','$date_paym')" ; 
        $result = mysqli_query($conn, $sql);
		if ($result===true) {	
	         echo json_encode(array( 'RESPONSE'=> 'tranche ajouter' )); 




		}else { 
			echo json_encode(array( 'RESPONSE'=>'Erreur ' )); 
		}
    }
    else {
		echo json_encode(array( 'RESPONSE'=>'Erreur reception parametres' ));  
    }
 
?> 
   