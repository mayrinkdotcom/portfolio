import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'p-home',
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  router = inject(Router)

  navigateToNextPage() {
    this.router.navigate(['/intro'])
  }

}
