<?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
	     $id_contratClient = $_GET['id_contratClient'] ; 
		$sql ="SELECT * FROM payment LEFT JOIN contrat_client ON payment.id_contratClient = contrat_client.id_contratClient
		LEFT JOIN client ON client.id_client = contrat_client.id_client
		 WHERE payment.id_contratClient ='$id_contratClient'" ;
        $result = mysqli_query($conn, $sql);
		if ($result->num_rows > 0) {	
			while($row = mysqli_fetch_assoc($result))
			$tab[] =$row; 
			print(json_encode($tab)); 
		}else { 
			echo json_encode(array( 'RESPONSE'=>'Aucune tranche trouvee' )); 
		}
    }
    else {
		echo json_encode(array( 'RESPONSE'=>'Erreur reception parametres' ));  
    }
 
?> 
 