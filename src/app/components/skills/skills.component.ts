import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'CSS/SCSS', level: 80 },
        { name: 'JavaScript', level: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Node.js', level: 70 },
      ],
    },
    {
      title: 'DevOps',
      icon: '☁️',
      skills: [
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Git', level: 85 },
        { name: 'Linux', level: 75 },
      ],
    },
  ];
}
