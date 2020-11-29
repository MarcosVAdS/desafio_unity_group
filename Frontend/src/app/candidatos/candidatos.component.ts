import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    axios({
      method: 'GET',
      url: 'http://localhost:8080/Api/controllers/listarCandidatos.php',
    }).then(function (response) {
      console.log(response.data)
    }).catch(function (error){
      alert(error)
    })
  }

}
