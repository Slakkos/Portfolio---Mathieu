import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tags';
import { ProjectsService } from '../_services/projects.service';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavComponent,
    ProjectCardComponent,
    ProjectModalComponent
  ],
  providers: [
    Router
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = [];

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Mathieu Rea -Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }
}
