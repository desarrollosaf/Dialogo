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
        { titulo: '¿Sabías que el Congreso mexiquense protege tu patrimonio?', img: '/patrimonio/img/billete-1-ok-1.png', ruta: '/patrimonio' },
        { titulo: 'LXII Legislatura, Legislatura histórica de la Paridad y la inclusión', img: '/paridad/img/billete-1-ok-1.png', ruta: '/paridad_inclusion' },
        // { titulo: '16/ diciembre /2024 ', img: '/img/imagen-entrada-3.png', ruta: '/' },
      ],
    },
    2025: {
      1: [
        { titulo: 'Claves de la Reforma Judicial de Edomex', img: '/reforma/img/billete-1-ok-1.png', ruta: '/reforma_judicial' },
        { titulo: 'Lo que debes de saber del Paquete Fiscal 2025', img: 'https://c.animaapp.com/udhLWezT/img/billete-1-ok-1.png', ruta: '/paquete_fiscal' },
        { titulo: 'Las mujeres al frente del presupuesto 2025 en Estado de México', img: '/mujeres/img/billete-1-ok-1.png', ruta: '/mujeres_presupuesto' }
      ],
      2: [
        { titulo: 'Combate LXII Legislatura mexiquense tala clandestina', img: '/tala/img/billete-1-ok-1.png', ruta: '/tala_clandestina' },
        { titulo: 'Protege el Congreso Edomex una Maternidad libre', img: '/maternidad/img/billete-1-ok-1.png', ruta: '/maternidad_libre' },
        { titulo: 'Impulsa LXII  Legislatura derecho al ciudadano digno', img: '/ciudadano/img/billete-1-ok-1.png', ruta: '/derecho_al_ciudadano_digno' },
      ],
      3: [
        { titulo: 'Dicen adiós a bolsas de plástico en Edomex', img: '/img/imagen-entrada-1.png', ruta: '/plastico_edomex' },
        { titulo: 'El rock ya tiene su día en el calendario mexiquense', img: 'rock/img/billete-1-ok-1.png', ruta: '/rock_mexiquense' },
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
