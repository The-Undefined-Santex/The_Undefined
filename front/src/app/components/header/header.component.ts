import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/AuthService.service';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MessageService],
})
export class HeaderComponent implements OnInit {
  nombreUsuario: string | null = ''; // Variable para almacenar el nombre de usuario

  visible: boolean = false;
  showPassword: boolean = false;

  showDialog() {
    this.visible = true;
  }
  usuarioAutenticado: boolean = false;
  userlogued: boolean = true;
  form: FormGroup;

  constructor(
    public usersService: UsersService,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private studentService: StudentsService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.form = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    let login = localStorage.getItem('login');
    if (login == 'ok') {
      this.usuarioAutenticado = true;
      this.userlogued = false;
    }
  }

  login(user: string, pass: string) {
    this.authService.login(user, pass).subscribe((response) => {
      console.log(response);
      if (response && response.data) {
        this.visible = false;
        const users = response.data.userName;
        if (user !== users) {
          console.log('El usuario no existe');
        }
        const userData = response.data;
        const rol = response.data.rol;
        if (rol === 'Student') {
          this.router.navigate(['/platform-students', userData.id]);
          this.usuarioAutenticado = true;
        } else if (rol === 'Admin') {
          this.router.navigate(['/adminPlatform']);
          this.usuarioAutenticado = true;
          this.userlogued = false;

          this.cdr.detectChanges();
        }
        localStorage.setItem('studentId', userData.id.toString());
        let login: string = 'ok';
        localStorage.setItem('login', login);
        this.usuarioAutenticado = true;
        this.userlogued = false;
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Usuario o contraseña incorrectos',
        });
        this.visible = false;
      }
    });
  }

  Logout() {
    if (this.router.url !== '/') {
      this.messageService.add({
        severity: 'success',
        summary: 'Deslogueo exitoso',
        detail: `Redireccionando a la pagina principal`,
      });

      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
    } else {

      this.messageService.add({
        severity: 'success',
        summary: 'Deslogueo exitoso',
        detail: `Te deslogueaste correctamente.`,
      });

    }

    localStorage.clear();
    this.usuarioAutenticado = false;
    this.userlogued = true;
  }

  guserName() {
    return this.form.get('userName');
  }

  get password() {
    return this.form.get('password');
  }
}
