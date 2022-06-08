import { DoctorsService } from './../doctors.service';
import {Doctor} from './../doctors';

import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit { 


  public doctors: Doctor[];
  selectedDoctor:Doctor;
  updateDoctor:Doctor;
  closeResult = 'Saved';
  search:any;
  constructor(private docser : DoctorsService,
    private modalService: NgbModal) { }
    addDoctor=new FormGroup({
       name:new FormControl(''), age:new FormControl(''),
       gender:new FormControl(''), specilistField:new FormControl('')
    });
  ngOnInit():void {
    this.getAllDoctors();
   
  }
  public onAddDoctor(addForm: NgForm):void{
    this.docser.addDoctor(addForm.value).subscribe((response:Doctor)=>{
      console.log(response);this.getAllDoctors();
    },
    (error:HttpErrorResponse)=>{alert(error.message)});
  }
  SaveDoctor(){
    console.log(this.addDoctor.value);
  }
 
  onSelectedDoctor(doctor: Doctor): void{
    this.selectedDoctor=doctor;
  }

    
  public getAllDoctors():void{
    this.docser.getAllDoctors().subscribe((response:Doctor[])=>{
      this.doctors=response;
    },(error:HttpErrorResponse)=>{alert(error.message)})
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'addDoctorModal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`; 
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}


