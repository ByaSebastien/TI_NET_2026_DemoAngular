import { Component } from '@angular/core';

@Component({
  imports: [],
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {

  constructor() {
    console.log('About constructor');
  }

  ngOnInit(): void {
    console.log('About ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('About ngOnDestroy');
  }
}
