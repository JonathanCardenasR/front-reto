import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    standalone:true,
    selector: '[appAphaNumericOnly]'
  })
  export class AphaNumericOnlyDirective {
  
    constructor(private el: ElementRef) {}

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
    const key = event.key;
    const regex = /^[a-z0-9]+$/i;

    if (!regex.test(key)) {
      event.preventDefault();    
    }
  }

  }