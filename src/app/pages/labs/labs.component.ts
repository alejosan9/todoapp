import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  persona = signal({
    nombre: 'Alejo',
    edad: 19,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  })

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

  changeName(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.persona.update(prevState => {
      return {
        ...prevState,
        nombre: newValue
      }
    })
  }



  changeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.persona.update(prevState => {
      return{
        ...prevState, 
        edad: parseInt(newValue)
      }
    })
  }

  // ReactiveForm

  colorCtrl = new FormControl();

  constructor(){
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }
}
