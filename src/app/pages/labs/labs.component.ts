import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  saludo = 'Saludos';
  tasks = [
    'Paso 1',
    'Paso 2',
    'Paso 3'
  ];

  // Ejemplo con objetos

  persona = {
    nombre: 'Alejo',
    edad: 9,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  // Eventos

  clickHandler() {
    alert('Hola')
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue)
    console.log(event);
  }

  keyDownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  // Signal

  name = signal('Alejandro');


  // Directivas de control

  tasks_directivas = signal([
    'Paso 1',
    'Paso 2',
    'Paso 3'
  ]);

}
