import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpolyeComponent } from './add-empolye/add-empolye.component';
import { EmpolyeListComponent } from './empolye-list/empolye-list.component';
import { LoginempolyeComponent } from './loginempolye/loginempolye.component';
import { UapdetempolyeComponent } from './uapdetempolye/uapdetempolye.component';

const routes: Routes = [
  { path: 'empolye-list', component: EmpolyeListComponent },
  { path: 'add-empolye', component: AddEmpolyeComponent },
  { path: 'uapdetempolye/:id', component: UapdetempolyeComponent },
  { path: 'logininempolye', component: LoginempolyeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
