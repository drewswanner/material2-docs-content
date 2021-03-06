import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableMultipleHeaderFooterExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Item ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", transaction_r14.item, " ");
} }
function TableMultipleHeaderFooterExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1, " Total ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Cost ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r15.cost), " ");
} }
function TableMultipleHeaderFooterExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r5.getTotalCost()), " ");
} }
function TableMultipleHeaderFooterExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Name of the item purchased ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Cost of the item in USD ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1, " Please note that the cost of items displayed are completely and totally made up. ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 19);
} }
function TableMultipleHeaderFooterExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function TableMultipleHeaderFooterExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 21);
} }
function TableMultipleHeaderFooterExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
function TableMultipleHeaderFooterExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 23);
} }
const _c0 = function () { return ["item-description", "cost-description"]; };
const _c1 = function () { return ["disclaimer"]; };
/**
 * @title Table with multiple header and footer rows
 */
let TableMultipleHeaderFooterExample = /** @class */ (() => {
    class TableMultipleHeaderFooterExample {
        constructor() {
            this.displayedColumns = ['item', 'cost'];
            this.transactions = [
                { item: 'Beach ball', cost: 4 },
                { item: 'Towel', cost: 5 },
                { item: 'Frisbee', cost: 2 },
                { item: 'Sunscreen', cost: 4 },
                { item: 'Cooler', cost: 25 },
                { item: 'Swim suit', cost: 15 },
            ];
        }
        /** Gets the total cost of all transactions. */
        getTotalCost() {
            return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
        }
    }
    TableMultipleHeaderFooterExample.ɵfac = function TableMultipleHeaderFooterExample_Factory(t) { return new (t || TableMultipleHeaderFooterExample)(); };
    TableMultipleHeaderFooterExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableMultipleHeaderFooterExample, selectors: [["table-multiple-header-footer-example"]], decls: 20, vars: 8, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["matColumnDef", "item-description"], ["matColumnDef", "cost-description"], ["matColumnDef", "disclaimer"], ["mat-footer-cell", "", "colspan", "2", 4, "matFooterCellDef"], ["mat-header-row", "", "class", "example-first-header-row", 4, "matHeaderRowDef"], ["mat-header-row", "", "class", "example-second-header-row", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "example-first-footer-row", 4, "matFooterRowDef"], ["mat-footer-row", "", "class", "example-second-footer-row", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-footer-cell", "", "colspan", "2"], ["mat-header-row", "", 1, "example-first-header-row"], ["mat-header-row", "", 1, "example-second-header-row"], ["mat-row", ""], ["mat-footer-row", "", 1, "example-first-footer-row"], ["mat-footer-row", "", 1, "example-second-footer-row"]], template: function TableMultipleHeaderFooterExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵelementContainerStart(1, 1);
            i0.ɵɵtemplate(2, TableMultipleHeaderFooterExample_th_2_Template, 2, 0, "th", 2);
            i0.ɵɵtemplate(3, TableMultipleHeaderFooterExample_td_3_Template, 2, 1, "td", 3);
            i0.ɵɵtemplate(4, TableMultipleHeaderFooterExample_td_4_Template, 2, 0, "td", 4);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(5, 5);
            i0.ɵɵtemplate(6, TableMultipleHeaderFooterExample_th_6_Template, 2, 0, "th", 2);
            i0.ɵɵtemplate(7, TableMultipleHeaderFooterExample_td_7_Template, 3, 3, "td", 3);
            i0.ɵɵtemplate(8, TableMultipleHeaderFooterExample_td_8_Template, 3, 3, "td", 4);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(9, 6);
            i0.ɵɵtemplate(10, TableMultipleHeaderFooterExample_th_10_Template, 2, 0, "th", 2);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(11, 7);
            i0.ɵɵtemplate(12, TableMultipleHeaderFooterExample_th_12_Template, 2, 0, "th", 2);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(13, 8);
            i0.ɵɵtemplate(14, TableMultipleHeaderFooterExample_td_14_Template, 2, 0, "td", 9);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(15, TableMultipleHeaderFooterExample_tr_15_Template, 1, 0, "tr", 10);
            i0.ɵɵtemplate(16, TableMultipleHeaderFooterExample_tr_16_Template, 1, 0, "tr", 11);
            i0.ɵɵtemplate(17, TableMultipleHeaderFooterExample_tr_17_Template, 1, 0, "tr", 12);
            i0.ɵɵtemplate(18, TableMultipleHeaderFooterExample_tr_18_Template, 1, 0, "tr", 13);
            i0.ɵɵtemplate(19, TableMultipleHeaderFooterExample_tr_19_Template, 1, 0, "tr", 14);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.transactions);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matHeaderRowDef", i0.ɵɵpureFunction0(6, _c0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matFooterRowDef", i0.ɵɵpureFunction0(7, _c1));
        } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-first-header-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.example-second-header-row[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.example-first-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.example-second-footer-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #900000;\n}"] });
    return TableMultipleHeaderFooterExample;
})();
export { TableMultipleHeaderFooterExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableMultipleHeaderFooterExample, [{
        type: Component,
        args: [{
                selector: 'table-multiple-header-footer-example',
                styleUrls: ['table-multiple-header-footer-example.css'],
                templateUrl: 'table-multiple-header-footer-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci90YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyL3RhYmxlLW11bHRpcGxlLWhlYWRlci1mb290ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDR3BDLDhCQUF1QztJQUFBLHNCQUFLO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBNEM7SUFBQSxZQUFxQjtJQUFBLGlCQUFLOzs7SUFBMUIsZUFBcUI7SUFBckIscURBQXFCOzs7SUFDakUsOEJBQXVDO0lBQUEsdUJBQU07SUFBQSxpQkFBSzs7O0lBS2xELDhCQUF1QztJQUFBLHNCQUFLO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBNEM7SUFBQSxZQUFnQzs7SUFBQSxpQkFBSzs7O0lBQXJDLGVBQWdDO0lBQWhDLDJFQUFnQzs7O0lBQzVFLDhCQUF1QztJQUFBLFlBQThCOztJQUFBLGlCQUFLOzs7SUFBbkMsZUFBOEI7SUFBOUIsNEVBQThCOzs7SUFLckUsOEJBQXVDO0lBQUEsNENBQTJCO0lBQUEsaUJBQUs7OztJQUt2RSw4QkFBdUM7SUFBQSx5Q0FBd0I7SUFBQSxpQkFBSzs7O0lBS3BFLDhCQUNFO0lBQUEsa0dBQ0Y7SUFBQSxpQkFBSzs7O0lBSVAseUJBRUs7OztJQUNMLHlCQUVLOzs7SUFFTCx5QkFBa0U7OztJQUVsRSx5QkFBNkY7OztJQUM3Rix5QkFBNEY7Ozs7QUR4QzlGOztHQUVHO0FBQ0g7SUFBQSxNQUthLGdDQUFnQztRQUw3QztZQU1FLHFCQUFnQixHQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLGlCQUFZLEdBQWtCO2dCQUM1QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztnQkFDN0IsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7Z0JBQ3hCLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO2dCQUMxQixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztnQkFDNUIsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7Z0JBQzFCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO2FBQzlCLENBQUM7U0FNSDtRQUpDLCtDQUErQztRQUMvQyxZQUFZO1lBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25GLENBQUM7O29IQWRVLGdDQUFnQzt5RUFBaEMsZ0NBQWdDO1lDWDdDLGdDQUNFO1lBQ0EsZ0NBQ0U7WUFBQSwrRUFBdUM7WUFDdkMsK0VBQTRDO1lBQzVDLCtFQUF1QztZQUN6QywwQkFBZTtZQUdmLGdDQUNFO1lBQUEsK0VBQXVDO1lBQ3ZDLCtFQUE0QztZQUM1QywrRUFBdUM7WUFDekMsMEJBQWU7WUFHZixnQ0FDRTtZQUFBLGlGQUF1QztZQUN6QywwQkFBZTtZQUdmLGlDQUNFO1lBQUEsaUZBQXVDO1lBQ3pDLDBCQUFlO1lBR2YsaUNBQ0U7WUFBQSxpRkFDRTtZQUVKLDBCQUFlO1lBR2Ysa0ZBRUE7WUFDQSxrRkFFQTtZQUVBLGtGQUE2RDtZQUU3RCxrRkFBd0Y7WUFDeEYsa0ZBQXVGO1lBQ3pGLGlCQUFROztZQTVDUyw2Q0FBMkI7WUFpQ3ZCLGdCQUFtQztZQUFuQyxzREFBbUM7WUFHbkMsZUFBMkQ7WUFBM0QsNERBQTJEO1lBSWxFLGVBQWdEO1lBQWhELHVEQUFnRDtZQUV6QyxlQUFtQztZQUFuQyxzREFBbUM7WUFDbkMsZUFBaUM7WUFBakMsNERBQWlDOzsyQ0QzQ3REO0tBMEJDO1NBZlksZ0NBQWdDO2tEQUFoQyxnQ0FBZ0M7Y0FMNUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO2dCQUN2RCxXQUFXLEVBQUUsMkNBQTJDO2FBQ3pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2FjdGlvbn0gZnJvbSAnLi4vdGFibGUtZm9vdGVyLXJvdy90YWJsZS1mb290ZXItcm93LWV4YW1wbGUnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSB3aXRoIG11bHRpcGxlIGhlYWRlciBhbmQgZm9vdGVyIHJvd3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLW11bHRpcGxlLWhlYWRlci1mb290ZXItZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlTXVsdGlwbGVIZWFkZXJGb290ZXJFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ2l0ZW0nLCAnY29zdCddO1xuICB0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10gPSBbXG4gICAge2l0ZW06ICdCZWFjaCBiYWxsJywgY29zdDogNH0sXG4gICAge2l0ZW06ICdUb3dlbCcsIGNvc3Q6IDV9LFxuICAgIHtpdGVtOiAnRnJpc2JlZScsIGNvc3Q6IDJ9LFxuICAgIHtpdGVtOiAnU3Vuc2NyZWVuJywgY29zdDogNH0sXG4gICAge2l0ZW06ICdDb29sZXInLCBjb3N0OiAyNX0sXG4gICAge2l0ZW06ICdTd2ltIHN1aXQnLCBjb3N0OiAxNX0sXG4gIF07XG5cbiAgLyoqIEdldHMgdGhlIHRvdGFsIGNvc3Qgb2YgYWxsIHRyYW5zYWN0aW9ucy4gKi9cbiAgZ2V0VG90YWxDb3N0KCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zYWN0aW9ucy5tYXAodCA9PiB0LmNvc3QpLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjICsgdmFsdWUsIDApO1xuICB9XG59XG4iLCI8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cInRyYW5zYWN0aW9uc1wiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8IS0tIEl0ZW0gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIml0ZW1cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBJdGVtIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHRyYW5zYWN0aW9uXCI+IHt7dHJhbnNhY3Rpb24uaXRlbX19IDwvdGQ+XG4gICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj4gVG90YWwgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBDb3N0IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJjb3N0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gQ29zdCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCB0cmFuc2FjdGlvblwiPiB7e3RyYW5zYWN0aW9uLmNvc3QgfCBjdXJyZW5jeX19IDwvdGQ+XG4gICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj4ge3tnZXRUb3RhbENvc3QoKSB8IGN1cnJlbmN5fX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBJdGVtIERlc2NyaXB0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJpdGVtLWRlc2NyaXB0aW9uXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTmFtZSBvZiB0aGUgaXRlbSBwdXJjaGFzZWQgPC90aD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBDb3N0IERlc2NyaXB0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJjb3N0LWRlc2NyaXB0aW9uXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gQ29zdCBvZiB0aGUgaXRlbSBpbiBVU0QgPC90aD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBEaXNjbGFpbWVyIGNvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJkaXNjbGFpbWVyXCI+XG4gICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZiBjb2xzcGFuPVwiMlwiPlxuICAgICAgUGxlYXNlIG5vdGUgdGhhdCB0aGUgY29zdCBvZiBpdGVtcyBkaXNwbGF5ZWQgYXJlIGNvbXBsZXRlbHkgYW5kIHRvdGFsbHkgbWFkZSB1cC5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFRoZSB0YWJsZSB3aWxsIHJlbmRlciB0d28gaGVhZGVyIHJvd3MsIG9uZSBkYXRhIHJvdyBwZXIgZGF0YSBvYmplY3QsIGFuZCB0d28gZm9vdGVyIHJvd3MuIC0tPlxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWZpcnN0LWhlYWRlci1yb3dcIj5cbiAgPC90cj5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJbJ2l0ZW0tZGVzY3JpcHRpb24nLCAnY29zdC1kZXNjcmlwdGlvbiddXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1zZWNvbmQtaGVhZGVyLXJvd1wiPlxuICA8L3RyPlxuXG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG5cbiAgPHRyIG1hdC1mb290ZXItcm93ICptYXRGb290ZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCIgY2xhc3M9XCJleGFtcGxlLWZpcnN0LWZvb3Rlci1yb3dcIj48L3RyPlxuICA8dHIgbWF0LWZvb3Rlci1yb3cgKm1hdEZvb3RlclJvd0RlZj1cIlsnZGlzY2xhaW1lciddXCIgY2xhc3M9XCJleGFtcGxlLXNlY29uZC1mb290ZXItcm93XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=