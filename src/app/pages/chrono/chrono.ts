import { Component, OnDestroy, signal, WritableSignal } from '@angular/core';
import { TimePipe } from '../../pipes/time-pipe';

@Component({
  imports: [TimePipe],
  selector: 'app-chrono',
  styleUrl: './chrono.scss',
  templateUrl: './chrono.html',
})
export class Chrono implements OnDestroy{
  secondes = signal(0);
  timer?: number;

  start() {
    if (this.timer) {
      return;
    }
    this.timer = setInterval(() => {
      this.secondes.update((s) => s + 1);
      console.log('ahah');
    }, 1000);
  }

  stop() {
    if (!this.timer) {
      return;
    }
    clearInterval(this.timer);
    this.timer = undefined;
  }

  reset() {
    if (this.timer) {
      return;
    }
    this.secondes.set(0);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
