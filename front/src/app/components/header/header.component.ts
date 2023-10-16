import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/AuthService.service';
import { Student } from 'src/app/core/model/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   nombreUsuario: string | null = '';  // Variable para almacenar el nombre de usuario

  visible: boolean = false;

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
      private studentModel: Student,
      private studentService: StudentsService
    ) {
      this.form = this.formBuilder.group({
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
    let login = localStorage.getItem("login");
    if (login == "ok") {
      this.usuarioAutenticado = true;
      this.userlogued = false;
    }
  }
  

  login(user: string, pass: string) {
    this.authService.login(user, pass).subscribe(response => {
      this.visible = false;

      const userData = response.data;
      const idUser = response.data.id;

      localStorage.setItem('studentId', userData.id.toString());

      this.studentService.getStudentById(+userData.id).subscribe(student => {
        this.nombreUsuario = student.first_name; 

        this.usuarioAutenticado = true;
        this.userlogued = false;

        this.cdr.detectChanges();
      });

    });
  }
  
    Logout() {
      localStorage.clear();
      window.location.reload();
    }
  
    get userName() {
      return this.form.get("userName");
    }
  
    get password() {
      return this.form.get("password");
    }
  }
