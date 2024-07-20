import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { UserService } from '../../../perfil/data-access/user.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss',
})
export default class RegistrarComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    const { newPassword, password, username } = this.loginForm.value;
    if (newPassword == password && username != null) {
      this.router.navigate(['/login']);
      alert('Registro realizado con Éxito.');
      this.userService.contraseña.set(password);
      this.userService.nombrePerfil.set(username);

    } else {
      alert('Rellene el Formulario de forma Correcta.');
    }
  }
}
