import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../../services/gifs-service.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  constructor(private gifsService: GifsServiceService) { }

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // searchTag( newTag: string ):void {
  //   console.log({newTag});
  // }

  searchTag():void {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';

    console.log({newTag});
  }
}
