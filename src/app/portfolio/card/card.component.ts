import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/models/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() post: IPost = {} as IPost

  
  constructor() { }

  ngOnInit(): void {
    
  }

}
