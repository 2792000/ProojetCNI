 <?php
include('../config.php');
$postdata = file_get_contents("php://input"); 
    if (isset($postdata)) {
        $request = json_decode($postdata);
		$date = date("Y-m-d");
		
		$sql =  "  select * from contrat_client cc,client c WHERE cc.id_client=c.id_client AND YEAR(date_fin) <= YEAR('$date') AND ( MONTH(cc.date_fin)-MONTH('$date'))<= 3
		and cc.supprimer=0 and cc.archive='0'" ;
		
        $result = mysqli_query($conn, $sql);
		if ($result->num_rows > 0) {	
			while($row = mysqli_fetch_assoc($result))
			$tab[] =$row; 
			print(json_encode($tab)); 
		}else { 
			echo json_encode(array( 'RESPONSE'=>'Aucune contrat client trouvee' )); 
		}
    }
    else {
		echo json_encode(array( 'RESPONSE'=>'Erreur reception parametres' ));  
    }
 
?> 