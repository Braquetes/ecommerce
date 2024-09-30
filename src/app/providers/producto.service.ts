import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private jsonUrl = 'assets/json/productos.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }

  getOneID(id: number): Observable<any[]> {
    return this.getAll().pipe(
      map(products => products.filter((product: any) => product.idCategoria == id))
    );
  }
  
  getOne(id: number): Observable<any> {
    return this.getAll().pipe(
      map(products => products.find((product: any) => product.idProducto == id))
    );
  }

}