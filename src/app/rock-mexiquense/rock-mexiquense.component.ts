import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rock-mexiquense',
  standalone: true,
  imports: [NewsletterComponent, RouterModule],
  templateUrl: './rock-mexiquense.component.html',
  styleUrls: ['./rock-mexiquense.component.css']
})
export class RockMexiquenseComponent {
  audio = new Audio('audio/rock.mp3');

  ngOnInit(): void {
    // Intento de autoplay (puede fallar si no hay interacción)
    this.audio.load();
    this.audio.play().catch(err => {
      console.log('Autoplay falló, espera interacción del usuario', err);
    });

    // Reproducir en el primer clic del usuario
    document.body.addEventListener('click', () => {
      this.audio.play().catch(err => console.log('Audio aún bloqueado'));
    }, { once: true });
  }
}
