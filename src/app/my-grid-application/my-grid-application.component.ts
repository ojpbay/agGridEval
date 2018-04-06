import {Component} from "@angular/core";
import {GridOptions} from "ag-grid/main";
import { products } from './products';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html',
    styleUrls: ['./my-grid-application.component.css']
})
export class MyGridApplicationComponent {
    private gridApi;
    gridOptions: GridOptions;
    columnDefs: any[]
    rowData: any[];

    constructor() {
        this.gridOptions = <GridOptions>{};

        this.columnDefs = [
            {headerName: "ID", field: "ProductID", pinned: 'left', width: 100},
            {headerName: "Name", field: "ProductName"},
            {headerName: "Category", field: "Category.CategoryName"},
            {headerName: "Price", field: "UnitPrice"},
            {headerName: "In stock", field: "UnitsInStock"},
            {headerName: "On order", field: "UnitsOnOrder"},
            {headerName: "Discontinued", field: "Discontinued", width: 100}
        ];

        this.rowData = products;    
    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }

    onBtExport() {
        var params = {          
        };
        this.gridApi.exportDataAsExcel(params);
      }
}

