<?php
include('../config.php');

		
		$sql =  "SELECT *
        FROM `contrat_client`
        ORDER BY `id_contratClient` DESC
        LIMIT 3" ;
		
        $result = mysqli_query($conn, $sql);
		if ($result->num_rows > 0) {	
			while($row = mysqli_fetch_assoc($result))
			$tab[] =$row; 
			echo (json_encode($tab)); 
		}else { 
			echo (json_encode([])); 
		}

    ?>