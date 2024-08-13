import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomReactWrapperComponent } from './CustomReactWrappedComponent';

@NgModule({
  declarations: [CustomReactWrapperComponent],
  imports: [CommonModule],
  exports: [CustomReactWrapperComponent]
})
export class CustomReactWrapperModule { }