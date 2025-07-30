import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private observer: IntersectionObserver | null = null;

  constructor() {
    this.initializeIntersectionObserver();
  }

  private initializeIntersectionObserver(): void {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');

          // Animar skill bars quando a seção skills entra em view
          if (entry.target.id === 'skills') {
            this.animateSkillBars();
          }

          // Animar números de estatísticas
          if (entry.target.classList.contains('stat-number')) {
            this.animateNumber(entry.target as HTMLElement);
          }
        }
      });
    }, options);
  }

  observeElement(element: HTMLElement): void {
    if (this.observer) {
      this.observer.observe(element);
    }
  }

  private animateSkillBars(): void {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        const width = bar.getAttribute('data-width') || '0%';
        (bar as HTMLElement).style.width = width;
      }, index * 200);
    });
  }

  private animateNumber(element: HTMLElement): void {
    const finalNumber = parseInt(
      element.textContent?.replace(/\D/g, '') || '0'
    );
    const duration = 2000;
    const increment = finalNumber / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= finalNumber) {
        current = finalNumber;
        clearInterval(timer);
      }

      const suffix = element.textContent?.includes('+') ? '+' : '';
      element.textContent = Math.floor(current) + suffix;
    }, 16);
  }

  // Efeito de digitação
  typeWriter(
    element: HTMLElement,
    text: string,
    speed: number = 100
  ): Promise<void> {
    return new Promise((resolve) => {
      let i = 0;
      element.textContent = '';

      const timer = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
          resolve();
        }
      }, speed);
    });
  }

  // Shake animation para formulários com erro
  shakeElement(element: HTMLElement): void {
    element.classList.add('shake');
    setTimeout(() => {
      element.classList.remove('shake');
    }, 500);
  }

  // Fade in animation
  fadeIn(element: HTMLElement, duration: number = 300): void {
    element.style.opacity = '0';
    element.style.display = 'block';

    let opacity = 0;
    const timer = setInterval(() => {
      opacity += 0.1;
      element.style.opacity = opacity.toString();

      if (opacity >= 1) {
        clearInterval(timer);
      }
    }, duration / 10);
  }

  // Slide up animation
  slideUp(element: HTMLElement, duration: number = 300): void {
    element.style.transform = 'translateY(20px)';
    element.style.opacity = '0';

    setTimeout(() => {
      element.style.transition = `all ${duration}ms ease`;
      element.style.transform = 'translateY(0)';
      element.style.opacity = '1';
    }, 50);
  }
}
