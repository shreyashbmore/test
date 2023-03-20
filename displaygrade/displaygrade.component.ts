import { Component } from '@angular/core';
import { StudentDataServiceService } from 'src/app/service/student-data-service.service';

@Component({
  selector: 'app-displaygrade',
  templateUrl: './displaygrade.component.html',
  styleUrls: ['./displaygrade.component.css']
})
export class DisplaygradeComponent {

  firstPart: string = "";
  secondPart: string = "";
  details: any;
  PRN: string = "";
  list:any;
  searchButtonClicked = false;

  constructor(private Studentdata: StudentDataServiceService) { }

  splitPRN() {
    let inputString = this.PRN;
    let parts = inputString.split("-");
    this.firstPart = parts[0];
    this.secondPart = parts[1].substring(0, parts[1].length - 1);
  }

  getinfo() {
    this.Studentdata.putfees(this.firstPart, this.secondPart, this.PRN).subscribe((data: any) => {
      this.details = data.message;
      this.list = Object.entries(this.details).map(([key, value]) => ({ key, value }));
      console.log("complete data->",data);
      console.log("grade data->",this.details);
    });

  }

}
