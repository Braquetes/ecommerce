import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL = "https://refrilav-oaxaca.com/refaccionaria";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.URL}/admin/productos/getAll.php`)
  }

  getOneID(id: number){
    return this.http.get(`${this.URL}/admin/productos/getOneID.php?idCategoria=${id}`);
  }
  
  getOne(id: number){
    return this.http.get(`${this.URL}/admin/productos/getOne.php?idProducto=${id}`);
  }
}