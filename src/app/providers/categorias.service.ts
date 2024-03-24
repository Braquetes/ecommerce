import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  // URL = "http://localhost:8000";
  // private jsonUrl = 'assets/json/categorias.json';
  URL = 'https://api-ecommerce.braquetes.com.mx';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.URL}/categorias`);
  }
  
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.URL}/categorias/${id}`);
  }

}
