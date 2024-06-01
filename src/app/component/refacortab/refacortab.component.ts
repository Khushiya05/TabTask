import { Component, OnInit } from '@angular/core';
import { Iskill } from 'src/app/interface/interface';

@Component({
  selector: 'app-refacortab',
  templateUrl: './refacortab.component.html',
  styleUrls: ['./refacortab.component.scss']
})
export class RefacortabComponent implements OnInit {
selectedSkillset:string='angular'
  constructor() { }

  ngOnInit(): void {
  }
skillsArray:Array<Iskill>=[{
  skillName:"angular",
  content:'Angular is an open-source web application framework maintained by Google and a community of developers. It is designed to build dynamic and interactive single-page applications (SPAs) efficiently. With Angular, developers can create robust, scalable, and maintainable web applications.'
},
{
  skillName:"javascript",
  content:'Javascript is a programming language used for creating dynamic content on websites. It is a lightweight, cross-platform and single-threaded programming language. JavaScript is an interpreted language that executes code line by line providing more flexibility. It is a commonly used programming language to create dynamic and interactive elements in web applications.'
  
},
{skillName:"node",
content:'Node is a JavaScript runtime environment that enables the execution of code on the server side. It allows developers to execute JavaScript code outside of a web browser, enabling the development of scalable and efficient network applications.'}]
}
