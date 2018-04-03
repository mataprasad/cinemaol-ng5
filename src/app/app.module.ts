import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { MoviesComponent } from './components/movies/movies.component';

import { DIContainer } from './app.di.container';
import { CascadeDdlComponent } from './cascade-ddl/cascade-ddl.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'cascade', component: CascadeDdlComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MoviesComponent,
    CascadeDdlComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  exports: [ 
    RouterModule 
  ],
  providers: DIContainer.Providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
