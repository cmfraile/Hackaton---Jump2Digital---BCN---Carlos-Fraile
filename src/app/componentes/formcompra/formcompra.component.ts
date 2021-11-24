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
  
  constructor( private _fb:FormBuilder , private _cr:CountriesRESTService ){
    this.forma = this._fb.group({
      email:[null,[]],
      ncard:[null,[]],
      monthyearexp:[null,[]],
      secode:[null,[]],
      propietary:[null,[]],
      country:[null,[]],
      zip:[null,[]],
    });
    this._cr.countryendpoint.pipe(tap(console.log)).subscribe(resp => this.countrydata = resp);
  }

  ngOnInit(): void {}

}
