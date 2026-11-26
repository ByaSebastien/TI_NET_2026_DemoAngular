import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YuGiOhResult } from '../models/yu-gi-oh-result.dto';

@Service()
export class YuGiOhService {

  private readonly _size = 5;
  private readonly _http = inject(HttpClient);

  getCards(page: number = 0) {
    let offset = page * this._size;

    return this._http.get<YuGiOhResult>(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?language=fr&num=${this._size}&offset=${offset}`,
    );
  }
}
