import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { RtstComponent } from './rtst/rtst.component';

const routes: Routes = [
  {
    path: 'categorias',
    component: CategoriasComponent
  },
  {
    path: 'categoria/:id',
    component: CategoriaComponent
  },
  {
    path: 'rtst/:id',
    component: RtstComponent
  },
  {
    path: 'rtst/search/:search',
    component: RtstComponent
  },
  {
    path: 'producto/:id',
    component: ProductoComponent
  },
  {
    path: 'tienda',
    component: TiendaComponent
  },
  {
    path: 'tienda/:categoria',
    component: TiendaComponent
  },
  {
    path: 'tienda/search/:search',
    component: TiendaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
