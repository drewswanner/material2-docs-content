import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
function SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pokemon_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", pokemon_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", pokemon_r3.viewValue, " ");
} }
function SelectOptgroupExample_mat_optgroup_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-optgroup", 10);
    i0.ɵɵtemplate(1, SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template, 2, 2, "mat-option", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    i0.ɵɵproperty("label", group_r1.name)("disabled", group_r1.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r1.pokemon);
} }
/** @title Select with option groups */
let SelectOptgroupExample = /** @class */ (() => {
    class SelectOptgroupExample {
        constructor() {
            this.pokemonControl = new FormControl();
            this.pokemonGroups = [
                {
                    name: 'Grass',
                    pokemon: [
                        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                        { value: 'oddish-1', viewValue: 'Oddish' },
                        { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                    ]
                },
                {
                    name: 'Water',
                    pokemon: [
                        { value: 'squirtle-3', viewValue: 'Squirtle' },
                        { value: 'psyduck-4', viewValue: 'Psyduck' },
                        { value: 'horsea-5', viewValue: 'Horsea' }
                    ]
                },
                {
                    name: 'Fire',
                    disabled: true,
                    pokemon: [
                        { value: 'charmander-6', viewValue: 'Charmander' },
                        { value: 'vulpix-7', viewValue: 'Vulpix' },
                        { value: 'flareon-8', viewValue: 'Flareon' }
                    ]
                },
                {
                    name: 'Psychic',
                    pokemon: [
                        { value: 'mew-9', viewValue: 'Mew' },
                        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                    ]
                }
            ];
        }
    }
    SelectOptgroupExample.ɵfac = function SelectOptgroupExample_Factory(t) { return new (t || SelectOptgroupExample)(); };
    SelectOptgroupExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectOptgroupExample, selectors: [["select-optgroup-example"]], decls: 25, vars: 2, consts: [["appearance", "fill"], [3, "formControl"], [3, "label", "disabled", 4, "ngFor", "ngForOf"], ["matNativeControl", ""], ["label", "Swedish Cars"], ["value", "volvo"], ["value", "saab"], ["label", "German Cars"], ["value", "mercedes"], ["value", "audi"], [3, "label", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectOptgroupExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h4");
            i0.ɵɵtext(1, "mat-select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-form-field", 0);
            i0.ɵɵelementStart(3, "mat-label");
            i0.ɵɵtext(4, "Pokemon");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-select", 1);
            i0.ɵɵelementStart(6, "mat-option");
            i0.ɵɵtext(7, "-- None --");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, SelectOptgroupExample_mat_optgroup_8_Template, 2, 3, "mat-optgroup", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "h4");
            i0.ɵɵtext(10, "native html select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-form-field", 0);
            i0.ɵɵelementStart(12, "mat-label");
            i0.ɵɵtext(13, "Cars");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "select", 3);
            i0.ɵɵelementStart(15, "optgroup", 4);
            i0.ɵɵelementStart(16, "option", 5);
            i0.ɵɵtext(17, "volvo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "option", 6);
            i0.ɵɵtext(19, "Saab");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "optgroup", 7);
            i0.ɵɵelementStart(21, "option", 8);
            i0.ɵɵtext(22, "Mercedes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "option", 9);
            i0.ɵɵtext(24, "Audi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("formControl", ctx.pokemonControl);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.pokemonGroups);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption, i5.NgForOf, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i4.MatOptgroup], styles: [""] });
    return SelectOptgroupExample;
})();
export { SelectOptgroupExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'select-optgroup-example',
                templateUrl: 'select-optgroup-example.html',
                styleUrls: ['select-optgroup-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW9wdGdyb3VwL3NlbGVjdC1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vcHRncm91cC9zZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7SUNNckMsc0NBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQWE7OztJQUZxQyx3Q0FBdUI7SUFDdkUsZUFDRjtJQURFLHFEQUNGOzs7SUFKRix3Q0FFRTtJQUFBLG9HQUNFO0lBRUosaUJBQWU7OztJQUxtQyxxQ0FBb0IsK0JBQUE7SUFFeEQsZUFBcUM7SUFBckMsMENBQXFDOztBRE92RCx1Q0FBdUM7QUFDdkM7SUFBQSxNQUthLHFCQUFxQjtRQUxsQztZQU1FLG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNuQyxrQkFBYSxHQUFtQjtnQkFDOUI7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsT0FBTyxFQUFFO3dCQUNQLEVBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDO3dCQUM5QyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQzt3QkFDeEMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7cUJBQ2pEO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLE9BQU8sRUFBRTt3QkFDUCxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQzt3QkFDNUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7d0JBQzFDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO3FCQUN6QztpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtvQkFDZCxPQUFPLEVBQUU7d0JBQ1AsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7d0JBQ2hELEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO3dCQUN4QyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQztxQkFDM0M7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFO3dCQUNQLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDO3dCQUNsQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztxQkFDMUM7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7OzhGQXBDWSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQ3BCbEMsMEJBQUk7WUFBQSwwQkFBVTtZQUFBLGlCQUFLO1lBQ25CLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSx1QkFBTztZQUFBLGlCQUFZO1lBQzlCLHFDQUNFO1lBQUEsa0NBQVk7WUFBQSwwQkFBVTtZQUFBLGlCQUFhO1lBQ25DLHdGQUVFO1lBSUosaUJBQWE7WUFDZixpQkFBaUI7WUFFakIsMEJBQUk7WUFBQSxtQ0FBa0I7WUFBQSxpQkFBSztZQUMzQiwwQ0FDRTtZQUFBLGtDQUFXO1lBQUEscUJBQUk7WUFBQSxpQkFBWTtZQUMzQixrQ0FDRTtZQUFBLG9DQUNFO1lBQUEsa0NBQXNCO1lBQUEsc0JBQUs7WUFBQSxpQkFBUztZQUNwQyxrQ0FBcUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ3BDLGlCQUFXO1lBQ1gsb0NBQ0U7WUFBQSxrQ0FBeUI7WUFBQSx5QkFBUTtZQUFBLGlCQUFTO1lBQzFDLGtDQUFxQjtZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDcEMsaUJBQVc7WUFDYixpQkFBUztZQUNYLGlCQUFpQjs7WUF4QkgsZUFBOEI7WUFBOUIsZ0RBQThCO1lBRTFCLGVBQW1DO1lBQW5DLDJDQUFtQzs7Z0NETHJEO0tBd0RDO1NBcENZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW50ZXJmYWNlIFBva2Vtb24ge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFBva2Vtb25Hcm91cCB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBwb2tlbW9uOiBQb2tlbW9uW107XG59XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggb3B0aW9uIGdyb3VwcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1vcHRncm91cC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdE9wdGdyb3VwRXhhbXBsZSB7XG4gIHBva2Vtb25Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHBva2Vtb25Hcm91cHM6IFBva2Vtb25Hcm91cFtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdHcmFzcycsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ2J1bGJhc2F1ci0wJywgdmlld1ZhbHVlOiAnQnVsYmFzYXVyJ30sXG4gICAgICAgIHt2YWx1ZTogJ29kZGlzaC0xJywgdmlld1ZhbHVlOiAnT2RkaXNoJ30sXG4gICAgICAgIHt2YWx1ZTogJ2JlbGxzcHJvdXQtMicsIHZpZXdWYWx1ZTogJ0JlbGxzcHJvdXQnfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1dhdGVyJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnc3F1aXJ0bGUtMycsIHZpZXdWYWx1ZTogJ1NxdWlydGxlJ30sXG4gICAgICAgIHt2YWx1ZTogJ3BzeWR1Y2stNCcsIHZpZXdWYWx1ZTogJ1BzeWR1Y2snfSxcbiAgICAgICAge3ZhbHVlOiAnaG9yc2VhLTUnLCB2aWV3VmFsdWU6ICdIb3JzZWEnfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0ZpcmUnLFxuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ2NoYXJtYW5kZXItNicsIHZpZXdWYWx1ZTogJ0NoYXJtYW5kZXInfSxcbiAgICAgICAge3ZhbHVlOiAndnVscGl4LTcnLCB2aWV3VmFsdWU6ICdWdWxwaXgnfSxcbiAgICAgICAge3ZhbHVlOiAnZmxhcmVvbi04Jywgdmlld1ZhbHVlOiAnRmxhcmVvbid9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUHN5Y2hpYycsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ21ldy05Jywgdmlld1ZhbHVlOiAnTWV3J30sXG4gICAgICAgIHt2YWx1ZTogJ21ld3R3by0xMCcsIHZpZXdWYWx1ZTogJ01ld3R3byd9LFxuICAgICAgXVxuICAgIH1cbiAgXTtcbn1cbiIsIjxoND5tYXQtc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlBva2Vtb248L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cInBva2Vtb25Db250cm9sXCI+XG4gICAgPG1hdC1vcHRpb24+LS0gTm9uZSAtLTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGdyb3VwICpuZ0Zvcj1cImxldCBncm91cCBvZiBwb2tlbW9uR3JvdXBzXCIgW2xhYmVsXT1cImdyb3VwLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImdyb3VwLmRpc2FibGVkXCI+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcG9rZW1vbiBvZiBncm91cC5wb2tlbW9uXCIgW3ZhbHVlXT1cInBva2Vtb24udmFsdWVcIj5cbiAgICAgICAge3twb2tlbW9uLnZpZXdWYWx1ZX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtb3B0Z3JvdXA+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+Q2FyczwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2w+XG4gICAgPG9wdGdyb3VwIGxhYmVsPVwiU3dlZGlzaCBDYXJzXCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwidm9sdm9cIj52b2x2bzwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XG4gICAgPC9vcHRncm91cD5cbiAgICA8b3B0Z3JvdXAgbGFiZWw9XCJHZXJtYW4gQ2Fyc1wiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJhdWRpXCI+QXVkaTwvb3B0aW9uPlxuICAgIDwvb3B0Z3JvdXA+XG4gIDwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==