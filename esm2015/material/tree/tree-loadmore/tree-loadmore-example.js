/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
function TreeLoadmoreExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 4);
    i0.ɵɵelement(1, "button", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r3.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 4);
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const node_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.loadChildren(node_r4); });
    i0.ɵɵelementStart(2, "mat-icon", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "toggle " + node_r4.filename);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r4) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r4.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node");
    i0.ɵɵelementStart(1, "button", 8);
    i0.ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const node_r7 = ctx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.loadMore(node_r7.loadMoreParentItem); });
    i0.ɵɵtext(2, " Load more... ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const LOAD_MORE = 'LOAD_MORE';
/** Nested node */
export class LoadmoreNode {
    constructor(item, hasChildren = false, loadMoreParentItem = null) {
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new BehaviorSubject([]);
    }
    get children() {
        return this.childrenChange.value;
    }
}
/** Flat node with expandable and level information */
export class LoadmoreFlatNode {
    constructor(item, level = 1, expandable = false, loadMoreParentItem = null) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
}
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
let LoadmoreDatabase = /** @class */ (() => {
    class LoadmoreDatabase {
        constructor() {
            this.batchNumber = 5;
            this.dataChange = new BehaviorSubject([]);
            this.nodeMap = new Map();
            /** The data */
            this.rootLevelNodes = ['Vegetables', 'Fruits'];
            this.dataMap = new Map([
                ['Fruits', ['Apple', 'Orange', 'Banana']],
                ['Vegetables', ['Tomato', 'Potato', 'Onion']],
                ['Apple', ['Fuji', 'Macintosh']],
                ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
            ]);
        }
        initialize() {
            const data = this.rootLevelNodes.map(name => this._generateNode(name));
            this.dataChange.next(data);
        }
        /** Expand a node whose children are not loaded */
        loadMore(item, onlyFirstTime = false) {
            if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
                return;
            }
            const parent = this.nodeMap.get(item);
            const children = this.dataMap.get(item);
            if (onlyFirstTime && parent.children.length > 0) {
                return;
            }
            const newChildrenNumber = parent.children.length + this.batchNumber;
            const nodes = children.slice(0, newChildrenNumber)
                .map(name => this._generateNode(name));
            if (newChildrenNumber < children.length) {
                // Need a new load more node
                nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
            }
            parent.childrenChange.next(nodes);
            this.dataChange.next(this.dataChange.value);
        }
        _generateNode(item) {
            if (this.nodeMap.has(item)) {
                return this.nodeMap.get(item);
            }
            const result = new LoadmoreNode(item, this.dataMap.has(item));
            this.nodeMap.set(item, result);
            return result;
        }
    }
    LoadmoreDatabase.ɵfac = function LoadmoreDatabase_Factory(t) { return new (t || LoadmoreDatabase)(); };
    LoadmoreDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: LoadmoreDatabase, factory: LoadmoreDatabase.ɵfac });
    return LoadmoreDatabase;
})();
export { LoadmoreDatabase };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoadmoreDatabase, [{
        type: Injectable
    }], null, null); })();
/**
 * @title Tree with partially loaded data
 */
let TreeLoadmoreExample = /** @class */ (() => {
    class TreeLoadmoreExample {
        constructor(_database) {
            this._database = _database;
            this.nodeMap = new Map();
            this.getChildren = (node) => node.childrenChange;
            this.transformer = (node, level) => {
                const existingNode = this.nodeMap.get(node.item);
                if (existingNode) {
                    return existingNode;
                }
                const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
                this.nodeMap.set(node.item, newNode);
                return newNode;
            };
            this.getLevel = (node) => node.level;
            this.isExpandable = (node) => node.expandable;
            this.hasChild = (_, _nodeData) => _nodeData.expandable;
            this.isLoadMore = (_, _nodeData) => _nodeData.item === LOAD_MORE;
            this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
            this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
            _database.dataChange.subscribe(data => {
                this.dataSource.data = data;
            });
            _database.initialize();
        }
        /** Load more nodes from data source */
        loadMore(item) {
            this._database.loadMore(item);
        }
        loadChildren(node) {
            this._database.loadMore(node.item, true);
        }
    }
    TreeLoadmoreExample.ɵfac = function TreeLoadmoreExample_Factory(t) { return new (t || TreeLoadmoreExample)(i0.ɵɵdirectiveInject(LoadmoreDatabase)); };
    TreeLoadmoreExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeLoadmoreExample, selectors: [["tree-loadmore-example"]], features: [i0.ɵɵProvidersFeature([LoadmoreDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"], ["mat-button", "", 3, "click"]], template: function TreeLoadmoreExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tree", 0);
            i0.ɵɵtemplate(1, TreeLoadmoreExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
            i0.ɵɵtemplate(2, TreeLoadmoreExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
            i0.ɵɵtemplate(3, TreeLoadmoreExample_mat_tree_node_3_Template, 3, 0, "mat-tree-node", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matTreeNodeDefWhen", ctx.isLoadMore);
        } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodePadding, i2.MatButton, i1.MatTreeNodeToggle, i3.MatIcon], styles: [""] });
    return TreeLoadmoreExample;
})();
export { TreeLoadmoreExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeLoadmoreExample, [{
        type: Component,
        args: [{
                selector: 'tree-loadmore-example',
                templateUrl: 'tree-loadmore-example.html',
                styleUrls: ['tree-loadmore-example.css'],
                providers: [LoadmoreDatabase]
            }]
    }], function () { return [{ type: LoadmoreDatabase }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sb2FkbW9yZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWxvYWRtb3JlL3RyZWUtbG9hZG1vcmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1sb2FkbW9yZS90cmVlLWxvYWRtb3JlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0lDUi9DLHdDQUNFO0lBQUEsNEJBQTBDO0lBQzFDLFlBQ0Y7SUFBQSxpQkFBZ0I7OztJQURkLGVBQ0Y7SUFERSw2Q0FDRjs7OztJQUdBLHdDQUNFO0lBQUEsaUNBSUU7SUFGTSx5T0FBNEI7SUFFbEMsbUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQVc7SUFDYixpQkFBUztJQUNULFlBQ0Y7SUFBQSxpQkFBZ0I7Ozs7SUFSTixlQUE2QztJQUE3QywwREFBNkM7SUFJakQsZUFDRjtJQURFLHlHQUNGO0lBRUYsZUFDRjtJQURFLDZDQUNGOzs7O0lBRUEscUNBQ0U7SUFBQSxpQ0FDRTtJQURpQix3UEFBMkM7SUFDNUQsOEJBQ0Y7SUFBQSxpQkFBUztJQUNYLGlCQUFnQjs7QURabEIsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBRTlCLGtCQUFrQjtBQUNsQixNQUFNLE9BQU8sWUFBWTtJ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M0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRWxGLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7WUFFSCxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQXlCRCx1Q0FBdUM7UUFDdkMsUUFBUSxDQUFDLElBQVk7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVELFlBQVksQ0FBQyxJQUFzQjtZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUM7OzBGQXBEVSxtQkFBbUIsdUJBT0MsZ0JBQWdCOzREQVBwQyxtQkFBbUIsMkVBRm5CLENBQUMsZ0JBQWdCLENBQUM7WUNsRy9CLG1DQUNFO1lBQ0Esd0ZBQ0U7WUFLRix3RkFDRTtZQVdGLHdGQUNFO1lBSUosaUJBQVc7O1lBekJELDJDQUF5QixnQ0FBQTtZQVFsQixlQUEwQztZQUExQyxpREFBMEM7WUFZMUMsZUFBNEM7WUFBNUMsbURBQTRDOzs4QkRwQjdEO0tBeUpDO1NBckRZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBTi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDOUI7c0NBUWdDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VHJlZUZsYXREYXRhU291cmNlLCBNYXRUcmVlRmxhdHRlbmVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuY29uc3QgTE9BRF9NT1JFID0gJ0xPQURfTU9SRSc7XG5cbi8qKiBOZXN0ZWQgbm9kZSAqL1xuZXhwb3J0IGNsYXNzIExvYWRtb3JlTm9kZSB7XG4gIGNoaWxkcmVuQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMb2FkbW9yZU5vZGVbXT4oW10pO1xuXG4gIGdldCBjaGlsZHJlbigpOiBMb2FkbW9yZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5DaGFuZ2UudmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbTogc3RyaW5nLFxuICAgICAgICAgICAgICBwdWJsaWMgaGFzQ2hpbGRyZW4gPSBmYWxzZSxcbiAgICAgICAgICAgICAgcHVibGljIGxvYWRNb3JlUGFyZW50SXRlbTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHt9XG59XG5cbi8qKiBGbGF0IG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGNsYXNzIExvYWRtb3JlRmxhdE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbTogc3RyaW5nLFxuICAgICAgICAgICAgICBwdWJsaWMgbGV2ZWwgPSAxLFxuICAgICAgICAgICAgICBwdWJsaWMgZXhwYW5kYWJsZSA9IGZhbHNlLFxuICAgICAgICAgICAgICBwdWJsaWMgbG9hZE1vcmVQYXJlbnRJdGVtOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge31cbn1cblxuLyoqXG4gKiBBIGRhdGFiYXNlIHRoYXQgb25seSBsb2FkIHBhcnQgb2YgdGhlIGRhdGEgaW5pdGlhbGx5LiBBZnRlciB1c2VyIGNsaWNrcyBvbiB0aGUgYExvYWQgbW9yZWBcbiAqIGJ1dHRvbiwgbW9yZSBkYXRhIHdpbGwgYmUgbG9hZGVkLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9hZG1vcmVEYXRhYmFzZSB7XG4gIGJhdGNoTnVtYmVyID0gNTtcbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TG9hZG1vcmVOb2RlW10+KFtdKTtcbiAgbm9kZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBMb2FkbW9yZU5vZGU+KCk7XG5cbiAgLyoqIFRoZSBkYXRhICovXG4gIHJvb3RMZXZlbE5vZGVzOiBzdHJpbmdbXSA9IFsnVmVnZXRhYmxlcycsICdGcnVpdHMnXTtcbiAgZGF0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oW1xuICAgIFsnRnJ1aXRzJywgWydBcHBsZScsICdPcmFuZ2UnLCAnQmFuYW5hJ11dLFxuICAgIFsnVmVnZXRhYmxlcycsIFsnVG9tYXRvJywgJ1BvdGF0bycsICdPbmlvbiddXSxcbiAgICBbJ0FwcGxlJywgWydGdWppJywgJ01hY2ludG9zaCddXSxcbiAgICBbJ09uaW9uJywgWydZZWxsb3cnLCAnV2hpdGUnLCAnUHVycGxlJywgJ0dyZWVuJywgJ1NoYWxsb3QnLCAnU3dlZXQnLCAnUmVkJywgJ0xlZWsnXV0sXG4gIF0pO1xuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucm9vdExldmVsTm9kZXMubWFwKG5hbWUgPT4gdGhpcy5fZ2VuZXJhdGVOb2RlKG5hbWUpKTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKiBFeHBhbmQgYSBub2RlIHdob3NlIGNoaWxkcmVuIGFyZSBub3QgbG9hZGVkICovXG4gIGxvYWRNb3JlKGl0ZW06IHN0cmluZywgb25seUZpcnN0VGltZSA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLm5vZGVNYXAuaGFzKGl0ZW0pIHx8ICF0aGlzLmRhdGFNYXAuaGFzKGl0ZW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMubm9kZU1hcC5nZXQoaXRlbSkhO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5kYXRhTWFwLmdldChpdGVtKSE7XG4gICAgaWYgKG9ubHlGaXJzdFRpbWUgJiYgcGFyZW50LmNoaWxkcmVuIS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld0NoaWxkcmVuTnVtYmVyID0gcGFyZW50LmNoaWxkcmVuIS5sZW5ndGggKyB0aGlzLmJhdGNoTnVtYmVyO1xuICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4uc2xpY2UoMCwgbmV3Q2hpbGRyZW5OdW1iZXIpXG4gICAgICAubWFwKG5hbWUgPT4gdGhpcy5fZ2VuZXJhdGVOb2RlKG5hbWUpKTtcbiAgICBpZiAobmV3Q2hpbGRyZW5OdW1iZXIgPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIC8vIE5lZWQgYSBuZXcgbG9hZCBtb3JlIG5vZGVcbiAgICAgIG5vZGVzLnB1c2gobmV3IExvYWRtb3JlTm9kZShMT0FEX01PUkUsIGZhbHNlLCBpdGVtKSk7XG4gICAgfVxuXG4gICAgcGFyZW50LmNoaWxkcmVuQ2hhbmdlLm5leHQobm9kZXMpO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YUNoYW5nZS52YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9nZW5lcmF0ZU5vZGUoaXRlbTogc3RyaW5nKTogTG9hZG1vcmVOb2RlIHtcbiAgICBpZiAodGhpcy5ub2RlTWFwLmhhcyhpdGVtKSkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZU1hcC5nZXQoaXRlbSkhO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTG9hZG1vcmVOb2RlKGl0ZW0sIHRoaXMuZGF0YU1hcC5oYXMoaXRlbSkpO1xuICAgIHRoaXMubm9kZU1hcC5zZXQoaXRlbSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBwYXJ0aWFsbHkgbG9hZGVkIGRhdGFcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1sb2FkbW9yZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWxvYWRtb3JlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmVlLWxvYWRtb3JlLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW0xvYWRtb3JlRGF0YWJhc2VdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVMb2FkbW9yZUV4YW1wbGUge1xuICBub2RlTWFwID0gbmV3IE1hcDxzdHJpbmcsIExvYWRtb3JlRmxhdE5vZGU+KCk7XG4gIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8TG9hZG1vcmVGbGF0Tm9kZT47XG4gIHRyZWVGbGF0dGVuZXI6IE1hdFRyZWVGbGF0dGVuZXI8TG9hZG1vcmVOb2RlLCBMb2FkbW9yZUZsYXROb2RlPjtcbiAgLy8gRmxhdCB0cmVlIGRhdGEgc291cmNlXG4gIGRhdGFTb3VyY2U6IE1hdFRyZWVGbGF0RGF0YVNvdXJjZTxMb2FkbW9yZU5vZGUsIExvYWRtb3JlRmxhdE5vZGU+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFiYXNlOiBMb2FkbW9yZURhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIodGhpcy50cmFuc2Zvcm1lciwgdGhpcy5nZXRMZXZlbCxcbiAgICAgIHRoaXMuaXNFeHBhbmRhYmxlLCB0aGlzLmdldENoaWxkcmVuKTtcblxuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPExvYWRtb3JlRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcblxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlRmxhdERhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgdGhpcy50cmVlRmxhdHRlbmVyKTtcblxuICAgIF9kYXRhYmFzZS5kYXRhQ2hhbmdlLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YTtcbiAgICB9KTtcblxuICAgIF9kYXRhYmFzZS5pbml0aWFsaXplKCk7XG4gIH1cblxuICBnZXRDaGlsZHJlbiA9IChub2RlOiBMb2FkbW9yZU5vZGUpOiBPYnNlcnZhYmxlPExvYWRtb3JlTm9kZVtdPiA9PiBub2RlLmNoaWxkcmVuQ2hhbmdlO1xuXG4gIHRyYW5zZm9ybWVyID0gKG5vZGU6IExvYWRtb3JlTm9kZSwgbGV2ZWw6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IHRoaXMubm9kZU1hcC5nZXQobm9kZS5pdGVtKTtcblxuICAgIGlmIChleGlzdGluZ05vZGUpIHtcbiAgICAgIHJldHVybiBleGlzdGluZ05vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Tm9kZSA9XG4gICAgICAgIG5ldyBMb2FkbW9yZUZsYXROb2RlKG5vZGUuaXRlbSwgbGV2ZWwsIG5vZGUuaGFzQ2hpbGRyZW4sIG5vZGUubG9hZE1vcmVQYXJlbnRJdGVtKTtcbiAgICB0aGlzLm5vZGVNYXAuc2V0KG5vZGUuaXRlbSwgbmV3Tm9kZSk7XG4gICAgcmV0dXJuIG5ld05vZGU7XG4gIH1cblxuICBnZXRMZXZlbCA9IChub2RlOiBMb2FkbW9yZUZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBMb2FkbW9yZUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IExvYWRtb3JlRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5leHBhbmRhYmxlO1xuXG4gIGlzTG9hZE1vcmUgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IExvYWRtb3JlRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5pdGVtID09PSBMT0FEX01PUkU7XG5cbiAgLyoqIExvYWQgbW9yZSBub2RlcyBmcm9tIGRhdGEgc291cmNlICovXG4gIGxvYWRNb3JlKGl0ZW06IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGFiYXNlLmxvYWRNb3JlKGl0ZW0pO1xuICB9XG5cbiAgbG9hZENoaWxkcmVuKG5vZGU6IExvYWRtb3JlRmxhdE5vZGUpIHtcbiAgICB0aGlzLl9kYXRhYmFzZS5sb2FkTW9yZShub2RlLml0ZW0sIHRydWUpO1xuICB9XG59XG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8IS0tIExlYWYgbm9kZSAtLT5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLml0ZW19fVxuICA8L21hdC10cmVlLW5vZGU+XG5cbiAgPCEtLSBleHBhbmRhYmxlIG5vZGUgLS0+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCIndG9nZ2xlICcgKyBub2RlLmZpbGVuYW1lXCJcbiAgICAgICAgICAgIChjbGljayk9XCJsb2FkQ2hpbGRyZW4obm9kZSlcIlxuICAgICAgICAgICAgbWF0VHJlZU5vZGVUb2dnbGU+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUuaXRlbX19XG4gIDwvbWF0LXRyZWUtbm9kZT5cblxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaXNMb2FkTW9yZVwiPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwibG9hZE1vcmUobm9kZS5sb2FkTW9yZVBhcmVudEl0ZW0pXCI+XG4gICAgICBMb2FkIG1vcmUuLi5cbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==