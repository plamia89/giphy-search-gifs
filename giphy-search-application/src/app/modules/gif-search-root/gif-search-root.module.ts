import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '~app/shared/shared.module';

import { GifSearchRootComponent } from './gif-search-root.component';
import { GifItemsResultComponent } from './gif-items-result/gif-items-result.component';
import { GifSearchBarComponent } from './gif-search-bar/gif-search-bar.component';


@NgModule({
  declarations: [
    GifSearchRootComponent,
    GifItemsResultComponent,
    GifSearchBarComponent
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  entryComponents: [],
  exports: [GifSearchRootComponent ]
})
export class GifSearchRootModule {}
