import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faHouseChimney , faMagnifyingGlass, faUser, faDoorOpen, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-right-interface',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './right-interface.component.html',
  styleUrl: './right-interface.component.scss'
})
export class RightInterfaceComponent {
  faHouseChimney = faHouseChimney;
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faDoorOpen = faDoorOpen;
  faPlus = faPlus;
  faStar = faStar;
}
