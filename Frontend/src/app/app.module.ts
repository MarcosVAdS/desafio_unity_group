import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { FormCandidatosComponent } from './form-candidatos/form-candidatos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { DataTablesModule } from 'angular-datatables'; 

 

@NgModule({
  declarations: [
    AppComponent,
    CandidatosComponent,
    FormCandidatosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'candidatos', component: CandidatosComponent},
      {path: 'cadastro', component: FormCandidatosComponent},
      {path: '', redirectTo: '/candidatos', pathMatch: 'full'}
    ]),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule, 
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
