import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Importar os services
import { ThemeService } from './app/services/theme.service';
import { ScrollService } from './app/services/scroll.service';
import { AnimationService } from './app/services/animation.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    // Adicionar os services aqui
    ThemeService,
    ScrollService,
    AnimationService,
  ],
}).catch((err) => console.error(err));
