import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  URL = "http://refrilav-oaxaca.com/refaccionaria";

  constructor(private http: HttpClient) { }

  search(search: string){
    return this.http.get(`${this.URL}/admin/search.php?search=${search}`)
  }

}
