import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StudentDataServiceService {

  apiUrl = 'https://afz7uaysxh.execute-api.ap-northeast-1.amazonaws.com/Dev2/myapi';
  apiUrl2='https://afz7uaysxh.execute-api.ap-northeast-1.amazonaws.com/Dev2/feesdetails';

  subinfo1:any;

  constructor(private http: HttpClient,private router: Router) { }

  createItem(item: any): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }

  putparams(branch: any, admissionyear: any) {
    let params = new HttpParams();
    params = params.append("Department", branch);
    params = params.append("AdmissionYear", admissionyear);
    return this.http.get(this.apiUrl, { params: params });

  }
  updateData(item1: any): Observable<any> {
    return this.http.put(this.apiUrl, item1);
  };
  delrecord(PRN: any, branch: any, admissionyear: any): Observable<any> {
    let params = new HttpParams();
    params = params.append("PRN", PRN);
    params = params.append("Department", branch);
    params = params.append("AdmissionYear", admissionyear);
    return this.http.delete(this.apiUrl, { params: params });

  }
  putfees(branch: any, admissionyear: any, PRN: any) {
    let params = new HttpParams();
    params = params.append("Department", branch);
    params = params.append("AdmissionYear", admissionyear);
    params = params.append("PRN", PRN);
    return this.http.get(this.apiUrl2, { params: params });

  }

  subdetails(item3:any)
  {
     this.subinfo1=item3;
  }

  getsubmarks(department1:any,year1:any,prn1:any,item4:any):Observable<any>
  {
    let body={
      Department:department1,
      Year:year1,
      PRN:prn1,
      subjectmark:item4
    }
    console.log("we are in get submarks-->",body);
    return this.http.post("https://afz7uaysxh.execute-api.ap-northeast-1.amazonaws.com/Dev2/feesdetails",body)
  }
}
