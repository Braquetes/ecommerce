import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // URL = "http://localhost:8000";
  // private jsonUrl = 'assets/json/productos.json';
  URL = 'https://api-ecommerce.braquetes.com.mx';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.URL}/productos`);
  }

  getOneID(id: number): Observable<any> {
    return this.http.get(`${this.URL}/productos/categoria/${id}`);
  }
  
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.URL}/productos/${id}`);
  }

}