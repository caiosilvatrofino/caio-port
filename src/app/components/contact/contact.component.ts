import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;
  showSuccess = false;
  showError = false;

  contactInfo: ContactInfo[] = [
    {
      icon: '📧',
      label: 'Email',
      value: 'caios.trofino@gmail.com',
      link: 'mailto:caio.silva@email.com',
    },
    {
      icon: '📱',
      label: 'WhatsApp',
      value: '(11) 97091-3872',
      link: 'https://wa.me/5511970913872',
    },
    {
      icon: '📍',
      label: 'Localização',
      value: 'São Paulo, SP - Brasil',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/caio-silva361/',
      link: 'https://www.linkedin.com/in/caio-silva361/',
    },
  ];

  onSubmit() {
    if (this.isValidForm()) {
      this.isSubmitting = true;

      // Simular envio do formulário
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccess = true;
        this.resetForm();

        // Esconder mensagem de sucesso após 5 segundos
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      }, 2000);
    } else {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
    }
  }

  isValidForm(): boolean {
    return !!(
      this.contactForm.name &&
      this.contactForm.email &&
      this.contactForm.subject &&
      this.contactForm.message &&
      this.isValidEmail(this.contactForm.email)
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  openContactLink(link?: string) {
    if (link) {
      window.open(link, '_blank');
    }
  }

  downloadCV() {
    // Implementar download do CV
    console.log('Download CV');
    // window.open('assets/cv/caio-silva-cv.pdf', '_blank');
  }
}
