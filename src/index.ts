import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UShare } from './service';

export * from './service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class UShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UShareModule,
      providers: [UShare]
    };
  }
}