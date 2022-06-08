import { Patient } from './../patient';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../doctors.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Doctor } from '../doctors';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  public patients: Patient[];
   public doctors: Doctor[];
   search:any;
 
  constructor(private docser : DoctorsService) { }
   patientdetails={};
  ngOnInit(): void {
    this.docser.getAllPatients().subscribe( (allData)=>{console.log(allData);
    this.patientdetails=allData});
  }

  public onAddPatient(addForm: NgForm):void{
    this.docser.addDoctor(addForm.value).subscribe((response:Doctor)=>{
      console.log(response);this.getAllPatients();
    },
    (error:HttpErrorResponse)=>{alert(error.message)});
  }
  public getAllPatients():void{
    this.docser.getAllPatients().subscribe((response:Patient[])=>{
      this.patients=response;
    },(error:HttpErrorResponse)=>{alert(error.message)})
  }
  onClick(){
    console.log();                   
  }

}
