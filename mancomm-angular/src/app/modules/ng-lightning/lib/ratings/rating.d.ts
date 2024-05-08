import { EventEmitter, TemplateRef, OnInit, AfterContentInit } from '@angular/core';
import { NglRatingIconTemplate } from './icons';
import { NglRatingConfig } from './config';
import * as i0 from "@angular/core";
export declare class NglRating implements OnInit, AfterContentInit {
    range: number[];
    currentRate: number;
    icon: string;
    size: 'x-small' | 'small' | 'large';
    readonly: boolean;
    set rate(rate: number);
    defaultTemplate: TemplateRef<any>;
    iconTemplate: NglRatingIconTemplate;
    set max(max: number | string);
    get max(): number | string;
    colorOn: string;
    colorOff: string;
    rateChange: EventEmitter<number>;
    hover: EventEmitter<number>;
    _template: TemplateRef<any>;
    private _max;
    private inputRate;
    constructor(defaultConfig: NglRatingConfig);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    update(value: number): void;
    enter(value: number): void;
    getFill(value: number): number;
    reset(): void;
    keyboardIncrease(evt: KeyboardEvent): void;
    keyboardDecrease(evt: KeyboardEvent): void;
    get ariaValuenow(): number;
    private setRange;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglRating, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglRating, "ngl-rating", never, { "icon": "icon"; "size": "size"; "readonly": "isReadonly"; "rate": "rate"; "max": "max"; "colorOn": "colorOn"; "colorOff": "colorOff"; }, { "rateChange": "rateChange"; "hover": "hover"; }, ["iconTemplate"], never, false, never>;
}
