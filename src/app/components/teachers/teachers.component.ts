import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachersTab : any =[
    {firstName : "ali", lastName: "xxx", email:"ali@ali.com", specialization:"physics"},
  {firstName : "fadwa", lastName: "xxx", email:"fadwa@123.com", specialization:"maths"}];

  constructor() { }

  ngOnInit() {
  }

}
