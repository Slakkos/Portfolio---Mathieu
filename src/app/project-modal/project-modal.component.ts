import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
project: any;
    constructor(public bsModalRef: BsModalRef) {

    }
}
