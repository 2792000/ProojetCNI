<?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
	     $id_contratFrn = $_GET['id_contratFrn'] ; 
		$sql ="SELECT * FROM payment_cf LEFT JOIN contrat_fournisseur ON payment_cf.id_contratFrn = contrat_fournisseur.id_contratFrn
		LEFT JOIN fournisseur ON fournisseur.id_fournisseur = contrat_fournisseur.id_fournisseur 
		 WHERE payment_cf.id_contratFrn ='$id_contratFrn'" ;
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
 