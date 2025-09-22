import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patrimonio',
  imports: [NewsletterComponent, RouterModule],
  templateUrl: './patrimonio.component.html',
  styleUrl: './patrimonio.component.css'
})
export class PatrimonioComponent {

}
