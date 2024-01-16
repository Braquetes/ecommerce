import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProductoService } from 'src/app/providers/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

  producto: any;

  constructor(private router: Router, private CS: CookieService, private AR: ActivatedRoute, private PS: ProductoService){}

  ngOnInit(){
    let id = this.AR.snapshot.params['id']
    console.log(this.router.url);
    let key = this.CS.get('key')
    if(key){
      console.log(key);
      this.getProducto(id)
    }else{
      this.CS.set('key',id)
      this.reloadComponent()
    }
  }

  ngOnDestroy(){
    this.CS.deleteAll()
  }

  reloadComponent() {
    window.location.reload();
  }

  getProducto(id: number){
    this.PS.getOne(id).subscribe((data: any) => {
      console.log(data, "producto", id);
      this.producto = data;
    });
  }

}
