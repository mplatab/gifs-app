import { Component } from '@angular/core';
import { GifsServiceService } from '../../services/gifs-service.service';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private gifsService: GifsServiceService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }



}
