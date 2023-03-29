import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  empresa = {
    info: 'Refrilav es un negocio de ventas por mayoreo y menudeo de refacciones para aparatos electrodomésticos',
    redesSociales: 
    {
      facebook: 'face',
      // instagram: 'insta',
      // google: 'google',
      // whatsapp: 'whatsapp'
    },
    ubicacion: 'Módulo H, Local 10-B, Zona Seca Central de Abastos',
    contacto:
    {
      telefono: '+52 9516888359',
      email: 'ventas_refrilav@hotmail.com'
    }
  }

}
