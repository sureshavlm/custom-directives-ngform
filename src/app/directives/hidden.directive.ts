import { Directive, Input, Renderer, ElementRef } from '@angular/core';

@Directive({
	selector: '[myHidden]',
})

export class MyHiddnDirective {
	
	@Input()
	myHidden: boolean;

	constructor(public el: ElementRef, public renderer: Renderer) {

	}

	ngOnInit() {
		console.log("******** ",this.myHidden);
		if(this.myHidden) {
			this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
		}
	}

}