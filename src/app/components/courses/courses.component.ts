import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
//  coursesTab : any =[{},{}];
  coursesTab : any =[
    {title :"maths", description : "aaaaaaaaaaùodcjscscqdfe", duration :"108 Hours", teacher : "Ms fadwa"},
    {title :"physics", description : "aaaaaaaaaaùodcjscscqdfe", duration :"72 Hours", teacher : "Mr ali"},
    {title :"history", description : "aaaaaaaaaaùodcjscscqdfe", duration :"96 Hours", teacher : "Ms mariem"},
  ]


  constructor() { }

  ngOnInit() {
  }

}
