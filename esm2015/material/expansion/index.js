import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ExpansionExpandCollapseAllExample } from './expansion-expand-collapse-all/expansion-expand-collapse-all-example';
import { ExpansionOverviewExample } from './expansion-overview/expansion-overview-example';
import { ExpansionStepsExample } from './expansion-steps/expansion-steps-example';
import * as i0 from "@angular/core";
export { ExpansionExpandCollapseAllExample, ExpansionOverviewExample, ExpansionStepsExample, };
const EXAMPLES = [
    ExpansionExpandCollapseAllExample,
    ExpansionOverviewExample,
    ExpansionStepsExample,
];
let ExpansionExamplesModule = /** @class */ (() => {
    class ExpansionExamplesModule {
    }
    ExpansionExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ExpansionExamplesModule });
    ExpansionExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ExpansionExamplesModule_Factory(t) { return new (t || ExpansionExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatExpansionModule,
                MatIconModule,
                MatInputModule,
            ]] });
    return ExpansionExamplesModule;
})();
export { ExpansionExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ExpansionExamplesModule, { declarations: [ExpansionExpandCollapseAllExample,
        ExpansionOverviewExample,
        ExpansionStepsExample], imports: [MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule], exports: [ExpansionExpandCollapseAllExample,
        ExpansionOverviewExample,
        ExpansionStepsExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatExpansionModule,
                    MatIconModule,
                    MatInputModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2xDLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRWhGLE9BQU8sRUFDTCxpQ0FBaUMsRUFDakMsd0JBQXdCLEVBQ3hCLHFCQUFxQixHQUN0QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLHFCQUFxQjtDQUN0QixDQUFDO0FBRUY7SUFBQSxNQWFhLHVCQUF1Qjs7K0RBQXZCLHVCQUF1QjtpSUFBdkIsdUJBQXVCLGtCQVp6QjtnQkFDUCxlQUFlO2dCQUNmLG1CQUFtQjtnQkFDbkIsbUJBQW1CO2dCQUNuQixrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2IsY0FBYzthQUNmO2tDQWpDSDtLQXVDQztTQURZLHVCQUF1Qjt3RkFBdkIsdUJBQXVCLG1CQWxCbEMsaUNBQWlDO1FBQ2pDLHdCQUF3QjtRQUN4QixxQkFBcUIsYUFLbkIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjLGFBWmhCLGlDQUFpQztRQUNqQyx3QkFBd0I7UUFDeEIscUJBQXFCO2tEQWdCVix1QkFBdUI7Y0FibkMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdE5hdGl2ZURhdGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRFeHBhbnNpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtcbiAgRXhwYW5zaW9uRXhwYW5kQ29sbGFwc2VBbGxFeGFtcGxlXG59IGZyb20gJy4vZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwvZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZSc7XG5pbXBvcnQge0V4cGFuc2lvbk92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9leHBhbnNpb24tb3ZlcnZpZXcvZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtFeHBhbnNpb25TdGVwc0V4YW1wbGV9IGZyb20gJy4vZXhwYW5zaW9uLXN0ZXBzL2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgRXhwYW5zaW9uRXhwYW5kQ29sbGFwc2VBbGxFeGFtcGxlLFxuICBFeHBhbnNpb25PdmVydmlld0V4YW1wbGUsXG4gIEV4cGFuc2lvblN0ZXBzRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGUsXG4gIEV4cGFuc2lvbk92ZXJ2aWV3RXhhbXBsZSxcbiAgRXhwYW5zaW9uU3RlcHNFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25FeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=