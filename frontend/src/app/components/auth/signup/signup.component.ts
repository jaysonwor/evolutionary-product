import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/validators/confirmed';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
}) 
export class SignupComponent implements OnInit {

  form: any;
  isSubmitting: boolean = false;
  hide = true;

  constructor ( 
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      name: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')
    })
  }

  get f() { return this.form.controls; }

  signup() {
    console.log("SignupComponent.login")
    this.isSubmitting = true;
    console.log(this.form.value)
    //todo add api call
    // this.isSubmitting = false;
  }

}
