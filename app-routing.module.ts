import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { DepartmentComponent } from './components/department/department.component';
import { StudentfeesComponent } from './studentfees/studentfees.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { UpdategradeComponent } from './updategrade/updategrade.component';
import { DisplaygradeComponent } from './displaygrade/displaygrade.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


const routes: Routes = [
  
  {
    path:'Signinpage',
    component:SigninpageComponent ,
  },
  {
    path:'Toolbar',
    component: ToolbarComponent ,
  },
  {
    path:'Homepage',
    component:HomepageComponent ,
  },
  {
    path:'Register',
    component:RegisterComponent ,
  },
  {
    path:'Department',
    component:DepartmentComponent ,
  },

  {
    path:'Studentfees',
    component:StudentfeesComponent ,
  },
  {
    path:'Deletestudent',
    component: DeletestudentComponent ,
  },
  {
    path:'Updategrade',
    component:UpdategradeComponent ,
  },
  {
    path:'Displaygrade',
    component:DisplaygradeComponent ,
  },
  {
    path:'**',
    component:SigninpageComponent ,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
