import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  HostListener,
} from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule], // ← ADICIONAR ESTA LINHA
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() themeToggle = new EventEmitter<void>();

  isMenuOpen = false;
  isScrolled = false;

  menuItems = [
    { label: 'Home', anchor: 'home' },
    { label: 'Sobre', anchor: 'sobre' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Projetos', anchor: 'projetos' },
    { label: 'Contato', anchor: 'contato' },
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(anchor: string) {
    this.scrollService.scrollToElement(anchor);
    this.isMenuOpen = false;
  }

  onThemeToggle() {
    this.themeToggle.emit();
  }
}
