import { DoctorsService } from './../doctors.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Doctor } from '../doctors';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
 title='Hospital Application';
 public doctors: Doctor[];
  applications = [{name:'one'},{name:'two'}]
  closeResult = 'saved';

  constructor(private docser:DoctorsService,private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  public onAddDoctor(addForm: NgForm):void{
    this.docser.addDoctor(addForm.value).subscribe((response:Doctor)=>{
      console.log(response);this.docser.getAllPatients();
    },
    (error:HttpErrorResponse)=>{alert(error.message)});
  }

  public onOpenModel(doctor:Doctor,mode:String):void{
    const container = document.getElementById('main');
    const button=document.createElement('button');
    button.type='button';button.style.display='none';
    button.setAttribute('data-toggle','model');
    if(mode === 'add'){
      button.setAttribute('data-target','addDoctorModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
