import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gif-search-bar',
  templateUrl: './gif-search-bar.component.html',
  styleUrls: ['./gif-search-bar.component.scss']
})
export class GifSearchBarComponent {
  @Output() search = new EventEmitter<string>();

  public searchItem = '';

  constructor() { }

  searchGif(): any {
    this.search.emit(this.searchItem);
  }

}
