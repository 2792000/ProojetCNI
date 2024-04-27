<?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
		$id_contratClient=$request->id_contratClient;
		$ref_contrat=$request->ref_contrat;
		$id_client=$request->id_client;
		$montant=$request->montant;
		$objet=$request->objet;
		$duree=$request->duree;
		$renouvele=$request->renouvele;
		$date_debut=$request->date_debut;
		$date_fin=$request->date_fin;
		$structure_technique=$request->structure_technique;
		$piece_jointe=$request->piece_jointe;
		$date_de_facturation=$request->date_de_facturation;
		echo("$ref_contrat");
		echo("$id_contratClient");
		$sql =  " UPDATE `contrat_client` SET `ref_contrat`='$ref_contrat',`id_client`='$id_client',
		`objet`='$objet',`montant`='$montant',`duree`='$duree',`date_debut`='$date_debut',`date_fin`='$date_fin',
		`structure_technique`='$structure_technique',`piece_jointe`='$piece_jointe',`renouvele`='$renouvele',`date_de_facturation`='$date_de_facturation'
		 WHERE `id_contratClient`='$id_contratClient'" ; 
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
   