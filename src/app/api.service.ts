import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Feedback } from './Feedback';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAll() {
    return this.httpClient.get<Feedback[]>(
      'http://localhost:35510/api/FeedbackCtrl/GetAll'
    );
  }

  getByID(Id: number) {
    return this.httpClient.get<Feedback>(
      'http://localhost:35510/api/FeedbackCtrl/GetByID/' + Id
    );
  }
  edit(item: Feedback) {
    return this.httpClient.put(
      'http://localhost:35510/api/FeedbackCtrl/Update',
      item
    );
  }
  delete(Id: number) {
    return this.httpClient.delete(
      'http://localhost:35510/api/FeedbackCtrl/Delete/' + Id
    );
  }
  create(item: Feedback) {
    return this.httpClient.post<Feedback>(
      'http://localhost:35510/api/FeedbackCtrl/Create',
      item
    );
  }
}
