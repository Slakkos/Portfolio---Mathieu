import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RendererFactory2 } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            HeaderComponent,
            NavComponent,
            HomeComponent,
            CommonModule,
            CarouselModule,
          ],
  providers: [BrowserModule,
              BrowserAnimationsModule,
              CarouselModule
              ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
