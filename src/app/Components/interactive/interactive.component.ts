import { Component } from '@angular/core';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrl: './interactive.component.css'
})
export class InteractiveComponent {
  public color:boolean=false

  ChangeColor(){
    this.color= !this.color
  }
}
