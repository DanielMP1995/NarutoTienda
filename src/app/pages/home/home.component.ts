import { Component } from '@angular/core';
import { InfoInicioComponent } from "../../componentes/info-inicio/info-inicio.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InfoInicioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
