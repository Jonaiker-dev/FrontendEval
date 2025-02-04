import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiconsumerService } from '../../services/apiconsumer.service';

//Validator personalizado
export function menorCeroValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valor = control.value;

    if (valor !== null && valor !== undefined && +valor <= 0) {
      return { 'menorCero': true }; // Retorna true si el número es menor a 0
    }

    return null;
  };
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  
  constructor(public fg:FormBuilder,private toast:ToastrService,public as:ApiconsumerService){
    
  }
  FormProd:FormGroup= this.fg.group({
    'nombre':[' ',[Validators.required,Validators.maxLength(50)]],
    'precio':[1,[Validators.required,menorCeroValidator()]]
  })


  SendData(){
    this.toast.success('Producto Agregado','Productos')
    console.table(this.FormProd.value);
  }

  AddProduct(){
    this.as.AddProduct(this.FormProd.value)
    this.as.ListProducts();
  }
  
}
