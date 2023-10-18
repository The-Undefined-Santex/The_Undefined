import { Component, OnInit } from '@angular/core';
import { Admin } from '../../core/interface/admin.interface'; // Ajusta la ruta según la ubicación de AdminModel
import { AuthService } from 'src/app/services/AuthService.service'; // Ajusta la ruta según la ubicación de
import { MessageService } from 'primeng/api'; // Importa el servicio de mensajes de PrimeNG

@Component({
  selector: 'app-admin-platform',
  templateUrl: './admin-platform.component.html',
  styleUrls: ['./admin-platform.component.scss'],
  providers: [MessageService], 
})
export class AdminPlatformComponent implements OnInit {
  admins: Admin[] = [];
  adminSaludo: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getPosts().subscribe((response) => {
      this.admins = response;
      this.saludarAdmin();
    });
  }

  saludarAdmin() {
    if (this.admins.length > 0) {
      const userData = this.admins[0];
      const userName = userData.firstName;

      if (userName) {
        this.adminSaludo = `¡Hola, ${userName}! Bienvenido como administrador.`;
      }
    }
  }
}