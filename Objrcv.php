<?php
if(isset($_POST)){
        $data = file_get_contents("php://input");
        $dst = json_decode($data, true); // return a php an
        echo $dst["distanceinkms"];
        }
        ?>