import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/providers/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  productos: any;

  constructor(private router: Router, private PS: ProductoService){}

  ngOnInit(){
    this.getProductos();
  }

  items = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
  
  producto(id: number){
    this.router.navigate(['/producto/',id])
  }

  getProductos(){
    this.PS.getAll().subscribe((data: any) => {
      console.log(data);
      this.productos = data;
    });
  }
  
}
