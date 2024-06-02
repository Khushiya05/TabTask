import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tableviewchild',
  templateUrl: './tableviewchild.component.html',
  styleUrls: ['./tableviewchild.component.scss']
})
export class TableviewchildComponent implements OnInit {
@ViewChild('fname')fname !:ElementRef
@ViewChild('lname')lname !:ElementRef
@ViewChild('email')email !:ElementRef
@ViewChild('contact')contact !:ElementRef
  constructor() { }
  ngOnInit(): void {
  }
stdSArr=[
  {
  fname:"Mac",
  lname:"Deo",
  email:"mac@gmail.com",
  contact:"8456723456"
}
]
onstdAdd(){
  let stdObj={
    fname:this.fname.nativeElement.value,
    lname:this.lname.nativeElement.value,
    email:this.email.nativeElement.value,
    contact:this.contact.nativeElement.value,
  }
  console.log(stdObj);
  this.stdSArr.push(stdObj)
  this.fname.nativeElement.value='';
  this.lname.nativeElement.value='';
  this.email.nativeElement.value='';
  this.contact.nativeElement.value='';
  
}
}
