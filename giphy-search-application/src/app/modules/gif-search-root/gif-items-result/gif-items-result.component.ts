import { Component, OnInit, OnChanges, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GiphyService } from '~app/services/giphy.service';
import { McfModal } from '@accelya/sdk/mcf-modal';

@Component({
  selector: 'app-gif-items-result',
  templateUrl: './gif-items-result.component.html',
  styleUrls: ['./gif-items-result.component.scss']
})

export class GifItemsResultComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('mcfModalImage', { static: true }) mcfModal: McfModal;

  @Input() searchValue= '';
  
  giphyImages: string[] = [];
  msgNoResults = 'No results found';
  public giphyImageModal = '';

  private destroy$ = new Subject();

  constructor(
      private giphyService: GiphyService
    ) { }

  ngOnInit(): void {
    this.getGifsData();
  }

  ngOnChanges(): void {
    this.getGifsData();
  }

  onImageClick(image) {
    this.mcfModal.isVisible = true;
    this.giphyImageModal = image;
  }

  getGifsData(): void {
    this.giphyService.searchGifs(this.searchValue).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.giphyImages = data;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}




