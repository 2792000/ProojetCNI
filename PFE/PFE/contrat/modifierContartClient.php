<?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
		$id_contratClient=$request->id_contratClient;
		$ref_contrat=$request->ref_contrat;
		$ref_marche=$request->ref_marche;
		$id_client=$request->id_client;
		$montant=$request->montant;
		$objet=$request->objet;
		$duree=$request->duree;
		$renouvele=$request->renouvele;
		$date_debut=$request->date_debut;
		$date_fin=$request->date_fin;
		$date_de_preavis=$request->date_de_preavis;
		$structure_technique=$request->structure_technique;
		$mise_en_demeure=$request->mise_en_demeure;
		$piece_jointe=$request->piece_jointe;
		$date_de_facturation=$request->date_de_facturation;

		echo($ref_contrat);
				echo($renouvele);
		$sql =  " UPDATE `contrat_client` SET `id_contratClient`='$id_contratClient',`ref_contrat`='$ref_contrat',`id_client`='$id_client',`ref_marche`='$ref_marche',
		`objet`='$objet',`montant`='$montant',`duree`='$duree',`date_debut`='$date_debut',`date_fin`='$date_fin',`mise_en_demeure`='$mise_en_demeure',
		`structure_technique`='$structure_technique',`piece_jointe`='$piece_jointe',`renouvele`='$renouvele',`date_de_preavis`='$date_de_preavis',`date_de_facturation`='$date_de_facturation'
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
   