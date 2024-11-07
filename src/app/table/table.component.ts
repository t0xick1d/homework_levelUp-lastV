import { Component, Input, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { ConfigTable, Product } from '../interface/table.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditAddComponent } from '../component/modal-edit-add/modal-edit-add.component';
import { ModalEditComponent } from '../component/modal-edit/modal-edit.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() configure: ConfigTable[] = [];
  public dataSource: Product[] = [];
  public displayedColumns: string[] = [];
  constructor(public dialog: MatDialog, private tableService: TableService) {}

  ngOnInit(): void {
    this.displayedColumns = this.configure.map((e) => e.titleColums);
    this.tableService.nGetData();
    this.tableService.productSubject.subscribe((data) => {
      this.dataSource = data;
    });
  }
  openEditCtegories(element: Product): void {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      data: { categories: 1, item: { ...element } },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalEditAddComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  clear(): void {
    this.tableService.productSubject.next([]);
  }
}
