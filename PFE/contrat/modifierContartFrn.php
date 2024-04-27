<?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
		$id_contratFrn=$request->id_contratFrn;
		$ref_contrat=$request->ref_contrat;
		$ref_marche=$request->ref_marche;
		$id_fournisseur=$request->id_fournisseur;
		$montant=$request->montant;
		$objet=$request->objet;
		$duree=$request->duree;
		$date_debut=$request->date_debut;
		$date_fin=$request->date_fin;
		$date_de_preavis=$request->date_de_preavis;
		$structure_technique=$request->structure_technique;
		$mise_en_demeure=$request->mise_en_demeure;
		$piece_joite=$request->piece_joite;
		$date_de_facturation=$request->date_de_facturation;


		$sql =  " UPDATE `contrat_fournisseur` SET `id_contratFrn`='$id_contratFrn',`ref_contrat`='$ref_contrat',`id_fournisseur`='$id_fournisseur',`ref_marche`='$ref_marche',
		`objet`='$objet',`montant`='$montant',`duree`='$duree',`date_debut`='$date_debut',`date_fin`='$date_fin',`mise_en_demeure`='$mise_en_demeure',
		`structure_technique`='$structure_technique',`piece_joite`='$piece_joite',`date_de_preavis`='$date_de_preavis',`date_de_facturation`='$date_de_facturation'
		 WHERE `id_contratFrn`='$id_contratFrn'" ; 
        $result = mysqli_query($conn, $sql);
		if ($result===true) {	
	         echo json_encode(array( 'RESPONSE'=> 'Contrat fournisseur modifiee' )); 




		}else { 
			echo json_encode(array( 'RESPONSE'=>'Erreur modification' )); 
		}
    }
    else {
		echo json_encode(array( 'RESPONSE'=>'Erreur reception parametres' ));  
    }
 
?> 
   