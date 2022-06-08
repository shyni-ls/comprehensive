
import { Injectable } from '@angular/core';
import { Doctor } from './doctors';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Patient } from './patient';
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
   private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

 public getAllDoctors():Observable<Doctor[]>{
   return this.http.get<Doctor[]>(`${this.apiServerUrl}/doctor/all`);
 }
 public getDoctor(doctorid : number):Observable<Doctor>{
  return this.http.get<Doctor>(`${this.apiServerUrl}/doctor/find/${doctorid}`);
}
 public addDoctor(doctor : Doctor):Observable<Doctor>{
  return this.http.post<Doctor>(`${this.apiServerUrl}/doctor/add`,doctor);
}
public updateDoctor(doctor : Doctor):Observable<Doctor>{
  return this.http.put<Doctor>(`${this.apiServerUrl}/doctor/update`,doctor);
}
public deleteDoctor(doctorid : number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/doctor/delete/${doctorid}`);
}
public getAllPatients():Observable<Patient[]>{
  return this.http.get<Patient[]>(`${this.apiServerUrl}/patient/all`);
}
public getPatient(patientid : number):Observable<Patient>{
 return this.http.get<Patient>(`${this.apiServerUrl}/patient/find/${patientid}`);
}
public addPatient(patient : Patient):Observable<Patient>{
 return this.http.post<Patient>(`${this.apiServerUrl}/patient/add`,patient);
}
public updatePatient(patient : Patient):Observable<Patient>{
 return this.http.put<Patient>(`${this.apiServerUrl}/patient/update`,patient);
}
public deletePatient(patientid : number):Observable<void>{
 return this.http.delete<void>(`${this.apiServerUrl}/patient/delete/${patientid}`);
}
}
