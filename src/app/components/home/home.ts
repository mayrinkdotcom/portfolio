import { Component, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'p-home',
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  navigationService = inject(NavigationService);

  navigateToNextPage() {
    this.navigationService.goTo('/intro');
  }

}
