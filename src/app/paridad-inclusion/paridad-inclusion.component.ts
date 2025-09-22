import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-paridad-inclusion',
  imports: [NewsletterComponent, RouterModule],
  templateUrl: './paridad-inclusion.component.html',
  styleUrl: './paridad-inclusion.component.css'
})
export class ParidadInclusionComponent {

}
