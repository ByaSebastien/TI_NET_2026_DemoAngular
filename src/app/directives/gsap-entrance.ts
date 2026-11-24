import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appGsapEntrance]',
})
export class GsapEntrance implements AfterViewInit {
  el: ElementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    gsap.from(this.el.nativeElement.querySelectorAll('div'),{
      x: -100,
      y: -25,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }
}
