import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'gifs-gifs-card',
  standalone: false,

  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit{


  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required.');
  }


}
