import { Pipe } from '@angular/core';

@Pipe({
	name: 'myuppercase'
})

export class MyUpperCase {
	
	tempStr: string = "";
	
	transform(value, args) {

		if(value != undefined ){
			this.tempStr = value;
		}

		return this.tempStr.toUpperCase();
	}
}

