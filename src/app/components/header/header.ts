import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'p-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  router = inject(Router);

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
