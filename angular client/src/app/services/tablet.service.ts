import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { Tablet } from '../models/Tablet';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class TabletService {

  baseUrl: string = "/api/tablets/";
  constructor(private http: HttpClient) {}

  getAllTablets(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteTablet(id: string): Observable<any> {
    ///api/tabltes/123456
    return this.http.delete(this.baseUrl + id, httpOptions);
  }

  addTablet(tablet: Tablet): Observable<any> {
    
    return this.http.post(this.baseUrl,tablet, httpOptions);

  }

}
