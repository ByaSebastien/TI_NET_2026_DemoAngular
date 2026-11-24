import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-chrono',
  styleUrl: './chrono.scss',
  templateUrl: './chrono.html',
})
export class Chrono {

  title: WritableSignal<string> = signal('Chrono');

  constructor() {

    setTimeout(() => {
      this.title.set('Bou!!!');
      console.log(this.title());
    }, 3000);
  }
}
