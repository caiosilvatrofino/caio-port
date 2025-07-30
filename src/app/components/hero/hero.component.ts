import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule], // ← ADICIONAR ESTA LINHA
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  typingTexts = [
    '🚀 Angular • Java • TypeScript • Spring Boot',
    '💻 Full Stack Developer',
    '⚡ Criando soluções inovadoras',
  ];

  currentText = '';
  currentIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingInterval: any;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.startTypingEffect();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  startTypingEffect() {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
      const fullText = this.typingTexts[this.currentIndex];

      if (this.isDeleting) {
        this.currentText = fullText.substring(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        this.currentText = fullText.substring(0, this.charIndex + 1);
        this.charIndex++;
      }

      if (!this.isDeleting && this.charIndex === fullText.length) {
        this.typingInterval = setTimeout(() => {
          this.isDeleting = true;
          type();
        }, pauseTime);
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.typingTexts.length;
        this.typingInterval = setTimeout(type, 500);
      } else {
        this.typingInterval = setTimeout(
          type,
          this.isDeleting ? deleteSpeed : typeSpeed
        );
      }
    };

    type();
  }

  scrollToProjects() {
    this.scrollService.scrollToElement('projetos');
  }

  downloadCV() {
    // Implementar download do CV
    console.log('Download CV');
  }
}
