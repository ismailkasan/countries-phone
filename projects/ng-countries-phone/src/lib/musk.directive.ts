/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
    selector: 'input[customMusk]'
})
export class MuskDirective {

    constructor(private _el: ElementRef) { }
    @HostListener('keyup', ['$event'])
    onKeyDown(e: KeyboardEvent) {
        console.log(e);
        var myMask = "(___) ___-____";
        var myText = this._el.nativeElement.value;
        var myNumbers = [];
        var myOutPut = ""
        var theLastPos = 1;
        //get numbers
        for (var i = 0; i < myText.length; i++) {
            if (!isNaN(Number(myText.charAt(i))) && myText.charAt(i) != " ") {
                myNumbers.push(myText.charAt(i));
            }
        }
        //write over mask
        for (var j = 0; j < myMask.length; j++) {
            if (myMask.charAt(j) == "_") { //replace "_" by a number 
                if (myNumbers.length == 0)
                    myOutPut = myOutPut + myMask.charAt(j);
                else {
                    myOutPut = myOutPut + myNumbers.shift();
                    theLastPos = j + 1; //set caret position
                }
            } else {
                myOutPut = myOutPut + myMask.charAt(j);
            }
        }
        this._el.nativeElement.value = myOutPut;
    }

}
