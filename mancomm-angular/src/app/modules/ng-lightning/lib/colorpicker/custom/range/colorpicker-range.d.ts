import { ElementRef, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { IHSV } from '../../util';
import * as i0 from "@angular/core";
export declare class NglColorpickerRange implements AfterViewInit, OnDestroy {
    private document;
    set hsv(hsv: IHSV);
    get hsv(): IHSV;
    hsvChange: EventEmitter<IHSV>;
    rangeIndicator: ElementRef;
    rangeIndicatorContainer: ElementRef;
    uid: string;
    get hex(): string;
    private _hsv;
    private dragSubscription;
    constructor(document: any);
    ngAfterViewInit(): void;
    hueSliderChange(value: number): void;
    rangeIndicatorKeyboard(evt: KeyboardEvent): void;
    indicatorStyle(): {
        'bottom.%': number;
        'left.%': number;
        background: string;
    };
    ngOnDestroy(): void;
    private emitChange;
    private limit;
    private setupDrag;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglColorpickerRange, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglColorpickerRange, "ngl-colorpicker-range", never, { "hsv": "hsv"; }, { "hsvChange": "hsvChange"; }, never, never, false, never>;
}
