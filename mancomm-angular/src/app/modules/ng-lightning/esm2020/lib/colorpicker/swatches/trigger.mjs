import { Directive, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class NglColorpickerSwatchTrigger {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.selectedChange = new EventEmitter();
        this.renderer.addClass(this.el.nativeElement, 'slds-color-picker__swatch-trigger');
        this.renderer.setAttribute(this.el.nativeElement, 'role', 'option');
    }
    onSelect() {
        return this.selectedChange.emit();
    }
    focus() {
        this.el.nativeElement.focus();
        this.onSelect();
    }
}
NglColorpickerSwatchTrigger.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerSwatchTrigger, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
NglColorpickerSwatchTrigger.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglColorpickerSwatchTrigger, selector: "[nglColorpickerSwatchTrigger]", inputs: { selected: "selected" }, outputs: { selectedChange: "selectedChange" }, host: { listeners: { "click": "onSelect()" }, properties: { "class.ngl-color-picker__swatch-selected": "this.selected" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerSwatchTrigger, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nglColorpickerSwatchTrigger]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { selected: [{
                type: HostBinding,
                args: ['class.ngl-color-picker__swatch-selected']
            }, {
                type: Input
            }], selectedChange: [{
                type: Output
            }], onSelect: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2NvbG9ycGlja2VyL3N3YXRjaGVzL3RyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBeUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLekgsTUFBTSxPQUFPLDJCQUEyQjtJQU90QyxZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFGckQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzVDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFHRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7O3dIQXBCVSwyQkFBMkI7NEdBQTNCLDJCQUEyQjsyRkFBM0IsMkJBQTJCO2tCQUh2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7aUJBQzFDO3lIQUlVLFFBQVE7c0JBRGhCLFdBQVc7dUJBQUMseUNBQXlDOztzQkFDckQsS0FBSztnQkFFSSxjQUFjO3NCQUF2QixNQUFNO2dCQVFQLFFBQVE7c0JBRFAsWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdsQ29sb3JwaWNrZXJTd2F0Y2hUcmlnZ2VyXScsXG59KVxuZXhwb3J0IGNsYXNzIE5nbENvbG9ycGlja2VyU3dhdGNoVHJpZ2dlciB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZ2wtY29sb3ItcGlja2VyX19zd2F0Y2gtc2VsZWN0ZWQnKVxuICBASW5wdXQoKSBzZWxlY3RlZDogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzbGRzLWNvbG9yLXBpY2tlcl9fc3dhdGNoLXRyaWdnZXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdyb2xlJywgJ29wdGlvbicpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvblNlbGVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KCk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLm9uU2VsZWN0KCk7XG4gIH1cblxufVxuIl19