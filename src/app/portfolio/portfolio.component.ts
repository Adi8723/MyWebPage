import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { IPost } from 'src/models/cards';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{

  posts: IPost[] = [
 
    {img: 'counter.png', title: 'Counter', link: 'http://adi.adiletsharshekeev.de/counter'},
    {img: 'recipe.png', title: 'Recipe Page', link: 'http://adilet-sharshekeev.developerakademie.com/Ver9/'},
    {img: 'Quizapp.png', title: 'Quiz App', link: 'http://adi.adiletsharshekeev.de/Quizapp/index.html'},
    {img: 'recipeApp.png', title: 'Recipe App', link: 'http://adi.adiletsharshekeev.de/recipeApp'},
       
  ]
   
 constructor(){}
  ngOnInit(): void {
  AOS.init();
  }

   

  // showLightbox(index:any) {
  //   this.currentIndex = index;
  //   this.showFlag = true;
    
  // }

  // closeEventHandler() {
  //   this.showFlag = false;
  //   this.currentIndex = -1;
  // }

  // fullscreen(){
  //   if(this.elem.requestFullscreen){
  //     this.elem.requestFullscreen()
  //   }
  // }
}
