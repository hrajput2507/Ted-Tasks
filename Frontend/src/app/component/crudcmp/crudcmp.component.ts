import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



export interface UsersData {
  name: string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [
  {  id: 1560608769632, name: 'Angular' },
  {  id: 1560608796014, name: 'java' },
  {  id: 1560608805101, name: 'Blockchain' },
  {  id: 1560608802107, name:'javascript'},

];


@Component({
  selector: 'app-crudcmp',
  templateUrl: './crudcmp.component.html',
  styleUrls: ['./crudcmp.component.scss']
})
export class CrudcmpComponent {
  
  displayedColumns: string[] = [ 'id', 'name', 'action'];
  dataSource = ELEMENT_DATA;
  


  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  //this.dataSource.paginator = this.paginator;

  constructor(public dialog: MatDialog) { }
  
  
  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }


  addRowData(row_obj) {
    var d = new Date();
    this.dataSource.push({
      id: d.getTime(),
      name: row_obj.name
    });
    this.table.renderRows();

  }
  updateRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }

}
