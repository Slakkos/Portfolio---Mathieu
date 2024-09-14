import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { CommonModule } from '@angular/common';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  OpenProjectModal() {
    const overlay = this.renderer.createElement('div');
    this.renderer.addClass(overlay, 'overlay');

    const modal = this.renderer.createElement('div');
    this.renderer.addClass(modal, 'modal');

    const closeButton = this.createCloseButton();
    const title = this.createTitle();
    const image = this.createImage();
    const video = this.createVideo();
    const description = this.createDescription();
    const link = this.createLink();

    this.renderer.appendChild(modal, closeButton);
    this.renderer.appendChild(modal, title);
    this.renderer.appendChild(modal, image);
    this.renderer.appendChild(modal, video);
    this.renderer.appendChild(modal, description);
    this.renderer.appendChild(modal, link);

    this.renderer.appendChild(overlay, modal);
    this.renderer.appendChild(document.body, overlay);

    this.renderer.addClass(document.body, 'modal-open');

    setTimeout(() => {
      this.renderer.addClass(modal, 'open');
    }, 0);
  }

  CloseProjectModal() {
    const overlay = document.body.querySelector('.overlay');
    if (overlay) {
      const modal = overlay.querySelector('.modal');
      if (modal) {
        this.renderer.removeClass(modal, 'open');
        this.renderer.addClass(modal, 'close');
      }

      setTimeout(() => {
        this.renderer.removeChild(document.body, overlay);
        this.renderer.removeClass(document.body, 'modal-open');
      }, 300);
    }
  }

  createCloseButton() {
    const closeButton = this.renderer.createElement('button');
    this.renderer.addClass(closeButton, 'close-button');
    const closeButtonText = this.renderer.createText('Close');
    this.renderer.appendChild(closeButton, closeButtonText);
    closeButton.addEventListener('click', this.CloseProjectModal.bind(this));
    return closeButton;
  }

  createTitle() {
    const title = this.renderer.createElement('h2');
    const titleText = this.renderer.createText(this.project.name);
    this.renderer.appendChild(title, titleText);
    return title;
  }

  createImage() {
    const image = this.renderer.createElement('img');
    this.renderer.addClass(image, 'responsive-image');
    this.renderer.setAttribute(image, 'src', this.project.pictures[0]);
    return image;
  }

  createVideo() {
    const video = this.renderer.createElement('video');
    this.renderer.addClass(video, 'responsive-video');
    this.renderer.setAttribute(video, 'src', this.project.video);
    this.renderer.setAttribute(video, 'controls', 'true');
    return video;
  }

  createDescription() {
    const description = this.renderer.createElement('p');
    const descriptionText = this.renderer.createText(this.project.description);
    this.renderer.appendChild(description, descriptionText);
    return description;
  }

  createLink() {
    const link = this.renderer.createElement('a');
    this.renderer.setAttribute(link, 'href', this.project.projectLink);
    this.renderer.setAttribute(link, 'target', '_blank');
    const linkText = this.renderer.createText('View Project on GitHub');
    this.renderer.appendChild(link, linkText);
    return link;
}
}