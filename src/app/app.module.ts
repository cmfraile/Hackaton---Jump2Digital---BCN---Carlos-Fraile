import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { FormcompraComponent } from './componentes/formcompra/formcompra.component';

const routes: Routes = [
  {path:"",component:AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    FormcompraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
