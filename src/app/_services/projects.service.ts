import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tags';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Spotiflyx", pictures: ['spotiflyx.png'], video: "spotiflyx.mov", projectLink: "https://github.com/Taker-Academy/Spotiflyx?tab=readme-ov-file", summary: "Full stack web project", description: "Spotiflyx is a music streaming service allowing users to listen to music online through Spotify's API. But that's not all! Spotiflyx also offers the ability for users to watch YouTube videos directly from the website", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id: 0, name: "Corewar", pictures: ['corewar-logo.jpg'], video: "Corewar Présentation.mp4", projectLink: "https://github.com/Slakkos/Corewar/blob/main/README.md", summary: "Algorithmic project", description: "Core War is a programming game in which two (or more) computer programs compete for control of a virtual machine called MARS, for Memory Array Redcode Simulator. These programs are written in an assembly language called Redcode. The aim of the game is to terminate all instances of the opposing programs, in order to be the last to run.", tags: [Tag.C]}
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('Project not found is ' + id);
    }
    return project;
  }


}
