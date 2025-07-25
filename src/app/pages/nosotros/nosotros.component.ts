import { Component } from '@angular/core';
import { InfoNosotrosComponent } from "../../componentes/info-nosotros/info-nosotros.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [InfoNosotrosComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
