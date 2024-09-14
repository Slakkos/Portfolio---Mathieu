import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component:  HomeComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path : 'resume', component: ResumeComponent }
];
