import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/ui/header/header.component';
import { FooterComponent } from '../../core/ui/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HeaderComponent, FooterComponent],
})
export class HomeComponent {}
