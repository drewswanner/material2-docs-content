import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/core";
function SelectFormExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const food_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r2.viewValue, " ");
} }
function SelectFormExample_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const car_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", car_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", car_r3.viewValue, " ");
} }
/**
 * @title Select in a form
 */
let SelectFormExample = /** @class */ (() => {
    class SelectFormExample {
        constructor() {
            this.foods = [
                { value: 'steak-0', viewValue: 'Steak' },
                { value: 'pizza-1', viewValue: 'Pizza' },
                { value: 'tacos-2', viewValue: 'Tacos' }
            ];
            this.cars = [
                { value: 'volvo', viewValue: 'Volvo' },
                { value: 'saab', viewValue: 'Saab' },
                { value: 'mercedes', viewValue: 'Mercedes' }
            ];
        }
    }
    SelectFormExample.ɵfac = function SelectFormExample_Factory(t) { return new (t || SelectFormExample)(); };
    SelectFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectFormExample, selectors: [["select-form-example"]], decls: 20, vars: 6, consts: [["appearance", "fill"], ["name", "food", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], [3, "value"]], template: function SelectFormExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form");
            i0.ɵɵelementStart(1, "h4");
            i0.ɵɵtext(2, "mat-select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field", 0);
            i0.ɵɵelementStart(4, "mat-label");
            i0.ɵɵtext(5, "Favorite food");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-select", 1);
            i0.ɵɵlistener("ngModelChange", function SelectFormExample_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedValue = $event; });
            i0.ɵɵtemplate(7, SelectFormExample_mat_option_7_Template, 2, 2, "mat-option", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "h4");
            i0.ɵɵtext(11, "native html select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-form-field", 0);
            i0.ɵɵelementStart(13, "mat-label");
            i0.ɵɵtext(14, "Favorite car");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "select", 3);
            i0.ɵɵlistener("ngModelChange", function SelectFormExample_Template_select_ngModelChange_15_listener($event) { return ctx.selectedCar = $event; });
            i0.ɵɵelement(16, "option", 4);
            i0.ɵɵtemplate(17, SelectFormExample_option_17_Template, 2, 2, "option", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "p");
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.selectedValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.foods);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" Selected food: ", ctx.selectedValue, " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.selectedCar);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.cars);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" Selected car: ", ctx.selectedCar, " ");
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatSelect, i1.NgControlStatus, i1.NgModel, i4.NgForOf, i5.MatInput, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i6.MatOption], styles: [""] });
    return SelectFormExample;
})();
export { SelectFormExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectFormExample, [{
        type: Component,
        args: [{
                selector: 'select-form-example',
                templateUrl: 'select-form-example.html',
                styleUrls: ['select-form-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtZm9ybS9zZWxlY3QtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1mb3JtL3NlbGVjdC1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNLbEMscUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQWE7OztJQUYwQixxQ0FBb0I7SUFDekQsZUFDRjtJQURFLGtEQUNGOzs7SUFTQSxpQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRndCLG9DQUFtQjtJQUNsRCxlQUNGO0lBREUsaURBQ0Y7O0FETk47O0dBRUc7QUFDSDtJQUFBLE1BS2EsaUJBQWlCO1FBTDlCO1lBU0UsVUFBSyxHQUFXO2dCQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO2dCQUN0QyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztnQkFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7YUFDdkMsQ0FBQztZQUVGLFNBQUksR0FBVTtnQkFDWixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztnQkFDcEMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7Z0JBQ2xDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDO2FBQzNDLENBQUM7U0FDSDs7c0ZBZlksaUJBQWlCOzBEQUFqQixpQkFBaUI7WUNwQjlCLDRCQUNFO1lBQUEsMEJBQUk7WUFBQSwwQkFBVTtZQUFBLGlCQUFLO1lBQ25CLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSw2QkFBYTtZQUFBLGlCQUFZO1lBQ3BDLHFDQUNFO1lBRFUsc0pBQTJCO1lBQ3JDLGdGQUNFO1lBRUosaUJBQWE7WUFDZixpQkFBaUI7WUFDakIseUJBQUk7WUFBQSxZQUFpQztZQUFBLGlCQUFJO1lBQ3pDLDJCQUFJO1lBQUEsbUNBQWtCO1lBQUEsaUJBQUs7WUFDM0IsMENBQ0U7WUFBQSxrQ0FBVztZQUFBLDZCQUFZO1lBQUEsaUJBQVk7WUFDbkMsa0NBQ0U7WUFEdUIsaUpBQXlCO1lBQ2hELDZCQUFtQztZQUNuQywwRUFDRTtZQUVKLGlCQUFTO1lBQ1gsaUJBQWlCO1lBQ2pCLDBCQUFJO1lBQUEsYUFBOEI7WUFBQSxpQkFBSTtZQUN4QyxpQkFBTzs7WUFsQlMsZUFBMkI7WUFBM0IsMkNBQTJCO1lBQ3pCLGVBQTBCO1lBQTFCLG1DQUEwQjtZQUt0QyxlQUFpQztZQUFqQyxpRUFBaUM7WUFJVixlQUF5QjtZQUF6Qix5Q0FBeUI7WUFFeEMsZUFBd0I7WUFBeEIsa0NBQXdCO1lBS2hDLGVBQThCO1lBQTlCLDhEQUE4Qjs7NEJEckJwQztLQW1DQztTQWZZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW50ZXJmYWNlIEZvb2Qge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENhciB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTZWxlY3QgaW4gYSBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1mb3JtLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1mb3JtLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtZm9ybS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RGb3JtRXhhbXBsZSB7XG4gIHNlbGVjdGVkVmFsdWU6IHN0cmluZztcbiAgc2VsZWN0ZWRDYXI6IHN0cmluZztcblxuICBmb29kczogRm9vZFtdID0gW1xuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxuICAgIHt2YWx1ZTogJ3BpenphLTEnLCB2aWV3VmFsdWU6ICdQaXp6YSd9LFxuICAgIHt2YWx1ZTogJ3RhY29zLTInLCB2aWV3VmFsdWU6ICdUYWNvcyd9XG4gIF07XG5cbiAgY2FyczogQ2FyW10gPSBbXG4gICAge3ZhbHVlOiAndm9sdm8nLCB2aWV3VmFsdWU6ICdWb2x2byd9LFxuICAgIHt2YWx1ZTogJ3NhYWInLCB2aWV3VmFsdWU6ICdTYWFiJ30sXG4gICAge3ZhbHVlOiAnbWVyY2VkZXMnLCB2aWV3VmFsdWU6ICdNZXJjZWRlcyd9XG4gIF07XG59XG4iLCI8Zm9ybT5cbiAgPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIGZvb2Q8L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVcIiBuYW1lPVwiZm9vZFwiPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGZvb2Qgb2YgZm9vZHNcIiBbdmFsdWVdPVwiZm9vZC52YWx1ZVwiPlxuICAgICAgICB7e2Zvb2Qudmlld1ZhbHVlfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxwPiBTZWxlY3RlZCBmb29kOiB7e3NlbGVjdGVkVmFsdWV9fSA8L3A+XG4gIDxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIGNhcjwvbWF0LWxhYmVsPlxuICAgIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQ2FyXCIgbmFtZT1cImNhclwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPjwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgY2FyIG9mIGNhcnNcIiBbdmFsdWVdPVwiY2FyLnZhbHVlXCI+XG4gICAgICAgIHt7Y2FyLnZpZXdWYWx1ZX19XG4gICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPHA+IFNlbGVjdGVkIGNhcjoge3tzZWxlY3RlZENhcn19IDwvcD5cbjwvZm9ybT5cbiJdfQ==