import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/stepper";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
function StepperVerticalExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperVerticalExample_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperVerticalExample_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper vertical
 */
let StepperVerticalExample = /** @class */ (() => {
    class StepperVerticalExample {
        constructor(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.isLinear = false;
        }
        ngOnInit() {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', Validators.required]
            });
        }
    }
    StepperVerticalExample.ɵfac = function StepperVerticalExample_Factory(t) { return new (t || StepperVerticalExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperVerticalExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperVerticalExample, selectors: [["stepper-vertical-example"]], decls: 35, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperVerticalExample_Template(rf, ctx) { if (rf & 1) {
            const _r4 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function StepperVerticalExample_Template_button_click_0_listener() { return ctx.isLinear = !ctx.isLinear; });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-vertical-stepper", 1, 2);
            i0.ɵɵelementStart(4, "mat-step", 3);
            i0.ɵɵelementStart(5, "form", 4);
            i0.ɵɵtemplate(6, StepperVerticalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementStart(7, "mat-form-field");
            i0.ɵɵelementStart(8, "mat-label");
            i0.ɵɵtext(9, "Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div");
            i0.ɵɵelementStart(12, "button", 7);
            i0.ɵɵtext(13, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-step", 3);
            i0.ɵɵelementStart(15, "form", 4);
            i0.ɵɵtemplate(16, StepperVerticalExample_ng_template_16_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementStart(17, "mat-form-field");
            i0.ɵɵelementStart(18, "mat-label");
            i0.ɵɵtext(19, "Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(20, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div");
            i0.ɵɵelementStart(22, "button", 9);
            i0.ɵɵtext(23, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 7);
            i0.ɵɵtext(25, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "mat-step");
            i0.ɵɵtemplate(27, StepperVerticalExample_ng_template_27_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementStart(28, "p");
            i0.ɵɵtext(29, "You are now done.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div");
            i0.ɵɵelementStart(31, "button", 9);
            i0.ɵɵtext(32, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "button", 10);
            i0.ɵɵlistener("click", function StepperVerticalExample_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r4); const _r0 = i0.ɵɵreference(3); return _r0.reset(); });
            i0.ɵɵtext(34, "Reset");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("linear", ctx.isLinear);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [i2.MatButton, i3.MatVerticalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [".mat-stepper-vertical[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    return StepperVerticalExample;
})();
export { StepperVerticalExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperVerticalExample, [{
        type: Component,
        args: [{
                selector: 'stepper-vertical-example',
                templateUrl: 'stepper-vertical-example.html',
                styleUrls: ['stepper-vertical-example.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci12ZXJ0aWNhbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc3RlcHBlci9zdGVwcGVyLXZlcnRpY2FsL3N0ZXBwZXItdmVydGljYWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci12ZXJ0aWNhbC9zdGVwcGVyLXZlcnRpY2FsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0lDS2xDLGtDQUFrQjs7O0lBWWxCLHFDQUFxQjs7O0lBYXZCLG9CQUFJOztBRDVCbEM7O0dBRUc7QUFDSDtJQUFBLE1BS2Esc0JBQXNCO1FBS2pDLFlBQW9CLFlBQXlCO1lBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1lBSjdDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFJK0IsQ0FBQztRQUVqRCxRQUFRO1lBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDNUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDckMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDN0MsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDdEMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7Z0dBZFUsc0JBQXNCOytEQUF0QixzQkFBc0I7O1lDWG5DLGlDQUNFO1lBRHdCLG1JQUE4QjtZQUN0RCxZQUNGO1lBQUEsaUJBQVM7WUFDVCxrREFDRTtZQUFBLG1DQUNFO1lBQUEsK0JBQ0U7WUFBQSx1RkFBMEI7WUFDMUIsc0NBQ0U7WUFBQSxpQ0FBVztZQUFBLG9CQUFJO1lBQUEsaUJBQVk7WUFDM0IsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFDakIsNEJBQ0U7WUFBQSxrQ0FBa0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ2pELGlCQUFNO1lBQ1IsaUJBQU87WUFDVCxpQkFBVztZQUNYLG9DQUNFO1lBQUEsZ0NBQ0U7WUFBQSx5RkFBMEI7WUFDMUIsdUNBQ0U7WUFBQSxrQ0FBVztZQUFBLHdCQUFPO1lBQUEsaUJBQVk7WUFDOUIsNEJBRUY7WUFBQSxpQkFBaUI7WUFDakIsNEJBQ0U7WUFBQSxrQ0FBc0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ25ELGtDQUFrQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDakQsaUJBQU07WUFDUixpQkFBTztZQUNULGlCQUFXO1lBQ1gsaUNBQ0U7WUFBQSx5RkFBMEI7WUFDMUIsMEJBQUc7WUFBQSxrQ0FBaUI7WUFBQSxpQkFBSTtZQUN4Qiw0QkFDRTtZQUFBLGtDQUFzQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDbkQsbUNBQTZDO1lBQTFCLDBKQUFTLFdBQWUsSUFBQztZQUFDLHNCQUFLO1lBQUEsaUJBQVM7WUFDN0QsaUJBQU07WUFDUixpQkFBVztZQUNiLGlCQUF1Qjs7WUFyQ3JCLGVBQ0Y7WUFERSw4RkFDRjtZQUNzQixlQUFtQjtZQUFuQixxQ0FBbUI7WUFDN0IsZUFBOEI7WUFBOUIsZ0RBQThCO1lBQ2hDLGVBQTRCO1lBQTVCLDhDQUE0QjtZQVcxQixlQUErQjtZQUEvQixpREFBK0I7WUFDakMsZUFBNkI7WUFBN0IsK0NBQTZCOztpQ0RqQnZDO0tBMEJDO1NBZlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgU3RlcHBlciB2ZXJ0aWNhbFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLXZlcnRpY2FsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItdmVydGljYWwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXItdmVydGljYWwtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyVmVydGljYWxFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNMaW5lYXIgPSBmYWxzZTtcbiAgZmlyc3RGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgc2Vjb25kRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmlyc3RGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBmaXJzdEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLnNlY29uZEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHNlY29uZEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxufVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiaXNMaW5lYXIgPSAhaXNMaW5lYXJcIiBpZD1cInRvZ2dsZS1saW5lYXJcIj5cbiAge3shaXNMaW5lYXIgPyAnRW5hYmxlIGxpbmVhciBtb2RlJyA6ICdEaXNhYmxlIGxpbmVhciBtb2RlJ319XG48L2J1dHRvbj5cbjxtYXQtdmVydGljYWwtc3RlcHBlciBbbGluZWFyXT1cImlzTGluZWFyXCIgI3N0ZXBwZXI+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgbmFtZTwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtbGFiZWw+TmFtZTwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWUsIEZpcnN0IG5hbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdEN0cmxcIiByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgYWRkcmVzczwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtbGFiZWw+QWRkcmVzczwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kQ3RybFwiIHBsYWNlaG9sZGVyPVwiRXguIDEgTWFpbiBTdCwgTmV3IFlvcmssIE5ZXCJcbiAgICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXA+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5Eb25lPC9uZy10ZW1wbGF0ZT5cbiAgICA8cD5Zb3UgYXJlIG5vdyBkb25lLjwvcD5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInN0ZXBwZXIucmVzZXQoKVwiPlJlc2V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXN0ZXA+XG48L21hdC12ZXJ0aWNhbC1zdGVwcGVyPlxuIl19