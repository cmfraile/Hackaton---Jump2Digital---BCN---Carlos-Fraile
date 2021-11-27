import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesRESTService } from 'src/app/servicios/countries-rest.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-formcompra',
  templateUrl: './formcompra.component.html',
  styleUrls: ['./formcompra.component.sass']
})
export class FormcompraComponent implements OnInit {

  forma!:FormGroup;
  countrydata!:any[];
  bandera!:string;
  primererror = false
  
  constructor( private _fb:FormBuilder , private _cr:CountriesRESTService ){
    this.forma = this._fb.group({
      email:[null,[Validators.email,Validators.required]],
      ncard:[null,[Validators.minLength(16),Validators.maxLength(16)]],
      monthyearexp:[null,[Validators.minLength(4),Validators.maxLength(4),Validators.required]],
      secode:[null,[Validators.minLength(3),Validators.maxLength(3),Validators.required]],
      propietary:[null,[Validators.minLength(5),Validators.required]],
      country:[null,[Validators.required]],
      zip:[null,[Validators.minLength(5),Validators.maxLength(5),Validators.required]],
    });
    this._cr.countryendpoint.pipe(tap(console.log)).subscribe(resp => this.countrydata = resp);
  }

  returnflag(pais:string):void{
    this.countrydata.forEach(x => {
      if(x.nombre == pais){this.bandera = x.bandera}
    });
  }

  checkform(){
    console.log(this.forma,this.forma.valid);
  }

  ngOnInit(): void {}

}
