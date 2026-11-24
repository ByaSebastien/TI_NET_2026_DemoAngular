import { Component, signal, WritableSignal } from '@angular/core';
import { FaqDto } from '../../models/faq-dto';

@Component({
  imports: [],
  selector: 'app-faq',
  styleUrl: './faq.scss',
  templateUrl: './faq.html',
})
export class Faq {

  faqs: WritableSignal<FaqDto[]> = signal([
    {
      id: 1,
      question: 'De quel couleur est le ciel?',
      response: 'Gris',
    },
    {
      id: 2,
      question: 'Quand se termine la journée?',
      response: 'Exceptionelement à 45',
    },
  ]);

  voteUp() {
    alert('Merci');
  }
}
