import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  onSubmit() {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    alert('Formulario enviado');
  }
}
