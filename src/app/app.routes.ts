import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Intro } from './components/intro/intro';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'intro',
    component: Intro
  }
];
