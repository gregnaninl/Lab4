import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ImagenComponent } from './componentes/imagen/imagen.component';
import {Routes,RouterModule} from '@angular/router';



const miRuteo = [

  { path:'juego', component:  ImagenComponent },
 

];


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ImagenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(miRuteo)
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
