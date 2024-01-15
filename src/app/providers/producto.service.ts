import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // URL = "http://localhost:8080";
  URL = "http://braquetes.com.mx";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.URL}/products`)
  }

  getOneID(id: number){
    return this.http.get(`${this.URL}/admin/productos/getOneID.php?idCategoria=${id}`);
  }
  
  getOne(id: number){
    return this.http.get(`${this.URL}/product/${id}`);
  }
}