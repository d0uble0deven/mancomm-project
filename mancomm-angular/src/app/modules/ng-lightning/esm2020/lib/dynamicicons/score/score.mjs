import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseDynamicIconComponent } from '../base-dynamic-icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NglDynamicIconScore extends BaseDynamicIconComponent {
    set option(option) {
        this._option = option || 'positive';
    }
    get option() {
        return this._option;
    }
}
NglDynamicIconScore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDynamicIconScore, deps: null, target: i0.ɵɵFactoryTarget.Component });
NglDynamicIconScore.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglDynamicIconScore, selector: "ngl-dynamic-icon-score", inputs: { option: "option" }, usesInheritance: true, ngImport: i0, template: "<span class=\"slds-icon-score\" [attr.data-slds-state]=\"option\">\n  <svg class=\"slds-icon-score__positive\" viewBox=\"0 0 5 5\" aria-hidden=\"true\">\n    <circle cx=\"50%\" cy=\"50%\" r=\"1.875\"></circle>\n  </svg>\n  <svg class=\"slds-icon-score__negative\" viewBox=\"0 0 5 5\" aria-hidden=\"true\">\n    <circle cx=\"50%\" cy=\"50%\" r=\"1.875\"></circle>\n  </svg><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span></span>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDynamicIconScore, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-dynamic-icon-score', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"slds-icon-score\" [attr.data-slds-state]=\"option\">\n  <svg class=\"slds-icon-score__positive\" viewBox=\"0 0 5 5\" aria-hidden=\"true\">\n    <circle cx=\"50%\" cy=\"50%\" r=\"1.875\"></circle>\n  </svg>\n  <svg class=\"slds-icon-score__negative\" viewBox=\"0 0 5 5\" aria-hidden=\"true\">\n    <circle cx=\"50%\" cy=\"50%\" r=\"1.875\"></circle>\n  </svg><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span></span>" }]
        }], propDecorators: { option: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9keW5hbWljaWNvbnMvc2NvcmUvc2NvcmUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9keW5hbWljaWNvbnMvc2NvcmUvc2NvcmUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBU2hFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx3QkFBd0I7SUFFL0QsSUFBYSxNQUFNLENBQUMsTUFBaUM7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksVUFBVSxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Z0hBUFUsbUJBQW1CO29HQUFuQixtQkFBbUIsbUhDVmhDLHFkQU1tRzsyRkRJdEYsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLHdCQUF3QixtQkFFakIsdUJBQXVCLENBQUMsTUFBTTs4QkFJbEMsTUFBTTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRHluYW1pY0ljb25Db21wb25lbnQgfSBmcm9tICcuLi9iYXNlLWR5bmFtaWMtaWNvbic7XG5cbmV4cG9ydCB0eXBlIE5nbER5bmFtaWNJY29uU2NvcmVPcHRpb24gPSAncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWR5bmFtaWMtaWNvbi1zY29yZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY29yZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbER5bmFtaWNJY29uU2NvcmUgZXh0ZW5kcyBCYXNlRHluYW1pY0ljb25Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHNldCBvcHRpb24ob3B0aW9uOiBOZ2xEeW5hbWljSWNvblNjb3JlT3B0aW9uKSB7XG4gICAgdGhpcy5fb3B0aW9uID0gb3B0aW9uIHx8ICdwb3NpdGl2ZSc7XG4gIH1cbiAgZ2V0IG9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3B0aW9uOiBOZ2xEeW5hbWljSWNvblNjb3JlT3B0aW9uO1xuXG59XG4iLCI8c3BhbiBjbGFzcz1cInNsZHMtaWNvbi1zY29yZVwiIFthdHRyLmRhdGEtc2xkcy1zdGF0ZV09XCJvcHRpb25cIj5cbiAgPHN2ZyBjbGFzcz1cInNsZHMtaWNvbi1zY29yZV9fcG9zaXRpdmVcIiB2aWV3Qm94PVwiMCAwIDUgNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgIDxjaXJjbGUgY3g9XCI1MCVcIiBjeT1cIjUwJVwiIHI9XCIxLjg3NVwiPjwvY2lyY2xlPlxuICA8L3N2Zz5cbiAgPHN2ZyBjbGFzcz1cInNsZHMtaWNvbi1zY29yZV9fbmVnYXRpdmVcIiB2aWV3Qm94PVwiMCAwIDUgNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgIDxjaXJjbGUgY3g9XCI1MCVcIiBjeT1cIjUwJVwiIHI9XCIxLjg3NVwiPjwvY2lyY2xlPlxuICA8L3N2Zz48c3BhbiBjbGFzcz1cInNsZHMtYXNzaXN0aXZlLXRleHRcIiAqbmdJZj1cImFsdGVybmF0aXZlVGV4dFwiPnt7YWx0ZXJuYXRpdmVUZXh0fX08L3NwYW4+PC9zcGFuPiJdfQ==