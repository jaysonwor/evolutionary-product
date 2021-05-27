import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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
      email: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    })
  }

  get f() { return this.form.controls; }

  signup() {
    console.log("SignupComponent.login")
    this.isSubmitting = true;
    //todo add api call
    // this.isSubmitting = false;
  }

}
