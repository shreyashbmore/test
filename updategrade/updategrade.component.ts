import { Component } from '@angular/core';
import { StudentDataServiceService } from 'src/app/service/student-data-service.service';

@Component({
  selector: 'app-updategrade',
  templateUrl: './updategrade.component.html',
  styleUrls: ['./updategrade.component.css']
})
export class UpdategradeComponent {
  
  updatedmarks:any=[];
  details:any;
  subjectinfo:any=this.gradeservice.subinfo1;
  // fullNameStudent=sessionStorage.getItem("fullName");
  PRNstudent =sessionStorage.getItem("PRN");
  Department=sessionStorage.getItem("department");
  Year=sessionStorage.getItem("year");

  constructor(private gradeservice: StudentDataServiceService) { 
    this.subjectfun()
  }
  
  subinfolist = Object.entries(this.subjectinfo).map(([key, value]) => ({ key, value }));

  subjectfun()
  {
    console.log("thisi is subinfolist-->",this.subinfolist);
    console.log(this.updatedmarks);
    console.log("value at index 0",this.subinfolist[0].key)

  }
 
  studentsub(){
    for(let i=0;i<(this.updatedmarks.length);i++)
    {
      this.subinfolist[i].value=this.updatedmarks[i]
    }
    let dictionary = Object.fromEntries(this.subinfolist.map(subinfolist => [subinfolist.key, subinfolist.value]));
    console.log("final dictonary is-->",dictionary)
    console.log("final list is-->",this.subinfolist);
    this.gradeservice.getsubmarks(this.Department,this.Year,this.PRNstudent,dictionary).subscribe((data: any) => {
      this.details = data;
      console.log("return by post method",this.details);
    });

  }

}
  
