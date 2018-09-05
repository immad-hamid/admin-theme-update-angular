import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestApiService {

  constructor(private http: HttpClient) { }
  url: string; // this is just for demo we will be usign evn for this url

  // get headers
  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('x-access-token', token) : null;
  }

  // get method
  get(link: string) {
    return this.http.get(`${this.url}${link}`, { headers: this.getHeaders() });
  }

  // post method
  post(link: string, body: any) {
    return this.http.post(`${this.url}${link}`, body, { headers: this.getHeaders() });
  }

  // update method
  update(link: string, body: any) {
    return this.http.put(`${this.url}${link}`, body, { headers: this.getHeaders() });
  }

  // delete method
  delete(link: string) {
    return this.http.delete(`${this.url}${link}`, { headers: this.getHeaders() });
  }

}
