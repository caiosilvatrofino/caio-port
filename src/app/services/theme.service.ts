import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkTheme = false;
  private readonly THEME_KEY = 'portfolio-dark-theme';

  // Observable para outros componentes escutarem mudanças de tema
  private themeSubject = new BehaviorSubject<boolean>(false);
  public theme$ = this.themeSubject.asObservable();

  constructor() {
    this.loadTheme();
  }

  isDarkTheme(): boolean {
    return this.darkTheme;
  }

  setDarkTheme(isDark: boolean): void {
    this.darkTheme = isDark;
    localStorage.setItem(this.THEME_KEY, isDark.toString());
    this.themeSubject.next(isDark);

    // Adiciona/remove classe no body
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  toggleTheme(): boolean {
    this.setDarkTheme(!this.darkTheme);
    return this.darkTheme;
  }

  private loadTheme(): void {
    const saved = localStorage.getItem(this.THEME_KEY);
    if (saved !== null) {
      this.darkTheme = saved === 'true';
    } else {
      // Detecta preferência do sistema
      this.darkTheme =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    this.setDarkTheme(this.darkTheme);
  }
}
