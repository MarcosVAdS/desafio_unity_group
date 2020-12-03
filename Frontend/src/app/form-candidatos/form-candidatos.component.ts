import { Component, OnInit } from '@angular/core';
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosError } from 'axios';

@Component({
  selector: 'app-form-candidatos',
  templateUrl: './form-candidatos.component.html',
  styleUrls: ['./form-candidatos.component.css']
})

export class FormCandidatosComponent implements OnInit {

  constructor() { 

  }

  onSubmit(dataForm: any) {
    
    var data = $('#candidatoForm').serializeArray()
    console.log(data)

    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/Api/controllers/inserirCandidato.php',
      data: data,
      cache: false,
      contentType: false,
      success: function(response){
        console.log(response)
      }
    })

    /*
    axios({
      method: 'POST',
      url: 'http://localhost:8080/Api/controllers/inserirCandidato.php',
      data: dataForm
    }).then(function (response) {
      console.log(dataForm)
      console.log(response)
    }).catch(function (error){
      alert(error)
    })
    */
  }

  ngOnInit(){

  }
}
