import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouseChimney, faMagnifyingGlass, faUser, faDoorOpen, faPlus, faStar, faSun, faMoon, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../data-access/theme.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../app/perfil/data-access/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, CommonModule],
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
  faSun = faSun;
  faMoon = faMoon;
  faRightToBracket = faRightToBracket;

  isDarkTheme: boolean = false;

  isLoggedIn$ = this.authService.isLoggedIn;


  constructor(private themeService: ThemeService, private authService: AuthService) {
    this.isDarkTheme = this.themeService.getTheme() === 'dark';
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    this.themeService.setTheme(theme);
    document.getElementById('theme-toggle-button')?.classList.toggle('dark-theme', this.isDarkTheme);
  }
}
