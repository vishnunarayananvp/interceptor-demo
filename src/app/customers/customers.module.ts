import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListModule } from './customer-list/customer-list.module';

import { CustomerComponent } from './customer/customer.component';

import { CustomerInterceptor } from './customer-interceptor';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    CustomerListModule,
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: CustomerInterceptor,
        multi: true
    },
  ],
  declarations: [CustomerComponent],
})
export class CustomersModule { }
