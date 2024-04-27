<?php
include('../config.php');

		
		$sql =  "select * from client ORDER BY id_client DESC LIMIT 3" ;
		
        $result = mysqli_query($conn, $sql);
		if ($result->num_rows > 0) {	
			while($row = mysqli_fetch_assoc($result))
			$tab[] =$row; 
			print(json_encode($tab)); 
		}else { 
			echo json_encode(array( 'RESPONSE'=>'Aucune client trouvee' )); 
		}

    ?>