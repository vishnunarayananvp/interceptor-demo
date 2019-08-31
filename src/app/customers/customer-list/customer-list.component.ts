import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  response: Observable<any>;
  constructor(private http: HttpClient) { }

  request() {
    const url = 'http://dummy.restapiexample.com/api/v1/employees';
    this.response = this.http.get(url, { observe: 'body' }).pipe(
      map((res: any[]) => res.slice(0, 5)),
    );
  }
}
