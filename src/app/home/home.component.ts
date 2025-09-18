import { Component, OnInit } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewsletterComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title = 'Dialogo';
  anioSeleccionado: number = 2025;
  trimestreSeleccionado: number = 1;

  // Datos estáticos por año y trimestre
  articulos: any = {
    2024: {
      4: [
        { titulo: 'Protege tu patrimonio', img: '/patrimonio/img/billete-1-ok-1.png', ruta: '/patrimonio' },
        { titulo: 'Paridad y la inclusion', img: '/paridad/img/billete-1-ok-1.png', ruta: '/paridad_inclusion' },
        // { titulo: '16/ diciembre /2024 ', img: '/img/imagen-entrada-3.png', ruta: '/' },
      ],
    },
    2025: {
      1: [
        { titulo: 'Reforma Judicial del Edomex', img: '/reforma/img/billete-1-ok-1.png', ruta: '/reforma_judicial' },
        { titulo: 'Paquete Fiscal 2025', img: 'https://c.animaapp.com/udhLWezT/img/billete-1-ok-1.png', ruta: '/paquete_fiscal' },
        { titulo: 'Las mujeres al frente del presupuesto', img: '/mujeres/img/billete-1-ok-1.png', ruta: '/mujeres_presupuesto' }
      ],
      2: [
        { titulo: 'Tala Clandestina', img: '/tala/img/billete-1-ok-1.png', ruta: '/tala_clandestina' },
        { titulo: 'Maternidad libre', img: '/maternidad/img/billete-1-ok-1.png', ruta: '/maternidad_libre' },
        { titulo: 'Derecho al ciudadano digno', img: '/ciudadano/img/billete-1-ok-1.png', ruta: '/derecho_al_ciudadano_digno' },
      ],
      3: [
        { titulo: 'Bolsas', img: '/img/imagen-entrada-1.png', ruta: '/plastico_edomex' },
        { titulo: 'Rock mexiquense', img: 'rock/img/billete-1-ok-1.png', ruta: '/rock_mexiquense' },
      ],
    },
  };

  cambiarAnio(anio: number) {
    this.anioSeleccionado = anio;
    this.trimestreSeleccionado = 1; // Reiniciar en primer trimestre
  }

  cambiarTrimestre(trimestre: number) {
    this.trimestreSeleccionado = trimestre;
  }
  ngOnInit(): void {
    
  }
}
