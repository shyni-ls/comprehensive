import { DoctorsService } from './../doctors.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Patient } from '../patient';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {

  constructor(private docser: DoctorsService) { }

  ngOnInit(): void {
  }
  public onAddPatient(addForm: NgForm):void{
    this.docser.addPatient(addForm.value).subscribe((response:Patient)=>{
      console.log(response);this.docser.getAllPatients();
    },
    (error:HttpErrorResponse)=>{alert(error.message)});
  }
}
