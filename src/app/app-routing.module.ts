import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachersComponent } from './components/teachers/teachers.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupTeacherComponent } from './components/signup-teacher/signup-teacher.component';
import { SignupStudentComponent } from './components/signup-student/signup-student.component';
import { SignupParentComponent } from './components/signup-parent/signup-parent.component';
import { AddCourseComponent } from './components/add-course/add-course.component';


const routes: Routes = [
  {path:"teachers", component:TeachersComponent},
  {path:"courses", component:CoursesComponent},
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"teacherSignup", component:SignupTeacherComponent},
  {path:"studentSignup", component:SignupStudentComponent},
  {path:"parentSignup", component:SignupParentComponent},
  {path:"addCourse", component:AddCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
