import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-maternidad-libre',
  imports: [NewsletterComponent, RouterModule],
  templateUrl: './maternidad-libre.component.html',
  styleUrl: './maternidad-libre.component.css'
})
export class MaternidadLibreComponent {

}
