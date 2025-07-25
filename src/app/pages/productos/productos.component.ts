import { Component } from '@angular/core';
import { TablaUsuariosComponent } from "../../componentes/tabla-usuarios/tabla-usuarios.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TablaUsuariosComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
