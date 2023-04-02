import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  URL = "https://refrilav-oaxaca.com/refaccionaria";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.URL}/admin/categorias/getAll.php`);
  }
  
  getOne(id: number){
    return this.http.get(`${this.URL}/admin/categorias/getOne.php?idCategoria=${id}`);
  }

}
