import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
selectFrameWork:string='html'
  constructor() { }
  onclickTab(val:string){
    this.selectFrameWork=val
  }
  ngOnInit(): void {
  }

}


