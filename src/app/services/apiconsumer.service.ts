import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/product';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiconsumerService {

  public Api:string='https://localhost:7190/api/Productos'
  constructor(public http:HttpClient,private toast:ToastrService) { }

  ListProducts(){
    return this.http.get<Producto[]>(this.Api)
  }

  AddProduct(prod:Partial<Producto>){
    this.http.post<Producto>(this.Api,prod).subscribe({
      next:()=>{
        this.toast.success('Producto Agregado','Productos')
      },
      error:()=>{
        this.toast.error('Fallo en Agregar Producto','Error')
      }
    },)
  }
}
