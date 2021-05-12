import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputUppercase]'
})
export class InputUppercaseDirective {

  constructor(
    private readonly elementRef: ElementRef
  ) { }

  @HostListener('keyup', ['$event']) onKeyUp(): void {
    this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.toUpperCase();
  }

}
