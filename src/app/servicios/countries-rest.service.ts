import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesRESTService {

  baseURL:string = 'https://restcountries.com/v3.1/';

  countryendpoint = this._hc.get(`${this.baseURL}/all`).pipe(
    map((resp:any) => {
      let arraynuevo:any[] = [];
      for(let con of resp){
        arraynuevo.push({nombre : con.name.common , bandera : con.flags.svg})
      };
      arraynuevo.sort((a:any,b:any) => {if(a.nombre < b.nombre){return -1}else{return 1}});
      return arraynuevo;
    })
  )
  
  constructor( private _hc:HttpClient ){}

}
