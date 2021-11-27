import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CountriesRESTService } from 'src/app/servicios/countries-rest.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-formcompra',
  templateUrl: './formcompra.component.html',
  styleUrls: ['./formcompra.component.sass']
})
export class FormcompraComponent implements OnInit {

  public forma:FormGroup;
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
      creditcard:[null,this.tarjeta]
    });
    this._cr.countryendpoint.pipe(tap(console.log)).subscribe(resp => this.countrydata = resp);
  }

  returnflag(pais:string):void{
    this.countrydata.forEach(x => {
      if(x.nombre == pais){this.bandera = x.bandera}
    });
  }

  checkform(){
    console.log(this.forma.controls);
  }

  ngOnInit(): void {
    console.log(this.forma.get('creditcard')?.valid);
  }

  tarjeta():ValidatorFn{
    return (control:AbstractControl):ValidationErrors | null => {
      if(this.forma.get('ncard')?.valid && this.forma.get('monthyearexp')?.valid && this.forma.get('secode')?.valid && this.forma.get('propietary')?.valid){ return null }else{return {tarjetamal:true}}
    }
  }

}

/*
valid: This property returns true if the element’s contents are valid and false otherwise.
invalid: This property returns true if the element’s contents are invalid and false otherwise.
pristine: This property returns true if the element’s contents have not been changed.
dirty: This property returns true if the element’s contents have been changed.
untouched: This property returns true if the user has not visited the element.
touched: This property returns true if the user has visited the element.
*/

/*
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
*/
