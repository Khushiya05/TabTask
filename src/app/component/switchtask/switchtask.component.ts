import { Component, OnInit } from '@angular/core';
import { Iplayer } from 'src/app/interface/player';

@Component({
  selector: 'app-switchtask',
  templateUrl: './switchtask.component.html',
  styleUrls: ['./switchtask.component.scss']
})
export class SwitchtaskComponent implements OnInit {
selectedHero:string='Virat Kohali'
  constructor() { }
imgArr:Array<Iplayer>=[
  {
    name:'Virat Kohali',
    imgUrl:'https://th.bing.com/th/id/OIP.D9zpzJJFwPMGRoZDiSo3HgHaEK?rs=1&pid=ImgDetMain'
  },
  {
    name:'MS Dhoni',
    imgUrl:'https://th.bing.com/th/id/OIP.dwyWiG7rpu0DMb6w6EkLrgHaE0?rs=1&pid=ImgDetMain'
  },
  {
    name:'Shubham Gill',
    imgUrl:'https://th.bing.com/th/id/OIP.WJ--gVg4rW1xXABXi57OewHaEO?rs=1&pid=ImgDetMain'
  }
]
  ngOnInit(): void {
  }

}
