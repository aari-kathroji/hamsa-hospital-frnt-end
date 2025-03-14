import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { NavPatientComponent } from './nav-patient/nav-patient.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NavComponent,NavPatientComponent,NavAdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hamsa-hospital-frnt-end';
}
