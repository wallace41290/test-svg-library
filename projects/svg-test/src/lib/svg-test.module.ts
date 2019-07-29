import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SvgCircleComponent } from './svg-circle/svg-circle.component';

@NgModule({
  declarations: [SvgCircleComponent],
  imports: [CommonModule],
  exports: [SvgCircleComponent]
})
export class SvgTestModule {}
