import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-presentacion',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrl: './tarjeta-presentacion.component.css'
})
export class TarjetaPresentacionComponent {
  nombre: string = "Naruto Uzumaki";
  profesion: string = "Ninja";
  email: string = "naurotouzumaki@gmail.com";
  ciudad: string = "Konoha";
  imagenUrl: string = "https://i.postimg.cc/yd10sdbf/naruto1.jpg"
}
