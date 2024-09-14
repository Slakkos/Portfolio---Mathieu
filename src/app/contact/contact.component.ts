import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ HeaderComponent, NavComponent, ProjectModalComponent ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
