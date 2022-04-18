import { Component, OnInit } from '@angular/core';
import {MatIcon} from '@angular/material/icon'
import { InViewPortService } from '../in-view-port.service';

import { Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  width0: boolean = false;
  logo = 'logo_large.png'
  width100: boolean = false
  
  // constructor(
  //   public inviewport: InViewPortService) { }

  ngOnInit(): void {
  }

  goHome(){
    document.getElementById('home')?.scrollIntoView();
    this.width0 = true
     
  }
   goAbout(){
    document.getElementById('about')?.scrollIntoView();
    this.width0 = true

  }
  goWork(){
    document.getElementById('work')?.scrollIntoView();
    this.width0 = true

  }
  
  goToSkills(){
    document.getElementById('skills')?.scrollIntoView();
    this.width0 = true

  }
  goContact(){
    document.getElementById('contact')?.scrollIntoView();
    this.width0 = true
   
  }

  
   

  Togglemenuicon(){
    document.getElementById("myNav").style.width = "100%";
    this.width0 = false
	}

  closeNav(){
    document.getElementById("myNav").style.width = "0%";
  }
   

  
  
}
