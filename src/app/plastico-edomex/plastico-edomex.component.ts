import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plastico-edomex',
  imports: [NewsletterComponent, RouterModule],
  templateUrl: './plastico-edomex.component.html',
  styleUrl: './plastico-edomex.component.css'
})
export class PlasticoEdomexComponent {

}
