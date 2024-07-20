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
  selector: 'app-recuperar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './recuperar.component.html',
  styleUrl: './recuperar.component.scss',
})
export default class RecuperarComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    const { newPassword, password } = this.loginForm.value;
    if (newPassword == password) {
      this.router.navigate(['/login']);
      alert('Contraseña Cambiada con Éxito.');
      this.userService.contraseña.set(password);
    } else {
      alert('Las Contraseñas No Coinciden.');
    }
  }
}
