import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/tooltip";
import * as i7 from "@angular/material/core";
function TooltipPositionExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var positionOption_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", positionOption_r6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", positionOption_r6, " ");
} }
/**
 * @title Tooltip with a custom position
 */
var TooltipPositionExample = /** @class */ (function () {
    function TooltipPositionExample() {
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
    TooltipPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-position-example',
                    templateUrl: 'tooltip-position-example.html',
                    styleUrls: ['tooltip-position-example.css'],
                },] },
    ];
    TooltipPositionExample.ɵfac = function TooltipPositionExample_Factory(t) { return new (t || TooltipPositionExample)(); };
    TooltipPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipPositionExample, selectors: [["tooltip-position-example"]], decls: 7, vars: 3, consts: [[1, "example-user-input"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip in various positions", 3, "matTooltipPosition"], [3, "value"]], template: function TooltipPositionExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Tooltip position");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-select", 1);
            i0.ɵɵtemplate(4, TooltipPositionExample_mat_option_4_Template, 2, 2, "mat-option", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 3);
            i0.ɵɵtext(6, " Action\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formControl", ctx.position);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.positionOptions);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matTooltipPosition", ctx.position.value);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.NgForOf, i5.MatButton, i6.MatTooltip, i7.MatOption], styles: [".example-user-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    return TooltipPositionExample;
}());
export { TooltipPositionExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipPositionExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-position-example',
                templateUrl: 'tooltip-position-example.html',
                styleUrls: ['tooltip-position-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLXBvc2l0aW9uL3Rvb2x0aXAtcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1wb3NpdGlvbi90b29sdGlwLXBvc2l0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztJQ0V2QyxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjhDLHlDQUF3QjtJQUNqRixlQUNGO0lBREUsa0RBQ0Y7O0FEREo7O0dBRUc7QUFDSDtJQUFBO1FBTUUsb0JBQWUsR0FBc0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVGLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckQ7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDNUM7O2dHQUNZLHNCQUFzQjsrREFBdEIsc0JBQXNCO1lDWm5DLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSxnQ0FBZ0I7WUFBQSxpQkFBWTtZQUN2QyxxQ0FDRTtZQUFBLHFGQUNFO1lBRUosaUJBQWE7WUFDZixpQkFBaUI7WUFFakIsaUNBSUU7WUFBQSx5QkFDRjtZQUFBLGlCQUFTOztZQVpLLGVBQXdCO1lBQXhCLDBDQUF3QjtZQUN0QixlQUE4QztZQUE5Qyw2Q0FBOEM7WUFRdEQsZUFBcUM7WUFBckMsdURBQXFDOztpQ0RYN0M7Q0FlQyxBQVJELElBUUM7U0FIWSxzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1Rvb2x0aXBQb3NpdGlvbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgd2l0aCBhIGN1c3RvbSBwb3NpdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLXBvc2l0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtcG9zaXRpb24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtcG9zaXRpb24tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcFBvc2l0aW9uRXhhbXBsZSB7XG4gIHBvc2l0aW9uT3B0aW9uczogVG9vbHRpcFBvc2l0aW9uW10gPSBbJ2FmdGVyJywgJ2JlZm9yZScsICdhYm92ZScsICdiZWxvdycsICdsZWZ0JywgJ3JpZ2h0J107XG4gIHBvc2l0aW9uID0gbmV3IEZvcm1Db250cm9sKHRoaXMucG9zaXRpb25PcHRpb25zWzBdKTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtdXNlci1pbnB1dFwiPlxuICA8bWF0LWxhYmVsPlRvb2x0aXAgcG9zaXRpb248L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cInBvc2l0aW9uXCI+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHBvc2l0aW9uT3B0aW9uIG9mIHBvc2l0aW9uT3B0aW9uc1wiIFt2YWx1ZV09XCJwb3NpdGlvbk9wdGlvblwiPlxuICAgICAge3twb3NpdGlvbk9wdGlvbn19XG4gICAgPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgIG1hdFRvb2x0aXA9XCJJbmZvIGFib3V0IHRoZSBhY3Rpb25cIlxuICAgICAgICBbbWF0VG9vbHRpcFBvc2l0aW9uXT1cInBvc2l0aW9uLnZhbHVlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGEgdG9vbHRpcCBpbiB2YXJpb3VzIHBvc2l0aW9uc1wiPlxuICBBY3Rpb25cbjwvYnV0dG9uPlxuIl19