import { DoctorsService } from './doctors.service';
import { Component } from '@angular/core';
import { Doctor } from './doctors';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hospital-app';
  
  
  constructor(private docser:DoctorsService){}
  ngOnInit(): void{}

  
    
}
