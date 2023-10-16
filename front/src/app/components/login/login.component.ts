import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  login(user: string, pass: string) {
    this.authService.login(user, pass).subscribe(response => {
      // Aquí puedes manejar la respuesta del servidor, como guardar el token en local storage o redirigir a otra página.
      console.log('Respuesta del servidor:', response);
    });
  }
}
