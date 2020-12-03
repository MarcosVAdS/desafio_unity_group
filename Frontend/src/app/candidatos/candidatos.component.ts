import { Component, Renderer2, ViewChild, ElementRef, OnInit } from '@angular/core';
import axios from 'axios';
import { DataTablesModule } from 'angular-datatables'; 

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var datatable = $('#datatable').DataTable( {
      ajax: {
          url: 'http://localhost:8080/Api/controllers/listarCandidatos.php',
          dataSrc: function (response) { 
              console.log(response)
              return response;
          },
          type: "get",
      },
      columns: [
          { data: "cand_nome", className: "details-control" },
          { data: "cand_email", className: "details-control" },
          { data: "cand_login", className: "details-constrol"}
      ],
      responsive: true,
      retrieve: true,
      paging: true
  });
  /*
    $.ajax({
      method: 'get',
      url: 'http://localhost:8080/Api/controllers/listarCandidatos.php',
      cache: false,
      success: function(response){
        console.log(response)
      }
    })
    */
    /*
    axios({
      method: 'GET',
      url: 'http://localhost:8080/Api/controllers/listarCandidatos.php',
    }).then(function (response) {
      response.data.forEach((element: any) => {
        console.log(element)
      });
    }).catch(function (error){
      alert(error)
    })
    */
  }

}
