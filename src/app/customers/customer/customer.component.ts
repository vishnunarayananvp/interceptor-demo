import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-child',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  response: Observable<any>;
  constructor(private http: HttpClient) { }

  request() {
    const url = 'http://dummy.restapiexample.com/api/v1/employees';
    this.response = this.http.get(url, { observe: 'body' }).pipe(
      map((res: any[]) => JSON.stringify(res.slice(0, 5), null, 2)),
    );
  }
}
