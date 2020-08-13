import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-from',
  templateUrl: './registration-from.component.html',
  styleUrls: ['./registration-from.component.scss']
})
export class RegistrationFromComponent implements OnInit {
    public nameGroup = new FormGroup ({
      email : new FormControl ('',[Validators.required, Validators.email]),
      fullNameControl : new FormControl (),
      userNameControl : new FormControl (),
      password : new FormControl (),
    });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit (){
    console.log (this.nameGroup.value);
  }

  hide = true;
}

