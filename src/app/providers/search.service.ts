import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

// import { map } from 'rxjs/operators';
import * as unorm from 'unorm';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // URL = "https://refrilav-oaxaca.com/refaccionaria";
  private jsonUrl = 'assets/json/productos.json';


  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  search(query: string): Observable<any[]> {
    const normalizedQuery = this.normalizeText(query.toLowerCase());

    return this.getAll().pipe(
      map(products => products.filter(
        product => 
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
