import { inject, Injectable } from '@angular/core';
import { INavigationRoute } from '../interfaces/navigation-route';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  router = inject(Router);

  public routes: INavigationRoute[] = [
    { text: 'cover', path: '/', active: true },
    { text: 'intro', path: '/intro', active: false },
    { text: 'skills', path: '/skills', active: false },
    { text: 'projects', path: '/projects', active: false },
    { text: 'blog', path: '/blog', active: false },
    { text: 'contacts', path: '/contacts', active: false }
  ];

  activeRoute = new BehaviorSubject<INavigationRoute | null>(null);

  goTo(path: string) {
    this.routes.forEach(item => {
      item.active = item.path === path;
    });
    this.router.navigate([path]);
  }
}
