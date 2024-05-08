import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NglCommonNotify } from '../common/notify/notify';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/icon";
import * as i3 from "../icons/svg";
export class NglToast extends NglCommonNotify {
    constructor(element, renderer, cd) {
        super(element, renderer, cd, 'toast');
    }
}
NglToast.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglToast, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglToast.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglToast, selector: "ngl-toast", exportAs: ["nglToast"], usesInheritance: true, ngImport: i0, template: "<span class=\"slds-assistive-text\">{{assistiveText || variant}}</span>\n<ngl-icon class=\"slds-m-right_small slds-no-flex slds-align-top\" *ngIf=\"iconName\" [iconName]=\"iconName\" size=\"small\" variant=\"\"></ngl-icon>\n<div class=\"slds-notify__content\">\n  <ng-content></ng-content>\n</div>\n<button class=\"slds-button slds-button_icon slds-notify__close slds-button_icon-inverse\" *ngIf=\"dismissible\" type=\"button\" (click)=\"close('button', $event)\">\n  <svg class=\"slds-button__icon slds-button__icon_large\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n</button>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglIcon, selector: "ngl-icon, [ngl-icon]", inputs: ["iconName", "variant", "size", "alternativeText", "svgClass"] }, { kind: "component", type: i3.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglToast, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-toast', changeDetection: ChangeDetectionStrategy.OnPush, exportAs: 'nglToast', template: "<span class=\"slds-assistive-text\">{{assistiveText || variant}}</span>\n<ngl-icon class=\"slds-m-right_small slds-no-flex slds-align-top\" *ngIf=\"iconName\" [iconName]=\"iconName\" size=\"small\" variant=\"\"></ngl-icon>\n<div class=\"slds-notify__content\">\n  <ng-content></ng-content>\n</div>\n<button class=\"slds-button slds-button_icon slds-notify__close slds-button_icon-inverse\" *ngIf=\"dismissible\" type=\"button\" (click)=\"close('button', $event)\">\n  <svg class=\"slds-button__icon slds-button__icon_large\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n</button>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi90b2FzdC90b2FzdC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3RvYXN0L3RvYXN0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBeUIsdUJBQXVCLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFRMUQsTUFBTSxPQUFPLFFBQVMsU0FBUSxlQUFlO0lBRTNDLFlBQVksT0FBbUIsRUFBRSxRQUFtQixFQUFFLEVBQXFCO1FBQ3pFLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOztxR0FKVSxRQUFRO3lGQUFSLFFBQVEsZ0dDVHJCLHdxQkFPUzsyRkRFSSxRQUFRO2tCQU5wQixTQUFTOytCQUNFLFdBQVcsbUJBRUosdUJBQXVCLENBQUMsTUFBTSxZQUNyQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdsQ29tbW9uTm90aWZ5IH0gZnJvbSAnLi4vY29tbW9uL25vdGlmeS9ub3RpZnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtdG9hc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ25nbFRvYXN0Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsVG9hc3QgZXh0ZW5kcyBOZ2xDb21tb25Ob3RpZnkge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlbmRlcmVyLCBjZCwgJ3RvYXN0Jyk7XG4gIH1cblxufVxuIiwiPHNwYW4gY2xhc3M9XCJzbGRzLWFzc2lzdGl2ZS10ZXh0XCI+e3thc3Npc3RpdmVUZXh0IHx8IHZhcmlhbnR9fTwvc3Bhbj5cbjxuZ2wtaWNvbiBjbGFzcz1cInNsZHMtbS1yaWdodF9zbWFsbCBzbGRzLW5vLWZsZXggc2xkcy1hbGlnbi10b3BcIiAqbmdJZj1cImljb25OYW1lXCIgW2ljb25OYW1lXT1cImljb25OYW1lXCIgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cIlwiPjwvbmdsLWljb24+XG48ZGl2IGNsYXNzPVwic2xkcy1ub3RpZnlfX2NvbnRlbnRcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48YnV0dG9uIGNsYXNzPVwic2xkcy1idXR0b24gc2xkcy1idXR0b25faWNvbiBzbGRzLW5vdGlmeV9fY2xvc2Ugc2xkcy1idXR0b25faWNvbi1pbnZlcnNlXCIgKm5nSWY9XCJkaXNtaXNzaWJsZVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2xvc2UoJ2J1dHRvbicsICRldmVudClcIj5cbiAgPHN2ZyBjbGFzcz1cInNsZHMtYnV0dG9uX19pY29uIHNsZHMtYnV0dG9uX19pY29uX2xhcmdlXCIgbmdsSWNvbk5hbWU9XCJ1dGlsaXR5OmNsb3NlXCI+PC9zdmc+PHNwYW4gY2xhc3M9XCJzbGRzLWFzc2lzdGl2ZS10ZXh0XCIgKm5nSWY9XCJjbG9zZUJ1dHRvbkFzc2lzdGl2ZVRleHRcIj57e2Nsb3NlQnV0dG9uQXNzaXN0aXZlVGV4dH19PC9zcGFuPlxuPC9idXR0b24+Il19