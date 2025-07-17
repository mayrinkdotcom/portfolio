import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Intro } from './components/intro/intro';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'intro',
    component: Intro
  },
  {
    path: 'skills',
    component: Skills
  },
  {
    path: 'projects',
    component: Projects
  }
];
