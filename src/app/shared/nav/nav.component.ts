interface categorias{
  categoria: string;
  idCategoria: string;
}

import { Component } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/providers/categorias.service';
import { SearchService } from 'src/app/providers/search.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  categorias: categorias | any;
  search: any;

  constructor(private CatSer: CategoriasService, private router: Router, private SS: SearchService){}

  ngOnInit(){
    this.getCategorias();
  }

  getCategorias(){
    this.CatSer.getAll().subscribe((data: any) => {
      console.log(data);
      this.categorias = data;
    });
  }

  categoria(id: number){
    this.router.navigate(['/rtst', id]);
  }
  
  miForm(form: NgForm){
    console.log(form.value);
    this.router.navigate(['/rtst/search/', form.value.search]);
  }

}
