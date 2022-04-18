import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
//   Iam = [ ' Adilet Sharshekeev']
//   currentname = 0;
//   img = 'pp_wbg.png'
//   showname = true;

  constructor(
    
  ) { }

  ngOnInit(): void {
   //  this.changename()
  }

//   changename(){
//     setInterval(()=>{
//       this.currentname++;
//       this.currentname = this.currentname % this.Iam.length;
//       this.showname = false;

//       setTimeout(()=>{
//         this.showname = true;
//       },10)

//     },4000)
//   } 

  goAbout(){
    document.getElementById('about')?.scrollIntoView();
  }
}


