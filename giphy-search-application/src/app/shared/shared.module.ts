import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './components/footer/footer/footer.component';

import { McfButtonModule } from '@accelya/sdk/mcf-button';
import { McfInputModule } from '@accelya/sdk/mcf-input';
import { McfModalModule } from '@accelya/sdk/mcf-modal';

const SdkModules = [
  McfButtonModule,
  McfModalModule,
  McfInputModule,
];


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [CommonModule, FormsModule, ...SdkModules],
  entryComponents: [],
  exports: [FormsModule, CommonModule, FooterComponent, ...SdkModules]
})
export class SharedModule {}
