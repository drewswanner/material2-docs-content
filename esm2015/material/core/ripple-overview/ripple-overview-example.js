import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/core";
/**
 * @title MatRipple basic usage
 */
let RippleOverviewExample = /** @class */ (() => {
    class RippleOverviewExample {
        constructor() {
            this.centered = false;
            this.disabled = false;
            this.unbounded = false;
        }
    }
    RippleOverviewExample.ɵfac = function RippleOverviewExample_Factory(t) { return new (t || RippleOverviewExample)(); };
    RippleOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: RippleOverviewExample, selectors: [["ripple-overview-example"]], decls: 12, vars: 10, consts: [[1, "example-ripple-checkbox", 3, "ngModel", "ngModelChange"], [1, "example-ripple-form-field"], ["matInput", "", "type", "number", "placeholder", "Radius", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Color", 3, "ngModel", "ngModelChange"], ["matRipple", "", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "matRippleRadius", "matRippleColor"]], template: function RippleOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-checkbox", 0);
            i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_mat_checkbox_ngModelChange_0_listener($event) { return ctx.centered = $event; });
            i0.ɵɵtext(1, "Centered");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-checkbox", 0);
            i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_mat_checkbox_ngModelChange_2_listener($event) { return ctx.disabled = $event; });
            i0.ɵɵtext(3, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-checkbox", 0);
            i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_mat_checkbox_ngModelChange_4_listener($event) { return ctx.unbounded = $event; });
            i0.ɵɵtext(5, "Unbounded");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-form-field", 1);
            i0.ɵɵelementStart(7, "input", 2);
            i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_input_ngModelChange_7_listener($event) { return ctx.radius = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-form-field", 1);
            i0.ɵɵelementStart(9, "input", 3);
            i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_input_ngModelChange_9_listener($event) { return ctx.color = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 4);
            i0.ɵɵtext(11, " Click me\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.centered);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.unbounded);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.radius);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.color);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRippleCentered", ctx.centered)("matRippleDisabled", ctx.disabled)("matRippleUnbounded", ctx.unbounded)("matRippleRadius", ctx.radius)("matRippleColor", ctx.color);
        } }, directives: [i1.MatCheckbox, i2.NgControlStatus, i2.NgModel, i3.MatFormField, i4.MatInput, i2.NumberValueAccessor, i2.DefaultValueAccessor, i5.MatRipple], styles: [".example-ripple-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n.example-ripple-checkbox[_ngcontent-%COMP%] {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field[_ngcontent-%COMP%] {\n  margin: 0 12px 0 0;\n}"] });
    return RippleOverviewExample;
})();
export { RippleOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RippleOverviewExample, [{
        type: Component,
        args: [{
                selector: 'ripple-overview-example',
                templateUrl: 'ripple-overview-example.html',
                styleUrls: ['ripple-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL3JpcHBsZS1vdmVydmlldy9yaXBwbGUtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NvcmUvcmlwcGxlLW92ZXJ2aWV3L3JpcHBsZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUEsTUFLYSxxQkFBcUI7UUFMbEM7WUFNRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7WUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztTQUluQjs7OEZBUFkscUJBQXFCOzhEQUFyQixxQkFBcUI7WUNWbEMsdUNBQXFFO1lBQXZELHVKQUFzQjtZQUFpQyx3QkFBUTtZQUFBLGlCQUFlO1lBQzVGLHVDQUFxRTtZQUF2RCx1SkFBc0I7WUFBaUMsd0JBQVE7WUFBQSxpQkFBZTtZQUM1Rix1Q0FBc0U7WUFBeEQsd0pBQXVCO1lBQWlDLHlCQUFTO1lBQUEsaUJBQWU7WUFFOUYseUNBQ0U7WUFBQSxnQ0FDRjtZQURrQiw4SUFBb0I7WUFBcEMsaUJBQ0Y7WUFBQSxpQkFBaUI7WUFDakIseUNBQ0U7WUFBQSxnQ0FDRjtZQURrQiw2SUFBbUI7WUFBbkMsaUJBQ0Y7WUFBQSxpQkFBaUI7WUFHakIsK0JBT0U7WUFBQSw0QkFDRjtZQUFBLGlCQUFNOztZQXBCUSxzQ0FBc0I7WUFDdEIsZUFBc0I7WUFBdEIsc0NBQXNCO1lBQ3RCLGVBQXVCO1lBQXZCLHVDQUF1QjtZQUduQixlQUFvQjtZQUFwQixvQ0FBb0I7WUFHcEIsZUFBbUI7WUFBbkIsbUNBQW1CO1lBTWhDLGVBQThCO1lBQTlCLGdEQUE4QixtQ0FBQSxxQ0FBQSwrQkFBQSw2QkFBQTs7Z0NEZG5DO0tBaUJDO1NBUFkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBNYXRSaXBwbGUgYmFzaWMgdXNhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmlwcGxlLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3JpcHBsZS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmlwcGxlLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJpcHBsZU92ZXJ2aWV3RXhhbXBsZSB7XG4gIGNlbnRlcmVkID0gZmFsc2U7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIHVuYm91bmRlZCA9IGZhbHNlO1xuXG4gIHJhZGl1czogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xufVxuIiwiPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNlbnRlcmVkXCIgY2xhc3M9XCJleGFtcGxlLXJpcHBsZS1jaGVja2JveFwiPkNlbnRlcmVkPC9tYXQtY2hlY2tib3g+XG48bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZGlzYWJsZWRcIiBjbGFzcz1cImV4YW1wbGUtcmlwcGxlLWNoZWNrYm94XCI+RGlzYWJsZWQ8L21hdC1jaGVja2JveD5cbjxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJ1bmJvdW5kZWRcIiBjbGFzcz1cImV4YW1wbGUtcmlwcGxlLWNoZWNrYm94XCI+VW5ib3VuZGVkPC9tYXQtY2hlY2tib3g+XG5cbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtcmlwcGxlLWZvcm0tZmllbGRcIj5cbiAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwicmFkaXVzXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUmFkaXVzXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1yaXBwbGUtZm9ybS1maWVsZFwiPlxuICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJjb2xvclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDb2xvclwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuXG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1yaXBwbGUtY29udGFpbmVyIG1hdC1lbGV2YXRpb24tejRcIlxuICAgICBtYXRSaXBwbGVcbiAgICAgW21hdFJpcHBsZUNlbnRlcmVkXT1cImNlbnRlcmVkXCJcbiAgICAgW21hdFJpcHBsZURpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgW21hdFJpcHBsZVVuYm91bmRlZF09XCJ1bmJvdW5kZWRcIlxuICAgICBbbWF0UmlwcGxlUmFkaXVzXT1cInJhZGl1c1wiXG4gICAgIFttYXRSaXBwbGVDb2xvcl09XCJjb2xvclwiPlxuICBDbGljayBtZVxuPC9kaXY+XG4iXX0=