import { ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';
import { HostService } from '../common/host/host.service';
import * as i0 from "@angular/core";
export declare class NglSpinner implements OnInit, OnChanges {
    private element;
    private renderer;
    private hostService;
    /**
     * The size of the spinner.
     */
    size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    /**
     * The variant changes the appearance of the spinner.
     */
    variant: 'brand' | 'inverse';
    /**
     * The alternative text used to describe the reason for the wait and need for a spinner.
     */
    alternativeText: string;
    constructor(element: ElementRef, renderer: Renderer2, hostService: HostService);
    ngOnInit(): void;
    ngOnChanges(): void;
    private setHostClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglSpinner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglSpinner, "ngl-spinner", never, { "size": "size"; "variant": "variant"; "alternativeText": "alternativeText"; }, {}, never, never, false, never>;
}
