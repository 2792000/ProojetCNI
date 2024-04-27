<?php
include('../config.php');

$postdata = file_get_contents("php://input");

    if (isset($postdata)) {

        $request = json_decode($postdata);

	
		 $email = $request->email;
		 $password = $request->password;

		$sql =  "SELECT * FROM `utilisateur` WHERE `login`='$email'AND`pass_word`='$password' ";
        $result = mysqli_query($conn, $sql);
		if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
		print( json_encode($row)); 
		
		}
		else {
			echo json_encode(array( 'REPONSE'=>'Erreur login : verifier vos information !!'));
		}





    }

    else {
		echo ('Erreur login parametres');
    }

?>
