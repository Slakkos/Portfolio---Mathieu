import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { Project } from '../_models/project';
import { ProjectsService } from '../_services/projects.service';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, ProjectModalComponent ,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  featuredProjects: Project = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Mathieu Rea - Home');
  }

  ngOnInit(): void {
    this.featuredProjects = this.projectService.GetProjectById(0);
  }
}
