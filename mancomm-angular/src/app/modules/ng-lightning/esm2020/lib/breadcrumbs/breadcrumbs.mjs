import { Component, ChangeDetectionStrategy, Input, ContentChildren } from '@angular/core';
import { NglBreadcrumb } from './breadcrumb';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NglBreadcrumbs {
}
NglBreadcrumbs.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglBreadcrumbs, deps: [], target: i0.ɵɵFactoryTarget.Component });
NglBreadcrumbs.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglBreadcrumbs, selector: "ngl-breadcrumbs", inputs: { assistiveText: "assistiveText" }, queries: [{ propertyName: "breadcrumbs", predicate: NglBreadcrumb }], ngImport: i0, template: "\n<nav role=\"navigation\" [attr.aria-label]=\"assistiveText\">\n  <ol class=\"slds-breadcrumb slds-list_horizontal slds-wrap\">\n    <li class=\"slds-breadcrumb__item\" *ngFor=\"let b of breadcrumbs\">\n      <ng-template [ngTemplateOutlet]=\"b.templateRef\"></ng-template>\n    </li>\n  </ol>\n</nav>", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglBreadcrumbs, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-breadcrumbs', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<nav role=\"navigation\" [attr.aria-label]=\"assistiveText\">\n  <ol class=\"slds-breadcrumb slds-list_horizontal slds-wrap\">\n    <li class=\"slds-breadcrumb__item\" *ngFor=\"let b of breadcrumbs\">\n      <ng-template [ngTemplateOutlet]=\"b.templateRef\"></ng-template>\n    </li>\n  </ol>\n</nav>" }]
        }], propDecorators: { assistiveText: [{
                type: Input
            }], breadcrumbs: [{
                type: ContentChildren,
                args: [NglBreadcrumb]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9icmVhZGNydW1icy9icmVhZGNydW1icy50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQU83QyxNQUFNLE9BQU8sY0FBYzs7MkdBQWQsY0FBYzsrRkFBZCxjQUFjLCtIQUVSLGFBQWEsNkJDVmhDLGdUQU9NOzJGRENPLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0MsaUJBQWlCLG1CQUVWLHVCQUF1QixDQUFDLE1BQU07OEJBR3JDLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQzBCLFdBQVc7c0JBQTFDLGVBQWU7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdsQnJlYWRjcnVtYiB9IGZyb20gJy4vYnJlYWRjcnVtYic7XG5cbkBDb21wb25lbnQoe1xuIHNlbGVjdG9yOiAnbmdsLWJyZWFkY3J1bWJzJyxcbiB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuaHRtbCcsXG4gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbEJyZWFkY3J1bWJzIHtcbiAgQElucHV0KCkgYXNzaXN0aXZlVGV4dDogc3RyaW5nO1xuICBAQ29udGVudENoaWxkcmVuKE5nbEJyZWFkY3J1bWIpIGJyZWFkY3J1bWJzOiBRdWVyeUxpc3Q8TmdsQnJlYWRjcnVtYj47XG59XG4iLCJcbjxuYXYgcm9sZT1cIm5hdmlnYXRpb25cIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFzc2lzdGl2ZVRleHRcIj5cbiAgPG9sIGNsYXNzPVwic2xkcy1icmVhZGNydW1iIHNsZHMtbGlzdF9ob3Jpem9udGFsIHNsZHMtd3JhcFwiPlxuICAgIDxsaSBjbGFzcz1cInNsZHMtYnJlYWRjcnVtYl9faXRlbVwiICpuZ0Zvcj1cImxldCBiIG9mIGJyZWFkY3J1bWJzXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYi50ZW1wbGF0ZVJlZlwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9saT5cbiAgPC9vbD5cbjwvbmF2PiJdfQ==