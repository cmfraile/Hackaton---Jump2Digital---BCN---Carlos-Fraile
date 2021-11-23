import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map , tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesRESTService {

  baseURL:string = 'https://restcountries.com/v3.1/';
  
  constructor( private _hc:HttpClient ){
    this._hc.get(`${this.baseURL}/all`).pipe(
      map((resp:any) => {
        let arraynuevo:any[] = [];
        for(let con of resp){
          arraynuevo.push({nombre : con.name.common , bandera : con.flags.svg})
        }
        return arraynuevo;
      })
    ).subscribe(console.log);
  }
}
