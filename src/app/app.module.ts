import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { BaseRouteReuseStrategy, RouteReuseStrategy } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RtstComponent } from './rtst/rtst.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    TiendaComponent,
    ProductoComponent,
    NavComponent,
    FooterComponent,
    CategoriasComponent,
    CategoriaComponent,
    RtstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: BaseRouteReuseStrategy, useClass: CacheStorage}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
