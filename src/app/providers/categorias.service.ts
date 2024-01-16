import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  // URL = "https://refrilav-oaxaca.com/refaccionaria";
  private jsonUrl = 'assets/json/categorias.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
  
  getOne(id: number): Observable<any> {
    return this.getAll().pipe(
      map(categorias => categorias.find((categoria: any) => categoria.idCategoria == id))
    );
  }

}
