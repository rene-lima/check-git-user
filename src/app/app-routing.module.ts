import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuscaLoginComponent } from './busca-login/busca-login.component';

const routes: Routes = [
  { path: 'busca', component: BuscaLoginComponent },
  { path: '', redirectTo: '/busca', pathMatch: 'full' },
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
