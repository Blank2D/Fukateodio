import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';
import { RightInterfaceComponent } from './shared/ui/right-interface/right-interface.component';
import { ThemeService } from './shared/data-access/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, RightInterfaceComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'ProyectoAPI';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Establecer el tema por defecto al iniciar
    this.themeService.setTheme('light');
  }
 
  onSubmit() {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    alert('Formulario enviado');
  }


}
