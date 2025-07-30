import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  stats = [
    { number: '2+', label: 'Anos de Experiência' },
    { number: '10+', label: 'Projetos Concluídos' },
    { number: '10+', label: 'Tecnologias' },
  ];
}
