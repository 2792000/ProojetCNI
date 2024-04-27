<?php
include('../config.php');

$postdata = file_get_contents("php://input");

    if (isset($postdata)) {

        $request = json_decode($postdata);
		$ref_contrat= $request->ref_contrat;
		$id_fournisseur=$request->id_fournisseur;
		$ref_marche= $request->ref_marche;
		$objet= $request->objet;
		$montant= $request->montant;
		$date_debut= $request->date_debut;
		$date_fin= $request->date_fin;
		$duree= $request->duree;
		$mise_en_demeure= $request->mise_en_demeure;
		$structure_technique= $request->structure_technique;
		$date_de_preavis=$request->date_de_preavis;
		$piece_joite=$request->piece_joite;
		$date_de_facturation=$request->date_de_facturation;
		
		

		
		
		$sql =  "INSERT INTO `contrat_fournisseur`(`ref_contrat`, `id_fournisseur`, `ref_marche`, `objet`
		, `montant`, `duree`, `date_debut`, `date_fin`, `mise_en_demeure`,`structure_technique`, `piece_joite`,
		 `date_de_preavis`, `date_de_facturation`) VALUES ('$ref_contrat','$id_fournisseur','$ref_marche','$objet','$montant','$duree','$date_debut'
		,'$date_fin','$mise_en_demeure','$structure_technique','$piece_joite','$date_de_preavis','$date_de_facturation')";
        $result = mysqli_query($conn, $sql);
		    
			if ($result===true) {
			
					echo json_encode(array('RESPONSE'=>'add contart  ok'));

	
				}
					else{
					echo json_encode(array("Erreur add contrat"));
  

				}
				

	}
	else {
		echo json_encode(array( 'RESPONSE'=>'Erreur Ajout ' )); 
	}
	
?>
