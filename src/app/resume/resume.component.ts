import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ HeaderComponent, NavComponent, ProjectModalComponent ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})

export class ResumeComponent {
  showWorkExperience = false;
  showEducation = false;
  showCertifications = false;
  showSkills = false;

  DownloadFile() {
    const link  = document.createElement('a');

    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'CV Mathieu Rea.pdf');
    link.setAttribute('download', 'CV Mathieu Rea.pdf');
    link.click();
    link.remove();
  }

  toggleWorkExperience() {
    const content = document.getElementById('workExperienceContent');
    if (content) {
      content.classList.contains('show') ? content.classList.replace('show', 'hide') : content.classList.replace('hide', 'show');
    }
  }

  toggleEducation() {
    const content = document.getElementById('educationContent');
    if (content) {
      content.classList.contains('show') ? content.classList.replace('show', 'hide') : content.classList.replace('hide', 'show');
    }
  }

  toggleCertifications() {
    const content = document.getElementById('certificationsContent');
    if (content) {
      content.classList.contains('show') ? content.classList.replace('show', 'hide') : content.classList.replace('hide', 'show');
    }
  }

  toggleSkills() {
    const content = document.getElementById('skillsContent');
    if (content) {
      content.classList.contains('show') ? content.classList.replace('show', 'hide') : content.classList.replace('hide', 'show');
    }
  }
}
