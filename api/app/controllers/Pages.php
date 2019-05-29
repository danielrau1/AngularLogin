<?php

class Pages extends Controller
{


    public function __construct()
    {

        $this->loginModel = $this->model('Login');
    }



    public function index(){

    }

    // [1.1d]
public function login() {

    $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
    $id = trim($_POST['id']);
    $password = trim($_POST['password']);
    echo json_encode($this->loginModel->login($id, $password));




}


}
