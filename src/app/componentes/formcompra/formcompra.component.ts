import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcompra',
  templateUrl: './formcompra.component.html',
  styleUrls: ['./formcompra.component.sass']
})
export class FormcompraComponent implements OnInit {

  forma!:FormGroup;
  
  constructor( private _fb:FormBuilder ){
    /*
    this.forma = this._fb.group({
      email:[null,Validators.required,Validators.email],
      bank : this._fb.group({
        ncard:[Number,[Validators.required]],
        monthyearexp:[Number,[Validators.required]],
        secode:[Number,[Validators.required]],
        propietary:[null,[Validators.required]]
      }),
      country:[null,[Validators.required]],
      zip:[Number,[Validators.required]],
    })
    */
    this.forma = this._fb.group({
      email:[null,[]],
      ncard:[null,[]],
      monthyearexp:[null,[]],
      secode:[null,[]],
      propietary:[null,[]],
      country:[null,[]],
      zip:[null,[]],
    })
  }
  
  ngOnInit(): void {}

}
