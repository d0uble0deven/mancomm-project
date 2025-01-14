import { TemplateRef, Renderer2, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NglCarouselImage {
    private el;
    private renderer;
    /**
     * 	The path to the image.
     */
    src: string;
    /**
     * Text for the label that's displayed under the image.
     */
    header: string;
    /**
     * Text displayed under the header.
     */
    description: string | TemplateRef<any>;
    /**
     * Assistive text for the image.
     */
    alternativeText: string;
    uid: string;
    set labelledby(labelledby: string);
    set active(active: boolean);
    constructor(el: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<NglCarouselImage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglCarouselImage, "ngl-carousel-image", never, { "src": "src"; "header": "header"; "description": "description"; "alternativeText": "alternativeText"; }, {}, never, never, false, never>;
}
