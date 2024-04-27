 <?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
		$date = date("Y-m-d");
		
		$sql =  " UPDATE `contrat_fournisseur` SET `date_fin`=`date_fin`+(`date_fin`-`date_debut`),`date_debut`='2022/05/07' 
		WHERE `renouvele`='1' AND YEAR(`date_fin`) <= YEAR('2022/05/07') AND ( MONTH(`date_fin`)-MONTH('2022/05/07'))<=0
			" ;
		
        $result = mysqli_query($conn, $sql);
		if ($result->num_rows > 0) {	
			while($row = mysqli_fetch_assoc($result))
			$tab[] =$row; 
			print(json_encode($tab)); 
		}else { 
			echo json_encode(array( 'RESPONSE'=>'Aucune contrat renouvler atomatique' )); 
		}
    }
    else {
		echo json_encode(array( 'RESPONSE'=>'Erreur reception parametres' ));  
    }
 
?> 