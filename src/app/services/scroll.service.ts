import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollSubject = new BehaviorSubject<number>(0);
  public scroll$ = this.scrollSubject.asObservable();

  constructor() {
    window.addEventListener('scroll', () => {
      this.scrollSubject.next(window.pageYOffset);
    });
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.clientHeight : 80;
      const yOffset = -navbarHeight - 20;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  getCurrentScroll(): number {
    return window.pageYOffset;
  }

  getActiveSection(): string {
    const sections = ['home', 'sobre', 'skills', 'projetos', 'contato'];
    const scrollPosition = window.pageYOffset + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        return sections[i];
      }
    }

    return 'home';
  }
}
