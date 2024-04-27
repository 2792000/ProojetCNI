<?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
		$idcpt = $_GET['idfr']; 
		$sql="SELECT * FROM `fournisseur` WHERE id_fournisseur=$idfr"
        $result = mysqli_query($conn, $sql);
		if ($result===true) {	
			echo json_encode(array( 'RESPONSE'=>' suppression avec succes' )); 
		}else { 
			echo json_encode(array( 'RESPONSE'=>'Erreur suppression' )); 
		}
		$prenom=$request->prenom;
		$adresse=$request->adresse;
		$num_tel=$request->num_tel;
		$email=$request->email;
		$nom=$request->nom;
		$cin=$request->cin;
		$sql =  " UPDATE `fournisseur` SET `nom`=nom,`prenom`=prenom,`adresse`=adresse
		         ,`cin`=cin,`email`=email,`num_tel`=num_tel WHERE id_fournisseur=$idfr " ; 
		$result = mysqli_query($conn, $sql);
		if ($result===true) {	
			echo json_encode(array( 'RESPONSE'=>' Modification avec succes' )); 
		}else { 
			echo json_encode(array( 'RESPONSE'=>'Erreur de modification' )); 
		}
    }
    else {
		echo json_encode(array( 'RESPONSE'=>'Erreur reception parametres' ));  
    }
 
?> 
 