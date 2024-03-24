import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

// import { map } from 'rxjs/operators';
import * as unorm from 'unorm';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // URL = "http://localhost:8000";
  // private jsonUrl = 'assets/json/productos.json';
  URL = 'https://api-ecommerce.braquetes.com.mx';


  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get(`${this.URL}/productos`);
  }

  search(query: string): Observable<any[]> {
    const normalizedQuery = this.normalizeText(query.toLowerCase());

    return this.getAll().pipe(
      map((products: any) => products.filter(
        (product: any) => 
          this.normalizeText(product.producto.toLowerCase()).includes(normalizedQuery) ||
          this.normalizeText(product.modelo.toLowerCase()).includes(normalizedQuery) ||
          this.normalizeText(product.descripcion.toLowerCase()).includes(normalizedQuery)
      ))
    );
  }

  normalizeText(text: string): string {
    return unorm.nfd(text).replace(/[\u0300-\u036f]/g, ''); // Normaliza y elimina diacríticos
  }
}
