import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/radio";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/progress-spinner";
import * as i6 from "@angular/material/slider";
function ProgressSpinnerConfigurableExample_section_22_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "label", 2);
    i0.ɵɵtext(2, "Progress:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slider", 11);
    i0.ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_section_22_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.value);
} }
/**
 * @title Configurable progress spinner
 */
let ProgressSpinnerConfigurableExample = /** @class */ (() => {
    class ProgressSpinnerConfigurableExample {
        constructor() {
            this.color = 'primary';
            this.mode = 'determinate';
            this.value = 50;
        }
    }
    ProgressSpinnerConfigurableExample.ɵfac = function ProgressSpinnerConfigurableExample_Factory(t) { return new (t || ProgressSpinnerConfigurableExample)(); };
    ProgressSpinnerConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressSpinnerConfigurableExample, selectors: [["progress-spinner-configurable-example"]], decls: 28, vars: 6, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-margin", 3, "color", "mode", "value"], [1, "example-margin", 3, "ngModel", "ngModelChange"]], template: function ProgressSpinnerConfigurableExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-card");
            i0.ɵɵelementStart(1, "mat-card-content");
            i0.ɵɵelementStart(2, "h2", 0);
            i0.ɵɵtext(3, "Progress spinner configuration");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "section", 1);
            i0.ɵɵelementStart(5, "label", 2);
            i0.ɵɵtext(6, "Color:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-radio-group", 3);
            i0.ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
            i0.ɵɵelementStart(8, "mat-radio-button", 4);
            i0.ɵɵtext(9, " Primary ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-radio-button", 5);
            i0.ɵɵtext(11, " Accent ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-radio-button", 6);
            i0.ɵɵtext(13, " Warn ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "section", 1);
            i0.ɵɵelementStart(15, "label", 2);
            i0.ɵɵtext(16, "Mode:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "mat-radio-group", 3);
            i0.ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_Template_mat_radio_group_ngModelChange_17_listener($event) { return ctx.mode = $event; });
            i0.ɵɵelementStart(18, "mat-radio-button", 7);
            i0.ɵɵtext(19, " Determinate ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-radio-button", 8);
            i0.ɵɵtext(21, " Indeterminate ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(22, ProgressSpinnerConfigurableExample_section_22_Template, 4, 1, "section", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "mat-card");
            i0.ɵɵelementStart(24, "mat-card-content");
            i0.ɵɵelementStart(25, "h2", 0);
            i0.ɵɵtext(26, "Result");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(27, "mat-progress-spinner", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.color);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngModel", ctx.mode);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.mode === "determinate");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("color", ctx.color)("mode", ctx.mode)("value", ctx.value);
        } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatRadioGroup, i3.NgControlStatus, i3.NgModel, i2.MatRadioButton, i4.NgIf, i5.MatProgressSpinner, i6.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
    return ProgressSpinnerConfigurableExample;
})();
export { ProgressSpinnerConfigurableExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProgressSpinnerConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'progress-spinner-configurable-example',
                templateUrl: 'progress-spinner-configurable-example.html',
                styleUrls: ['progress-spinner-configurable-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUvcHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUvcHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUMrQnBDLGtDQUNFO0lBQUEsZ0NBQThCO0lBQUEseUJBQVM7SUFBQSxpQkFBUTtJQUMvQyxzQ0FBb0U7SUFBakMsdU9BQW1CO0lBQUMsaUJBQWE7SUFDdEUsaUJBQVU7OztJQUQyQixlQUFtQjtJQUFuQixzQ0FBbUI7O0FEN0I1RDs7R0FFRztBQUNIO0lBQUEsTUFLYSxrQ0FBa0M7UUFML0M7WUFNRSxVQUFLLEdBQWlCLFNBQVMsQ0FBQztZQUNoQyxTQUFJLEdBQXdCLGFBQWEsQ0FBQztZQUMxQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ1o7O3dIQUpZLGtDQUFrQzsyRUFBbEMsa0NBQWtDO1lDWi9DLGdDQUNFO1lBQUEsd0NBQ0U7WUFBQSw2QkFBdUI7WUFBQSw4Q0FBOEI7WUFBQSxpQkFBSztZQUUxRCxrQ0FDRTtZQUFBLGdDQUE4QjtZQUFBLHNCQUFNO1lBQUEsaUJBQVE7WUFDNUMsMENBQ0U7WUFEZSxvS0FBbUI7WUFDbEMsMkNBQ0U7WUFBQSx5QkFDRjtZQUFBLGlCQUFtQjtZQUNuQiw0Q0FDRTtZQUFBLHlCQUNGO1lBQUEsaUJBQW1CO1lBQ25CLDRDQUNFO1lBQUEsdUJBQ0Y7WUFBQSxpQkFBbUI7WUFDckIsaUJBQWtCO1lBQ3BCLGlCQUFVO1lBRVYsbUNBQ0U7WUFBQSxpQ0FBOEI7WUFBQSxzQkFBSztZQUFBLGlCQUFRO1lBQzNDLDJDQUNFO1lBRGUsb0tBQWtCO1lBQ2pDLDRDQUNFO1lBQUEsOEJBQ0Y7WUFBQSxpQkFBbUI7WUFDbkIsNENBQ0U7WUFBQSxnQ0FDRjtZQUFBLGlCQUFtQjtZQUNyQixpQkFBa0I7WUFDcEIsaUJBQVU7WUFFViw2RkFDRTtZQUdKLGlCQUFtQjtZQUNyQixpQkFBVztZQUNYLGlDQUNFO1lBQUEseUNBQ0U7WUFBQSw4QkFBdUI7WUFBQSx1QkFBTTtZQUFBLGlCQUFLO1lBRWxDLDRDQUt1QjtZQUN6QixpQkFBbUI7WUFDckIsaUJBQVc7O1lBMUNZLGVBQW1CO1lBQW5CLG1DQUFtQjtZQWVuQixnQkFBa0I7WUFBbEIsa0NBQWtCO1lBVUosZUFBOEI7WUFBOUIsaURBQThCO1lBWTNELGVBQWU7WUFBZixpQ0FBZSxrQkFBQSxvQkFBQTs7NkNEM0N2QjtLQWdCQztTQUpZLGtDQUFrQztrREFBbEMsa0NBQWtDO2NBTDlDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUNBQXVDO2dCQUNqRCxXQUFXLEVBQUUsNENBQTRDO2dCQUN6RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQzthQUN6RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7UHJvZ3Jlc3NTcGlubmVyTW9kZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5cbi8qKlxuICogQHRpdGxlIENvbmZpZ3VyYWJsZSBwcm9ncmVzcyBzcGlubmVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwcm9ncmVzcy1zcGlubmVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1NwaW5uZXJDb25maWd1cmFibGVFeGFtcGxlIHtcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcbiAgbW9kZTogUHJvZ3Jlc3NTcGlubmVyTW9kZSA9ICdkZXRlcm1pbmF0ZSc7XG4gIHZhbHVlID0gNTA7XG59XG4iLCI8bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxoMiBjbGFzcz1cImV4YW1wbGUtaDJcIj5Qcm9ncmVzcyBzcGlubmVyIGNvbmZpZ3VyYXRpb248L2gyPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+Q29sb3I6PC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJjb2xvclwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgUHJpbWFyeVxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImFjY2VudFwiPlxuICAgICAgICAgIEFjY2VudFxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cIndhcm5cIj5cbiAgICAgICAgICBXYXJuXG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPk1vZGU6PC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJtb2RlXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImRldGVybWluYXRlXCI+XG4gICAgICAgICAgRGV0ZXJtaW5hdGVcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJpbmRldGVybWluYXRlXCI+XG4gICAgICAgICAgSW5kZXRlcm1pbmF0ZVxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiICpuZ0lmPVwibW9kZSA9PT0gJ2RldGVybWluYXRlJ1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5Qcm9ncmVzczo8L2xhYmVsPlxuICAgICAgPG1hdC1zbGlkZXIgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwidmFsdWVcIj48L21hdC1zbGlkZXI+XG4gICAgPC9zZWN0aW9uPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuPG1hdC1jYXJkPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8aDIgY2xhc3M9XCJleGFtcGxlLWgyXCI+UmVzdWx0PC9oMj5cblxuICAgIDxtYXQtcHJvZ3Jlc3Mtc3Bpbm5lclxuICAgICAgICBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCJcbiAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgW21vZGVdPVwibW9kZVwiXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiPlxuICAgIDwvbWF0LXByb2dyZXNzLXNwaW5uZXI+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG4iXX0=