<?php
class Login
{
    private $db;

    public function __construct()
    {
        $this->db = new Database;
    }

    // [1.1e]
    public function login($id, $password){
        $this->db->query('SELECT * FROM users WHERE id=:id and password=:password'); // gives an array of objects
        $this->db->bind(':id', $id);
        $this->db->bind(':password', $password);
        $row = $this->db->single();
        // $results = $this->db->resultSet(); // used to return more than 1 row
        // return $results;
        return $row;
    }







}
