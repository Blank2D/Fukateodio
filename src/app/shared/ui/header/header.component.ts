import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouseChimney, faMagnifyingGlass, faUser, faDoorOpen, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../data-access/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faHouseChimney = faHouseChimney;
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faDoorOpen = faDoorOpen;
  faPlus = faPlus;
  faStar = faStar;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    const currentTheme = this.themeService.getTheme();
    this.themeService.setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }
}
