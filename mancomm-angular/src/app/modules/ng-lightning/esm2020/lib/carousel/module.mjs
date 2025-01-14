import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglIconsModule } from '../icons/module';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglCarousel } from './carousel';
import { NglCarouselImage } from './carousel-image';
import { NglCarouselIndicator } from './carousel-indicator';
import * as i0 from "@angular/core";
const DIRECTIVES = [
    NglCarousel,
    NglCarouselImage,
];
export class NglCarouselModule {
}
NglCarouselModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglCarouselModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglCarouselModule, declarations: [NglCarousel,
        NglCarouselImage, NglCarouselIndicator], imports: [CommonModule, NglIconsModule, NglInternalOutletModule], exports: [NglCarousel,
        NglCarouselImage] });
NglCarouselModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCarouselModule, imports: [CommonModule, NglIconsModule, NglInternalOutletModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...DIRECTIVES, NglCarouselIndicator],
                    exports: DIRECTIVES,
                    imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2Fyb3VzZWwvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUU1RCxNQUFNLFVBQVUsR0FBRztJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ2pCLENBQUM7QUFPRixNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBVDVCLFdBQVc7UUFDWCxnQkFBZ0IsRUFJYyxvQkFBb0IsYUFFeEMsWUFBWSxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsYUFQL0QsV0FBVztRQUNYLGdCQUFnQjsrR0FRTCxpQkFBaUIsWUFGbEIsWUFBWSxFQUFFLGNBQWMsRUFBRSx1QkFBdUI7MkZBRXBELGlCQUFpQjtrQkFMN0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQztvQkFDbkQsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsdUJBQXVCLENBQUM7aUJBQ2pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2xJY29uc01vZHVsZSB9IGZyb20gJy4uL2ljb25zL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSB9IGZyb20gJy4uL3V0aWwvb3V0bGV0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IE5nbENhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQgeyBOZ2xDYXJvdXNlbEltYWdlIH0gZnJvbSAnLi9jYXJvdXNlbC1pbWFnZSc7XG5pbXBvcnQgeyBOZ2xDYXJvdXNlbEluZGljYXRvciB9IGZyb20gJy4vY2Fyb3VzZWwtaW5kaWNhdG9yJztcblxuY29uc3QgRElSRUNUSVZFUyA9IFtcbiAgTmdsQ2Fyb3VzZWwsXG4gIE5nbENhcm91c2VsSW1hZ2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsuLi5ESVJFQ1RJVkVTLCBOZ2xDYXJvdXNlbEluZGljYXRvcl0sXG4gIGV4cG9ydHM6IERJUkVDVElWRVMsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5nbEljb25zTW9kdWxlLCBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbENhcm91c2VsTW9kdWxlIHt9XG4iXX0=