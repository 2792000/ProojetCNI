<?php
include('../config.php');

$postdata = file_get_contents("php://input");

    if (isset($postdata)) {

        $request = json_decode($postdata);
		$ref_contrat= $request->ref_contrat;
		$id_client=$request->id_client;
		$objet= $request->objet;
		$montant= $request->montant;
		$date_debut= $request->date_debut;
		$date_fin= $request->date_fin;
		$duree= $request->duree;
		$structure_technique= $request->structure_technique;
		$piece_joite=$request->piece_joite;
		$date_de_facturation=$request->date_de_facturation;
		$renouvele=$request->renouvele;
		if($renouvele==''){$ok=0;
		}
		else {$ok=1;}
		
		$sql =  "INSERT INTO `contrat_client`( `ref_contrat`, `id_client`, `objet`, `montant`, `duree`, `date_debut`, `date_fin`,structure_technique, `piece_jointe`, `renouvele`, `date_de_facturation`)
		VALUES ('$ref_contrat','$id_client','$objet','$montant','$duree','$date_debut','$date_fin','$structure_technique','$piece_joite','$ok','$date_de_facturation')";
        $result = mysqli_query($conn, $sql);
		    
			if ($result===true) {
			
					echo json_encode(array('RESPONSE'=>'add contrat  ok'));

	
				}
					else{
					echo json_encode(array("Erreur add contrat"));
  

				}
				

	}
	else {
		echo json_encode(array( 'RESPONSE'=>'Erreur Ajout ' )); 
	}
	
?>
