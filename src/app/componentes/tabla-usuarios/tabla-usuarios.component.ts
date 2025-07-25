import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuarios'; // o '../tabla-usuarios/usuarios' según la ubicación real


@Component({
  selector: 'app-tabla-usuarios',
  standalone: true,
  imports: [CommonModule, HttpClientModule], 
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Usuario[]>('assets/usuarios.json').subscribe(data => {
      console.log('Datos recibidos:', data);
      this.usuarios = data;
    });
  }
}