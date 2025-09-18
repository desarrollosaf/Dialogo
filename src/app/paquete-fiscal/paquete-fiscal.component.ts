import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CorreoService } from '../service/correo.service';
import { NewsletterComponent } from "../newsletter/newsletter.component";
@Component({
  selector: 'app-paquete-fiscal',
  imports: [CommonModule, FormsModule, HttpClientModule, NewsletterComponent],
  templateUrl: './paquete-fiscal.component.html',
  styleUrl: './paquete-fiscal.component.css',
})
export class PaqueteFiscalComponent {
  
}
