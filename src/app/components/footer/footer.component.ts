import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/seuusername',
      color: '#0077B5',
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/seuusername',
      color: '#333',
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:seu@email.com',
      color: '#EA4335',
    },
    {
      name: 'WhatsApp',
      icon: '📱',
      url: 'https://wa.me/5511999999999',
      color: '#25D366',
    },
  ];

  quickLinks = [
    { label: 'Home', anchor: 'home' },
    { label: 'Sobre', anchor: 'sobre' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Projetos', anchor: 'projetos' },
    { label: 'Contato', anchor: 'contato' },
  ];

  constructor(private scrollService: ScrollService) {}

  scrollToSection(anchor: string) {
    this.scrollService.scrollToElement(anchor);
  }

  scrollToTop() {
    this.scrollService.scrollToTop();
  }

  openSocialLink(url: string) {
    window.open(url, '_blank');
  }
}
