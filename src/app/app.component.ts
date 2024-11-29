import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fontSize: number = 15;
  textColor: 'white' | 'orange' = 'white';
  buttonText: 'Branco' | 'Laranja' = 'Laranja'

  aumentarFontSize() {
    this.fontSize += 1;
  }

  changeColor() {
    if (this.textColor === 'white') {
      this.textColor = 'orange';
      this.buttonText = 'Branco';
    } else {
      this.textColor = 'white';
      this.buttonText = 'Laranja';
    }
  }
}
