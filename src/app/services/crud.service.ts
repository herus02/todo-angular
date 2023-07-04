import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private baseURL = 'https://64a46b29c3b509573b5780f1.mockapi.io/todo';
  constructor(private http: HttpClient) {}

  postData(data: any) {
    return this.http.post(this.baseURL, JSON.stringify(data)).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getData() {
    return this.http.get(this.baseURL).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateData(data?: any, id?: number) {
    return this.http.put(`${this.baseURL}/${id}`, data).pipe(
      map((response: any) => {
        return response.json;
      })
    );
  }

  deleteData(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`).pipe(
      map((response: any) => {
        return response.json;
      })
    );
  }
}
