import { Component } from '@angular/core';
import { StudentDataServiceService } from 'src/app/service/student-data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName: string = "";
  email: string = "";
  phoneNumber: string = "";
  department: string = "";
  year: string = "";
  address: string = "";
  feespaid: number = 0;
  details: any;
  PRN: string = "";
  studentPRN: any;
  searchButtonClicked = false;
  constructor(private studentservice: StudentDataServiceService) { }
  studentinfo:
    {
      fullName: string,
      email: string,
      phoneNumber: string,
      department: string,
      year: string,
      address: string,
      feespaid: number
    }[] = []

  onSubmit() {
    let body = {
      fullName: this.fullName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      department: this.department,
      year: this.year,
      address: this.address,
      feespaid: this.feespaid
    };
    this.studentservice.createItem(body).subscribe((data: any) => {
      this.studentPRN = data.message;
      console.log("this is pRN",this.studentPRN);
    });
  }

}
