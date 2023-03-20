import { Component } from '@angular/core';
import { StudentDataServiceService } from 'src/app/service/student-data-service.service';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent {
  PRN: string = "";
  firstPart: string = "";
  secondPart: string = "";
  details: any;
  deletedata: any;
  searchButtonClicked = false;
  constructor(private delStudent: StudentDataServiceService) { }
  splittingPRN() {
    let inputString = this.PRN;
    let parts = inputString.split("-");
    this.firstPart = parts[0];
    this.secondPart = parts[1].substring(0, parts[1].length - 1);
  }
  sendbody() {
    let body = {
      PRN: this.PRN,
      Department: this.firstPart,
      AdmissionYear: this.secondPart
    };
    this.delStudent.delrecord(this.PRN, this.firstPart, this.secondPart).subscribe((data: any) => {
      this.deletedata = data.message;
    });
  }
}