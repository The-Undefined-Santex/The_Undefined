import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthResponse } from 'src/app/core/model/authModel';
import { AuthService } from 'src/app/services/AuthService.service';
import { UsersService } from 'src/app/services/users.service';

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
      private cdr: ChangeDetectorRef, // Agregar ChangeDetectorRef
      private authService: AuthService
    ) {
      this.form = this.formBuilder.group({
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
    this.nombreUsuario = localStorage.getItem("userName");
    // Verifica si el valor es nulo y asigna un valor predeterminado si es necesario
    if (this.nombreUsuario === null) {
      this.nombreUsuario = ""; // O un valor predeterminado adecuado
    }

    let login = localStorage.getItem("login");
    if (login == "ok") {
      this.usuarioAutenticado = true;
      this.userlogued = false;
    }
    

  }

  loginAuth(user: string, pass: string) {
    this.authService.login(user, pass).subscribe(response => {
      // Aquí puedes manejar la respuesta del servidor, como guardar el token en local storage o redirigir a otra página.
      console.log('Respuesta del servidor:', response);
       // Accede a los datos del modelo
    const userData = response.data;
    const idUser = response.data.id;
    // Actualiza la variable nombreUsuario con el nombre de usuario
    this.nombreUsuario = userData.userName;
      // También puedes establecer el usuario como autenticado
      this.usuarioAutenticado = true;
      this.userlogued = false;
  
      // Actualiza la vista
      this.cdr.detectChanges();
   
    });
    // if (user && pass) {
    //   let login: string = "ok";
    //   localStorage.setItem("login", login);

    //   let userName: string = user;
    //   localStorage.setItem("userName", userName,);

    //   this.usuarioAutenticado = true;
    //   this.userlogued = false;

    //   this.nombreUsuario = userName;
    //   this.cdr.detectChanges();

    //   console.log("Login exitoso. Estado en localStorage:", localStorage.getItem("login"));
    // } else {
    //   alert("Credenciales incorrectas");
    // }

          
    //       this.form.reset();  
  }
  
    // login() {
    //   if (this.form.valid) {
    //     const username = this.form.controls['userName'].value;
    //     const password = this.form.controls['password'].value;
        
    //     this.usersService.getUsers().subscribe((usersData: UserModel[]) => {
    //       const matchingUser = usersData.find((user) => user.userName === username);
    //       const matchingPassword = usersData.find((user) => user.password === password);
  
    //       if (matchingUser && matchingPassword) {
    //         let login: string = "ok";
    //         localStorage.setItem("login", login );

    //         let userName: string = matchingUser.userName;
    //         localStorage.setItem("userName", userName, );

    //         this.usuarioAutenticado = true;
    //         this.userlogued = false;

    //         this.nombreUsuario = userName;
    //         this.cdr.detectChanges(); 

           
    //         console.log("Login exitoso. Estado en localStorage:", localStorage.getItem("login"));
    //       } else {
    //         alert("Credenciales incorrectas");
    //       }
    //     });
        
    //     this.form.reset();        
    //     // this.router.navigate(['/']);
    //   }
    // }
  
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
