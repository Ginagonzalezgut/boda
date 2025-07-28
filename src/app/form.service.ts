import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormService {
  private scriptURL = 'https://giselleyfernando.com/proxy.php';

  constructor(private http: HttpClient) {}

  enviarFormulario(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.scriptURL, JSON.stringify(data), {
      headers,
      responseType: 'json',
    });
  }
}
