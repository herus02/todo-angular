import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private baseURL = 'https://jsonplaceholder.typicode.com/posts?limits=50';
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
    return this.http.patch(`${this.baseURL}/${id}`, data).pipe(
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
