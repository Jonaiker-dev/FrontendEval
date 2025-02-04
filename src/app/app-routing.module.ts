import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { ApiConsumerComponent } from './Components/api-consumer/api-consumer.component';
import { InteractiveComponent } from './Components/interactive/interactive.component';

const routes: Routes = [{
path:'',
component: ReactiveFormComponent
},{
path:'formulario',
component:ReactiveFormComponent
},{
path:'productos',
component:ApiConsumerComponent
},{
path:'interactivo',
component:InteractiveComponent
},{
  path:'**',
  redirectTo: '',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
