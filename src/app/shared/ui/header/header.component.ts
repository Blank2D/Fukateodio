import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouseChimney, faMagnifyingGlass, faUser, faDoorOpen, faSun, faMoon, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../data-access/theme.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../app/perfil/data-access/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faHouseChimney = faHouseChimney;
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faDoorOpen = faDoorOpen;
  faSun = faSun;
  faMoon = faMoon;
  faRightToBracket = faRightToBracket;

  isDarkTheme: boolean = false;
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private router: Router
  ) {
    this.isDarkTheme = this.themeService.getTheme() === 'dark';
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    this.themeService.setTheme(theme);
    document.getElementById('theme-toggle-button')?.classList.toggle('dark-theme', this.isDarkTheme);
  }
}
