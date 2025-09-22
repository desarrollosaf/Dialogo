import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reforma-judicial',
  imports: [NewsletterComponent, RouterModule],
  templateUrl: './reforma-judicial.component.html',
  styleUrl: './reforma-judicial.component.css'
})
export class ReformaJudicialComponent {

}
