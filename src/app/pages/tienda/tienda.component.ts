import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/providers/categorias.service';
import { ProductoService } from 'src/app/providers/producto.service';
import { SearchService } from 'src/app/providers/search.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent {

  id: any;
  search: any;
  productos: any;
  categoria: any;

  longitud: any;

  constructor(private PS: ProductoService, private AR: ActivatedRoute, private router: Router, private CatSer: CategoriasService, private SS: SearchService){}

  ngOnInit(){
    this.id = this.AR.snapshot.params['categoria']
    this.search = this.AR.snapshot.params['search']
    if(this.id){
      this.getCategoria(this.id);
      this.getProductosID(this.id);
    }
    if(this.search){
      this.SS.search(this.search).subscribe((data: any) => {
        console.log(data);
        if(data[0]){
          console.log('lleno');
          this.longitud = 0;
        }else{
          console.log('vacio');
          this.longitud = 1;
        }
        this.productos = data;
      })
    }
  }

  getProductosID(id: number){
    this.PS.getOneID(id).subscribe((data: any) => {
      console.log(data, id);
      this.productos = data;
    });
  }

  getCategoria(id: number){
    this.CatSer.getOne(id).subscribe((data: any) => {
      console.log(data);
      this.categoria = data;
    });
  }

  producto(id: number){
    this.router.navigate(['/producto/',id])
  }

}
