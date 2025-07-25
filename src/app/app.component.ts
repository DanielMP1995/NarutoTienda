import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./componentes/nav-bar/nav-bar.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { TarjetaPresentacionComponent } from "./componentes/tarjeta-presentacion/tarjeta-presentacion.component";
import { TablaUsuariosComponent } from "./componentes/tabla-usuarios/tabla-usuarios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, TarjetaPresentacionComponent, TablaUsuariosComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-introduccion';
}
