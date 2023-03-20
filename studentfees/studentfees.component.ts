import { Component } from '@angular/core';
import { StudentDataServiceService } from 'src/app/service/student-data-service.service';

@Component({
  selector: 'app-studentfees',
  templateUrl: './studentfees.component.html',
  styleUrls: ['./studentfees.component.css']
})
export class StudentfeesComponent {
  PRN: string = "";
  amount: number = 0;
  firstPart: string = "";
  secondPart: string = "";
  details: number=0;
  showfees: number = 0;
  totalfees: number = 80000;
  remainingfees: number = 0;
  updatefees: number = 0;
  Index: any;
  searchButtonClicked = false;
  payButtonClicked = false;
  details2: any;
  constructor(private studentdata: StudentDataServiceService) { }

  splitPRN() {
    let inputString = this.PRN;
    let parts = inputString.split("-");
    this.firstPart = parts[0];
    this.secondPart = parts[1].substring(0, parts[1].length - 1);
  }

  getinfo() {
    this.studentdata.putfees(this.firstPart, this.secondPart, this.PRN).subscribe((data: any) => {
      this.details = data.message2;
      console.log("complete data->",data);
      console.log("grade data->",this.details);
      this.remainingfees = (this.totalfees - this.details);
    });

  }

  feesupdate() {
    this.updatefees = this.details + this.amount;
    let body = {
      department: this.firstPart,
      year: this.secondPart,
      PRN: this.PRN,
      feestoupdate: this.updatefees
    };

    this.studentdata.updateData(body).subscribe((data: any) => {
      this.details2 = data.message;
      console.log("this is deatails2",this.details2);
    });

  }

}
