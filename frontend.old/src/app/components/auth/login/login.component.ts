import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any;
  isSubmitting: boolean = false;

  constructor(
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  get f() { return this.form.controls; }

  login() {
    console.log("LoginComponent.login")
    this.isSubmitting = true;
    //todo add api call
    // this.isSubmitting = false;
  }


}
