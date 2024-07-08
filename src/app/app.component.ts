import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HearderComponent } from './component/hearder/hearder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HearderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DoAnTotNghiep';
}
