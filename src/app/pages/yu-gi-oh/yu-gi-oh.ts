import { Component, inject, signal, WritableSignal } from '@angular/core';
import { YuGiOhService } from '../../services/yu-gi-oh.service';
import { YuGiOhResult } from '../../models/yu-gi-oh-result.dto';
import { YuGiOhCardPage } from '../../components/yu-gi-oh-card.page/yu-gi-oh-card.page';

@Component({
  imports: [YuGiOhCardPage],
  selector: 'app-yu-gi-oh',
  styleUrl: './yu-gi-oh.scss',
  templateUrl: './yu-gi-oh.html',
})
export class YuGiOh {
  private readonly _yuGiOhService = inject(YuGiOhService);

  result: WritableSignal<YuGiOhResult | undefined> = signal(undefined);

  constructor() {
    this._yuGiOhService.getCards().subscribe((data) => {
      this.result.set(data);
    });
  }
}
