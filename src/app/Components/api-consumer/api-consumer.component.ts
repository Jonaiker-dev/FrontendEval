import { Component } from '@angular/core';
import { ApiconsumerService } from '../../services/apiconsumer.service';
import { Producto } from '../../interfaces/product';

@Component({
  selector: 'app-api-consumer',
  templateUrl: './api-consumer.component.html',
  styleUrl: './api-consumer.component.css'
})
export class ApiConsumerComponent {
  public datos:Producto[]=[]
 constructor(public as:ApiconsumerService){
  this.Listar()
 }
 
 Listar(){  
  this.as.ListProducts().subscribe((resolve)=>{
    resolve.map((data)=>{
      this.datos.push(data)
    })
  })
  
}

}
