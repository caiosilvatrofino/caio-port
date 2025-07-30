import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  selectedFilter = 'todos';

  filters = [
    { label: 'Todos', value: 'todos' },
    { label: 'Angular', value: 'angular' },
    { label: 'Java', value: 'java' },
    { label: 'Full Stack', value: 'fullstack' },
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento e painel administrativo. Desenvolvida com Angular no frontend e Spring Boot no backend.',
      image: '🛒',
      technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Stripe'],
      category: ['angular', 'java', 'fullstack'],
      demoUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/caiosilva/ecommerce',
      featured: true,
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description:
        'Dashboard interativo para análise de dados com gráficos em tempo real, relatórios customizáveis e integração com múltiplas APIs.',
      image: '📊',
      technologies: ['Angular', 'Chart.js', 'TypeScript', 'REST API'],
      category: ['angular'],
      demoUrl: 'https://demo-dashboard.com',
      githubUrl: 'https://github.com/caiosilva/dashboard',
      featured: true,
    },
    {
      id: 3,
      title: 'Chat App Real-time',
      description:
        'Aplicativo de chat em tempo real com autenticação, salas privadas, notificações push e compartilhamento de arquivos.',
      image: '💬',
      technologies: ['Angular', 'Socket.io', 'Node.js', 'MongoDB'],
      category: ['angular', 'fullstack'],
      demoUrl: 'https://demo-chat.com',
      githubUrl: 'https://github.com/caiosilva/chat-app',
      featured: false,
    },
    {
      id: 4,
      title: 'API de Gestão Financeira',
      description:
        'API REST robusta para gestão financeira com autenticação JWT, relatórios automáticos e integração bancária.',
      image: '💰',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT'],
      category: ['java'],
      demoUrl: '',
      githubUrl: 'https://github.com/caiosilva/finance-api',
      featured: false,
    },
    {
      id: 5,
      title: 'Task Manager',
      description:
        'Sistema de gerenciamento de tarefas com colaboração em equipe, cronogramas e integração com calendário.',
      image: '📋',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'JWT'],
      category: ['angular', 'java', 'fullstack'],
      demoUrl: 'https://demo-tasks.com',
      githubUrl: 'https://github.com/caiosilva/task-manager',
      featured: true,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description:
        'Website de portfólio responsivo e moderno desenvolvido com Angular, incluindo animações e tema escuro.',
      image: '🎨',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Animations'],
      category: ['angular'],
      demoUrl: 'https://caiosilva.dev',
      githubUrl: 'https://github.com/caiosilva/portfolio',
      featured: false,
    },
  ];

  filteredProjects: Project[] = [...this.projects];

  constructor() {
    this.filterProjects('todos');
  }

  filterProjects(filter: string) {
    this.selectedFilter = filter;

    if (filter === 'todos') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter((project) =>
        project.category.includes(filter)
      );
    }
  }

  openDemo(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  openGithub(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
