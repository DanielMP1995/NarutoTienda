import { Component } from '@angular/core';
import { InfoNosotrosComponent } from "../../componentes/info-nosotros/info-nosotros.component";
import { ComentariosComponent } from "../../componentes/comentarios/comentarios.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [InfoNosotrosComponent, ComentariosComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
