<?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
		$idcl = $_GET['idcl']; 
		//$sql =  "  DELETE FROM client where id_client = '$idcl'   " ; 
		$sql =  " UPDATE `client` SET `supprimer`='1' WHERE `id_client`='$idcl'";
        $result = mysqli_query($conn, $sql);
		if ($result===true) {	
			echo json_encode(array( 'RESPONSE'=>' suppression avec succes' )); 
		}else { 
			echo json_encode(array( 'RESPONSE'=>'Erreur suppression' )); 
		}
    }
    else {
		echo json_encode(array( 'RESPONSE'=>'Erreur reception parametres' ));  
    }
 
?> 
 