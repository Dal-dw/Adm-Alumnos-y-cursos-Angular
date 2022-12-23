import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[titleSize]',
})
export class TitleSizeDirective {
  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.fontSize = '20px';
  }
}
