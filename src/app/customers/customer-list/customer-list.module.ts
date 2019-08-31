import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { CustomerListComponent } from './customer-list.component';

import { CustomerListInterceptor } from './customer-list-interceptor';

@NgModule({
  declarations: [
    CustomerListComponent
  ],
  exports: [
    CustomerListComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomerListInterceptor,
      multi: true
    },
  ],
})
export class CustomerListModule { }
