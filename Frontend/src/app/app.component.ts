import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Unity';

  constructor() {
    let buttons = document.getElementById('candidatos')
    buttons?.addEventListener("click", (e:Event) => this.checkButton())
  }
  
  public checkButton(){
    console.log('teste')
  }
}
