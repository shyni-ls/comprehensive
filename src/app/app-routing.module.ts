import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalComponent } from './hospital/hospital.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AddpatientComponent } from './addpatient/addpatient.component';

const routes: Routes = [
{ path:'',component:HospitalComponent},
{ path:'home',component:HospitalComponent},
{ path:'doctor',component:DoctorComponent},
{ path:'patient',component:PatientComponent },
{ path:'addpatient',component:AddpatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HospitalComponent,DoctorComponent,PatientComponent,AddpatientComponent ]
