import { Component } from '@angular/core';
import { GifsServiceService } from '../../../gifs/services/gifs-service.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService: GifsServiceService) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  onTagClick(tag: string): void {
    this.gifsService.searchTag(tag);
  }


}
