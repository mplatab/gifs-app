import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interface/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey = "Q3EOnrtB3L0OeoIsCldEfl4kMY4Zxrsu"
  private serviceUrl = "https://api.giphy.com/v1/gifs"

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
    console.log('GifsServiceService Ready');
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeTagsHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('tags', JSON.stringify(this._tagsHistory));
  }

  private loadFromLocalStorage(): void {
    if (!localStorage.getItem('tags')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('tags')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string): void {
    if(tag.length === 0) return;

    this.organizeTagsHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10')

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(response => {
        this.gifList = response.data;
      });
  }
}
