import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mujeres-presupuesto',
  imports: [NewsletterComponent, RouterModule],
  templateUrl: './mujeres-presupuesto.component.html',
  styleUrl: './mujeres-presupuesto.component.css'
})
export class MujeresPresupuestoComponent {

  ngOnit(){
    console.log('mujeres presupuesto')
  }
}
