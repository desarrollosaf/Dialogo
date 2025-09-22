import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-derecho-ciudadano',
  imports: [NewsletterComponent, RouterModule ],
  templateUrl: './derecho-ciudadano.component.html',
  styleUrl: './derecho-ciudadano.component.css'
})
export class DerechoCiudadanoComponent {
  ngOnit(){
    console.log('ciudadano digno')
  }
}
