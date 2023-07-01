import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrls: ['./signup-student.component.css']
})
export class SignupStudentComponent implements OnInit {
signupForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName : ["",[Validators.required, Validators.minLength(3)]],
      lastName : ["",[Validators.required, Validators.minLength(5)]],
      email : ["",[Validators.required, Validators.email]],
      tel : ["",[Validators.required, Validators.pattern('[- +()0-9]{8,12}')]],
      address : ["",[Validators.required]],
      pwd : ["",[Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    })
  }

  signupStudent(){

  }
}
