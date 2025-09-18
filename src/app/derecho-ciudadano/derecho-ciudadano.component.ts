import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";

@Component({
  selector: 'app-derecho-ciudadano',
  imports: [NewsletterComponent],
  templateUrl: './derecho-ciudadano.component.html',
  styleUrl: './derecho-ciudadano.component.css'
})
export class DerechoCiudadanoComponent {
  ngOnit(){
    console.log('ciudadano digno')
  }
}
