<?php
    class candidato extends mysqli{
        public function inserir(){
            require_once "../db_connect.php";
            
            $this->cand_id = @ $_REQUEST['cand_id'];
            $this->cand_nome = @ $_REQUEST['cand_nome'];
            $this->cand_email = @ $_REQUEST['cand_email'];
            $this->cand_idade = @ $_REQUEST['cand_idade'];
            $this->cand_login = @ $_REQUEST['cand_login'];
            $this->cand_senha = @ $_REQUEST['cand_senha'];
            //$this->cand_status = @ $_REQUEST['cand_status'];
                        
            print_r($_POST);
            
            $sql = "INSERT INTO candidato (cand_id, cand_nome, cand_email, cand_idade, cand_login, cand_senha, cand_status)
             VALUES ('$this->cand_id', '$this->cand_nome', '$this->cand_email', '$this->cand_idade', '$this->cand_login', '$this->cand_senha', 'S')";

            if ($connect->query($sql) === TRUE){
                return mysqli_insert_id($connect);
                // return "WORK";
            }else{
                return $connect->connect_error;
                // return "ERROR";
            }

            echo $connect->query($sql);
            $connect -> close();
        }

        public function obter_candidato(){
            require_once "../db_connect.php";
            $this->cand_id = (@$_REQUEST['cand_id']);
            $sql = "SELECT * FROM candidato WHERE candidato.cand_id = '$this->cand_id' ORDER BY cand_id DESC";
            
            $out = $connect->query($sql);
            if ( $rs = $out ) {
                foreach ( $rs as $row ) {
                    $col = array();
                    foreach ( $row as $k=>$v ) {
                        $col[$k] = stripslashes($v);
                        
                    }
                    $rows[] = $col;
                }
                return $rows;
            }

            $connect->close();
        }
        
        public function listar_candidatos(){
            require_once "../db_connect.php";
            $sql = "SELECT * FROM candidato ORDER BY cand_id DESC";
            
            $out = $connect->query($sql);
            
            if ( $rs = $out ) {
                foreach ( $rs as $row ) {
                    $col = array();
                    foreach ( $row as $k=>$v ) {
                        $col[$k] = stripslashes($v);
                        
                    }
                    $rows[] = $col;
                }
                return $rows;
            }

            $connect->close();
        }
    }
?>