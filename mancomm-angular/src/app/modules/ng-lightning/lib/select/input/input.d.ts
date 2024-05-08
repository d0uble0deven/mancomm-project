import { ElementRef, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NglSelectInput {
    private el;
    private renderer;
    ɵRequiredSubject: BehaviorSubject<boolean>;
    describedBy: string;
    set required(required: any);
    constructor(el: ElementRef, renderer: Renderer2);
    get id(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglSelectInput, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglSelectInput, "select[ngl]", never, { "required": "required"; }, {}, never, never, false, never>;
}
