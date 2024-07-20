import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: 'light' | 'dark' = 'light';

  constructor() {
    this.setTheme('light');
  }

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    const body = document.body;

    if (theme === 'dark') {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }

  getTheme() {
    return this.currentTheme;
  }
}
