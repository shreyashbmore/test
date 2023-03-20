import { Component } from '@angular/core';
import { StudentDataServiceService } from 'src/app/service/student-data-service.service';
import { Router } from '@angular/router';


@Component({
   selector: 'app-department',
   templateUrl: './department.component.html',
   styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
   department: any;
   year: any;
   list: any;
   details: any;
   searchButtonClicked = false;
   constructor(private studentdata: StudentDataServiceService, private router: Router) { }

   getinfo() {
      this.studentdata.putparams(this.department, this.year).subscribe((data: any) => {
         this.details = data;
         this.list = Object.entries(this.details).map(([key, value]) => ({ key, value }));
         console.log("these are list data",this.list);
         console.log("this is dictonary data",this.details)
      });
   }
   getSubjectNames(subjectMarks: { [key: string]: number }): string[] {
      return Object.keys(subjectMarks);}

   PRN:any;
   fullName:any;
   branch:any;
   yearadmission:any;
   sessionPRN(PRN2:any,fullName2:any,branch2:any,yearadmission2:any)
   {
     this.PRN=PRN2;
     this.fullName=fullName2;
     this.branch=branch2;
     this.yearadmission=yearadmission2;
     sessionStorage.setItem("PRN",this.PRN)
     sessionStorage.setItem("fullName",this.fullName)
     sessionStorage.setItem("department",this.department)
     sessionStorage.setItem("year",this.year)
     console.log(this.PRN);
     console.log(this.fullName);
    // console.log(this.fullName);
    // console.log(this.fullName);
     this.router.navigateByUrl('/Updategrade')
   }
   sendsubject(subinfo:any)
   {
       this.studentdata.subdetails(subinfo);
   }
}
