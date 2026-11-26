import { Component, input } from '@angular/core';
import { YuGiCard } from '../../models/yu-gi-oh-result.dto';

@Component({
  imports: [],
  selector: 'app-yu-gi-oh-card',
  styleUrl: './yu-gi-oh-card.page.scss',
  templateUrl: './yu-gi-oh-card.page.html',
})
export class YuGiOhCardPage {

  card = input.required<YuGiCard>();
}
