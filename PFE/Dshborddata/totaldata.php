<?php
include('../config.php');

$sql =  "SELECT SUM(mant_paym) FROM payment" ;
		
$result = mysqli_query($conn, $sql);
$sumtotal  = mysqli_fetch_assoc($result);

		$sql =  "SELECT COUNT(*) FROM contrat_client" ;
		
        $result = mysqli_query($conn, $sql);
        $totalcontra  = mysqli_fetch_assoc($result);


        $sql =  "SELECT COUNT(*) FROM utilisateur" ;
		
        $result = mysqli_query($conn, $sql);
			$totaluser =  mysqli_fetch_assoc($result);
            $sql5 =  "SELECT COUNT( id_contratClient )  FROM `contrat_client`  WHERE date_de_facturation    BETWEEN '2022-03-01' AND '2022-03-31' " ;
            $sql4 =  "SELECT COUNT( id_contratClient ) FROM `contrat_client`  WHERE date_de_facturation    BETWEEN '2022-04-01' AND '2022-04-31' " ;

        $sql1 =  "SELECT COUNT( id_contratClient )
        FROM `contrat_client`
        WHERE date_de_facturation
        BETWEEN '2022-05-01'
        AND '2022-05-31' " ;
        $sql2 =  "SELECT COUNT( id_contratClient ) FROM `contrat_client`  WHERE date_de_facturation    BETWEEN '2022-06-01' AND '2022-06-31' " ;
        $sql3 =  "SELECT COUNT( id_contratClient ) FROM `contrat_client`  WHERE date_de_facturation    BETWEEN '2022-07-01' AND '2022-07-31' " ;

       
        $query1 = mysqli_query($conn, $sql1);
        $query2 = mysqli_query($conn, $sql2);
        $query3 = mysqli_query($conn, $sql3);
        $query4= mysqli_query($conn, $sql4);
        $query5= mysqli_query($conn, $sql5);
        $result1f  = mysqli_fetch_assoc($query1);
        $result2f = mysqli_fetch_assoc($query2);
        $result3f = mysqli_fetch_assoc($query3);
        $result4f = mysqli_fetch_assoc($query4);
        $result5f = mysqli_fetch_assoc($query5);



        
        

        $sql5 =  "SELECT SUM( mant_paym )  FROM `payment`  WHERE date_paym    BETWEEN '2022-03-01' AND '2022-03-31' " ;
        $sql4 =  "SELECT SUM( mant_paym ) FROM `payment`  WHERE date_paym    BETWEEN '2022-04-01' AND '2022-04-31' " ;

    $sql1 =  "SELECT SUM( mant_paym )
    FROM `payment`
    WHERE date_paym
    BETWEEN '2022-05-01'
    AND '2022-05-31' " ;
    $sql2 =  "SELECT SUM( mant_paym ) FROM `payment`  WHERE date_paym    BETWEEN '2022-06-01' AND '2022-06-31' " ;
    $sql3 =  "SELECT SUM( mant_paym ) FROM `payment`  WHERE date_paym    BETWEEN '2022-07-01' AND '2022-07-31' " ;

   
    $query1 = mysqli_query($conn, $sql1);
    $query2 = mysqli_query($conn, $sql2);
    $query3 = mysqli_query($conn, $sql3);
    $query4= mysqli_query($conn, $sql4);
    $query5= mysqli_query($conn, $sql5);
    $result1  = mysqli_fetch_assoc($query1);
    $result2 = mysqli_fetch_assoc($query2);
    $result3 = mysqli_fetch_assoc($query3);
    $result4 = mysqli_fetch_assoc($query4);
    $result5 = mysqli_fetch_assoc($query5);
    if($result5['SUM( mant_paym )'])
    $result51 = $result5['SUM( mant_paym )'];
    else
    $result51=0;
    if($result4['SUM( mant_paym )'])
    $result41 = $result4['SUM( mant_paym )'];
    else
    $result41=0;
    if($result1['SUM( mant_paym )'])
    $result11 = $result1['SUM( mant_paym )'];
    else
    $result11=0;
    if($result2['SUM( mant_paym )'])
    $result21 = $result2['SUM( mant_paym )'];
    else
    $result21=0;
    if($result3['SUM( mant_paym )'])
    $result31 = $result3['SUM( mant_paym )'];
    else
    $result31=0;
        echo json_encode(array(
             'line' => [$result51,$result41,$result11,$result21,$result31 ],
            'bare'=>[$result5f['COUNT( id_contratClient )'],$result4f['COUNT( id_contratClient )'],$result1f['COUNT( id_contratClient )'],$result2f['COUNT( id_contratClient )'],$result3f['COUNT( id_contratClient )']]  , 'totalcontart'=>$totalcontra['COUNT(*)'] , 'totaluser'=>$totaluser['COUNT(*)'] , "sumtotal" =>$sumtotal['SUM(mant_paym)']
          ));  
		
  
    ?>