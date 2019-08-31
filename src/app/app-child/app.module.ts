import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppChildComponent } from './app.component';

import { AppChildInterceptor } from './app.interceptor';

@NgModule({
  declarations: [
    AppChildComponent
  ],
  exports: [
    AppChildComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppChildInterceptor,
      multi: true
    },
  ],
})
export class AppChildModule { }
