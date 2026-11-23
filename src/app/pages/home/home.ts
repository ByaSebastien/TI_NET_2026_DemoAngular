import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  imports: [],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home implements OnInit, OnDestroy {

  constructor() {
    console.log('Home constructor');
  }

  ngOnInit(): void {
    console.log('Home ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Home ngOnDestroy');
  }
}
