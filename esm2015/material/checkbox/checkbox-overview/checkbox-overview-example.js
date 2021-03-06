import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function CheckboxOverviewExample_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "mat-checkbox", 6);
    i0.ɵɵlistener("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const subtask_r1 = ctx.$implicit; return subtask_r1.completed = $event; })("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.updateAllComplete(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subtask_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", subtask_r1.completed)("color", subtask_r1.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", subtask_r1.name, " ");
} }
/**
 * @title Basic checkboxes
 */
let CheckboxOverviewExample = /** @class */ (() => {
    class CheckboxOverviewExample {
        constructor() {
            this.task = {
                name: 'Indeterminate',
                completed: false,
                color: 'primary',
                subtasks: [
                    { name: 'Primary', completed: false, color: 'primary' },
                    { name: 'Accent', completed: false, color: 'accent' },
                    { name: 'Warn', completed: false, color: 'warn' }
                ]
            };
            this.allComplete = false;
        }
        updateAllComplete() {
            this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
        }
        someComplete() {
            if (this.task.subtasks == null) {
                return false;
            }
            return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
        }
        setAll(completed) {
            this.allComplete = completed;
            if (this.task.subtasks == null) {
                return;
            }
            this.task.subtasks.forEach(t => t.completed = completed);
        }
    }
    CheckboxOverviewExample.ɵfac = function CheckboxOverviewExample_Factory(t) { return new (t || CheckboxOverviewExample)(); };
    CheckboxOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxOverviewExample, selectors: [["checkbox-overview-example"]], decls: 12, vars: 5, consts: [[1, "example-section"], [1, "example-margin"], [1, "example-margin", 3, "disabled"], [1, "example-list-section"], [1, "example-margin", 3, "checked", "indeterminate", "change"], [4, "ngFor", "ngForOf"], [3, "ngModel", "color", "ngModelChange"]], template: function CheckboxOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelementStart(1, "mat-checkbox", 1);
            i0.ɵɵtext(2, "Check me!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-checkbox", 2);
            i0.ɵɵtext(4, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "section", 0);
            i0.ɵɵelementStart(6, "span", 3);
            i0.ɵɵelementStart(7, "mat-checkbox", 4);
            i0.ɵɵlistener("change", function CheckboxOverviewExample_Template_mat_checkbox_change_7_listener($event) { return ctx.setAll($event.checked); });
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "span", 3);
            i0.ɵɵelementStart(10, "ul");
            i0.ɵɵtemplate(11, CheckboxOverviewExample_li_11_Template, 3, 3, "li", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", true);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("checked", ctx.allComplete)("indeterminate", ctx.someComplete());
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.task.name, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.task.subtasks);
        } }, directives: [i1.MatCheckbox, i2.NgForOf, i3.NgControlStatus, i3.NgModel], styles: [".example-section[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n}"] });
    return CheckboxOverviewExample;
})();
export { CheckboxOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxOverviewExample, [{
        type: Component,
        args: [{
                selector: 'checkbox-overview-example',
                templateUrl: 'checkbox-overview-example.html',
                styleUrls: ['checkbox-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LW92ZXJ2aWV3L2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1vdmVydmlldy9jaGVja2JveC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ2dCbEMsMEJBQ0U7SUFBQSx1Q0FHRTtJQUhZLGdPQUErQiwyTUFBQTtJQUczQyxZQUNGO0lBQUEsaUJBQWU7SUFDakIsaUJBQUs7OztJQUxXLGVBQStCO0lBQS9CLDhDQUErQiwyQkFBQTtJQUczQyxlQUNGO0lBREUsZ0RBQ0Y7O0FEWFI7O0dBRUc7QUFDSDtJQUFBLE1BS2EsdUJBQXVCO1FBTHBDO1lBTUUsU0FBSSxHQUFTO2dCQUNYLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRTtvQkFDUixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO29CQUNyRCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO29CQUNuRCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO2lCQUNoRDthQUNGLENBQUM7WUFFRixnQkFBVyxHQUFZLEtBQUssQ0FBQztTQW9COUI7UUFsQkMsaUJBQWlCO1lBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlGLENBQUM7UUFFRCxZQUFZO1lBQ1YsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQzlCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyRixDQUFDO1FBRUQsTUFBTSxDQUFDLFNBQWtCO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUM5QixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQzNELENBQUM7O2tHQS9CVSx1QkFBdUI7Z0VBQXZCLHVCQUF1QjtZQ2xCcEMsa0NBQ0U7WUFBQSx1Q0FBcUM7WUFBQSx5QkFBUztZQUFBLGlCQUFlO1lBQzdELHVDQUF1RDtZQUFBLHdCQUFRO1lBQUEsaUJBQWU7WUFDaEYsaUJBQVU7WUFFVixrQ0FDRTtZQUFBLCtCQUNFO1lBQUEsdUNBSUU7WUFEWSxrSEFBVSwwQkFBc0IsSUFBQztZQUM3QyxZQUNGO1lBQUEsaUJBQWU7WUFDakIsaUJBQU87WUFDUCwrQkFDRTtZQUFBLDJCQUNFO1lBQUEsd0VBQ0U7WUFNSixpQkFBSztZQUNQLGlCQUFPO1lBQ1QsaUJBQVU7O1lBdkI2QixlQUFpQjtZQUFqQiwrQkFBaUI7WUFNdEMsZUFBdUI7WUFBdkIseUNBQXVCLHFDQUFBO1lBR25DLGVBQ0Y7WUFERSw4Q0FDRjtZQUlNLGVBQXFDO1lBQXJDLDJDQUFxQzs7a0NEaEIvQztLQWtEQztTQWhDWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFzayB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29tcGxldGVkOiBib29sZWFuO1xuICBjb2xvcjogVGhlbWVQYWxldHRlO1xuICBzdWJ0YXNrcz86IFRhc2tbXTtcbn1cblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgY2hlY2tib3hlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGVja2JveC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hPdmVydmlld0V4YW1wbGUge1xuICB0YXNrOiBUYXNrID0ge1xuICAgIG5hbWU6ICdJbmRldGVybWluYXRlJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgc3VidGFza3M6IFtcbiAgICAgIHtuYW1lOiAnUHJpbWFyeScsIGNvbXBsZXRlZDogZmFsc2UsIGNvbG9yOiAncHJpbWFyeSd9LFxuICAgICAge25hbWU6ICdBY2NlbnQnLCBjb21wbGV0ZWQ6IGZhbHNlLCBjb2xvcjogJ2FjY2VudCd9LFxuICAgICAge25hbWU6ICdXYXJuJywgY29tcGxldGVkOiBmYWxzZSwgY29sb3I6ICd3YXJuJ31cbiAgICBdXG4gIH07XG5cbiAgYWxsQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICB1cGRhdGVBbGxDb21wbGV0ZSgpIHtcbiAgICB0aGlzLmFsbENvbXBsZXRlID0gdGhpcy50YXNrLnN1YnRhc2tzICE9IG51bGwgJiYgdGhpcy50YXNrLnN1YnRhc2tzLmV2ZXJ5KHQgPT4gdC5jb21wbGV0ZWQpO1xuICB9XG5cbiAgc29tZUNvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnRhc2suc3VidGFza3MgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50YXNrLnN1YnRhc2tzLmZpbHRlcih0ID0+IHQuY29tcGxldGVkKS5sZW5ndGggPiAwICYmICF0aGlzLmFsbENvbXBsZXRlO1xuICB9XG5cbiAgc2V0QWxsKGNvbXBsZXRlZDogYm9vbGVhbikge1xuICAgIHRoaXMuYWxsQ29tcGxldGUgPSBjb21wbGV0ZWQ7XG4gICAgaWYgKHRoaXMudGFzay5zdWJ0YXNrcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGFzay5zdWJ0YXNrcy5mb3JFYWNoKHQgPT4gdC5jb21wbGV0ZWQgPSBjb21wbGV0ZWQpO1xuICB9XG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5DaGVjayBtZSE8L21hdC1jaGVja2JveD5cbiAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgW2Rpc2FibGVkXT1cInRydWVcIj5EaXNhYmxlZDwvbWF0LWNoZWNrYm94PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtbGlzdC1zZWN0aW9uXCI+XG4gICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImFsbENvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInNvbWVDb21wbGV0ZSgpXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2V0QWxsKCRldmVudC5jaGVja2VkKVwiPlxuICAgICAge3t0YXNrLm5hbWV9fVxuICAgIDwvbWF0LWNoZWNrYm94PlxuICA8L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1saXN0LXNlY3Rpb25cIj5cbiAgICA8dWw+XG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHN1YnRhc2sgb2YgdGFzay5zdWJ0YXNrc1wiPlxuICAgICAgICA8bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwic3VidGFzay5jb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJzdWJ0YXNrLmNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVBbGxDb21wbGV0ZSgpXCI+XG4gICAgICAgICAge3tzdWJ0YXNrLm5hbWV9fVxuICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9zcGFuPlxuPC9zZWN0aW9uPlxuIl19