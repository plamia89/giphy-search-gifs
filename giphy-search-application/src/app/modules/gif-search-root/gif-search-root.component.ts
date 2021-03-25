import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gif-search-root',
    templateUrl: 'gif-search-root.component.html',
    styleUrls: ['./gif-search-root.component.scss'],
})

export class GifSearchRootComponent implements OnInit {
    public searchValue = '';
    constructor() { }

    ngOnInit(): void { }

    onSearchChange($event) {
        this.searchValue = $event;
    }

}
