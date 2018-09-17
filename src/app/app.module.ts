import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BuscaLoginService} from './busca-login/busca-login.service';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BuscaLoginComponent } from './busca-login/busca-login.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import { ElementosBuscaComponent } from './elementos-busca/elementos-busca.component';
import { CardUserComponent } from './card-user/card-user.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscaLoginComponent,
    ElementosBuscaComponent,
    CardUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [BuscaLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
