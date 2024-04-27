 <?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
		$date = date("Y-m-d");
		
		$sql =  "  select * from contrat_fournisseur cf,fournisseur f WHERE cf.id_fournisseur=f.id_fournisseur AND YEAR(cf.date_fin) <= YEAR('$date') AND ( MONTH(cf.date_fin)-MONTH('$date'))<=3
			" ;
		
        $result = mysqli_query($conn, $sql);
		if ($result->num_rows > 0) {	
			while($row = mysqli_fetch_assoc($result))
			$tab[] =$row; 
			print(json_encode($tab)); 
		}else { 
			echo json_encode(array( 'RESPONSE'=>'Aucune contrat fournisseur trouvee' )); 
		}
    }
    else {
		echo json_encode(array( 'RESPONSE'=>'Erreur reception parametres' ));  
    }
 
?> 