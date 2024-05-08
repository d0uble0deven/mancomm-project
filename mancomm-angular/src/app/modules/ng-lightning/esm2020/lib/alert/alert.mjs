import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NglCommonNotify } from '../common/notify/notify';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/icon";
import * as i3 from "../icons/svg";
export class NglAlert extends NglCommonNotify {
    constructor(element, renderer, cd) {
        super(element, renderer, cd, 'alert');
    }
}
NglAlert.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAlert, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglAlert.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglAlert, selector: "ngl-alert", exportAs: ["nglAlert"], usesInheritance: true, ngImport: i0, template: "<span class=\"slds-assistive-text\">{{assistiveText || variant}}</span>\n<ngl-icon class=\"slds-m-right_x-small\" *ngIf=\"iconName\" [iconName]=\"iconName\" size=\"x-small\" variant=\"\"></ngl-icon>\n<div class=\"slds-notify__content\">\n  <ng-content></ng-content>\n</div>\n<button class=\"slds-button slds-button_icon slds-notify__close slds-button_icon-inverse\" *ngIf=\"dismissible\" type=\"button\" (click)=\"close('button', $event)\">\n  <svg class=\"slds-button__icon\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n</button>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglIcon, selector: "ngl-icon, [ngl-icon]", inputs: ["iconName", "variant", "size", "alternativeText", "svgClass"] }, { kind: "component", type: i3.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAlert, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-alert', changeDetection: ChangeDetectionStrategy.OnPush, exportAs: 'nglAlert', template: "<span class=\"slds-assistive-text\">{{assistiveText || variant}}</span>\n<ngl-icon class=\"slds-m-right_x-small\" *ngIf=\"iconName\" [iconName]=\"iconName\" size=\"x-small\" variant=\"\"></ngl-icon>\n<div class=\"slds-notify__content\">\n  <ng-content></ng-content>\n</div>\n<button class=\"slds-button slds-button_icon slds-notify__close slds-button_icon-inverse\" *ngIf=\"dismissible\" type=\"button\" (click)=\"close('button', $event)\">\n  <svg class=\"slds-button__icon\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n</button>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9hbGVydC9hbGVydC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2FsZXJ0L2FsZXJ0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBeUIsdUJBQXVCLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFRMUQsTUFBTSxPQUFPLFFBQVMsU0FBUSxlQUFlO0lBRTNDLFlBQVksT0FBbUIsRUFBRSxRQUFtQixFQUFFLEVBQXFCO1FBQ3pFLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOztxR0FKVSxRQUFRO3lGQUFSLFFBQVEsZ0dDVHJCLHduQkFPUzsyRkRFSSxRQUFRO2tCQU5wQixTQUFTOytCQUNFLFdBQVcsbUJBRUosdUJBQXVCLENBQUMsTUFBTSxZQUNyQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdsQ29tbW9uTm90aWZ5IH0gZnJvbSAnLi4vY29tbW9uL25vdGlmeS9ub3RpZnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ25nbEFsZXJ0Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQWxlcnQgZXh0ZW5kcyBOZ2xDb21tb25Ob3RpZnkge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlbmRlcmVyLCBjZCwgJ2FsZXJ0Jyk7XG4gIH1cblxufVxuIiwiPHNwYW4gY2xhc3M9XCJzbGRzLWFzc2lzdGl2ZS10ZXh0XCI+e3thc3Npc3RpdmVUZXh0IHx8IHZhcmlhbnR9fTwvc3Bhbj5cbjxuZ2wtaWNvbiBjbGFzcz1cInNsZHMtbS1yaWdodF94LXNtYWxsXCIgKm5nSWY9XCJpY29uTmFtZVwiIFtpY29uTmFtZV09XCJpY29uTmFtZVwiIHNpemU9XCJ4LXNtYWxsXCIgdmFyaWFudD1cIlwiPjwvbmdsLWljb24+XG48ZGl2IGNsYXNzPVwic2xkcy1ub3RpZnlfX2NvbnRlbnRcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48YnV0dG9uIGNsYXNzPVwic2xkcy1idXR0b24gc2xkcy1idXR0b25faWNvbiBzbGRzLW5vdGlmeV9fY2xvc2Ugc2xkcy1idXR0b25faWNvbi1pbnZlcnNlXCIgKm5nSWY9XCJkaXNtaXNzaWJsZVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2xvc2UoJ2J1dHRvbicsICRldmVudClcIj5cbiAgPHN2ZyBjbGFzcz1cInNsZHMtYnV0dG9uX19pY29uXCIgbmdsSWNvbk5hbWU9XCJ1dGlsaXR5OmNsb3NlXCI+PC9zdmc+PHNwYW4gY2xhc3M9XCJzbGRzLWFzc2lzdGl2ZS10ZXh0XCIgKm5nSWY9XCJjbG9zZUJ1dHRvbkFzc2lzdGl2ZVRleHRcIj57e2Nsb3NlQnV0dG9uQXNzaXN0aXZlVGV4dH19PC9zcGFuPlxuPC9idXR0b24+Il19