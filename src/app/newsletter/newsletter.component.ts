import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { CorreoService } from '../service/correo.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  correoNL: string = '';
  correoInvalido: boolean = false;
  constructor(private _correoService: CorreoService) {}
  ngOnInit(): void {
    console.log('hi fiscal');
  }

  enviarCorreo() {
    this.validarCorreo();

    if (this.correoInvalido ) {
        Swal.fire({
          // icon: 'error', // lo puedes dejar si quieres el ícono por defecto
          title: '¡Atención!',
          text: 'Correo inválido',
          timer: 3000,
          showConfirmButton: false, 
          customClass: {
            popup: 'my-swal-popup',
            icon: 'my-swal-icon',
            title: 'my-swal-title',
            htmlContainer: 'my-swal-text',
          }
        });
      return;
    }
    const datos = {
      correo: this.correoNL,
    };
    console.log(datos);

    this._correoService.sendCorreo(datos).subscribe({
      next: (response: any) => {
        console.log(response);
         if(response.estatus == 200){
             Swal.fire({
              // icon: 'success',
              title: '¡Éxito!',
              text: 'Correo guardado correctamente',
              timer: 3000,
              showConfirmButton: false, 
              customClass: {
                popup: 'my-swal-popup',
                title: 'my-swal-title',
                confirmButton: 'my-swal-btn'
              }
            });
        }else{
           Swal.fire({
              // icon: 'error', // lo puedes dejar si quieres el ícono por defecto
              title: '¡Atención!',
              text: 'tu correo ya esta registrado',
              timer: 3000,
              showConfirmButton: false,
              customClass: {
                popup: 'my-swal-popup',
                icon: 'my-swal-icon',
                title: 'my-swal-title',
                htmlContainer: 'my-swal-text',
              }
            });
        }
      },
      error: (e: HttpErrorResponse) => {
        const msg = e.error?.msg || 'Error desconocido';
        console.error('Error del servidor:', msg);
      },
    });
  }

  validarCorreo() {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.correoInvalido = !regexCorreo.test(this.correoNL);
  }
}
