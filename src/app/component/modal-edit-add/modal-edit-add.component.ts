import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TableComponent } from '../../table/table.component';
import { TableService } from 'src/app/table/table.service';
import { newProduct } from 'src/app/interface/table.interface';

@Component({
  selector: 'app-modal-edit-add',
  templateUrl: './modal-edit-add.component.html',
  styleUrls: ['./modal-edit-add.component.scss'],
})
export class ModalEditAddComponent implements OnInit {
  public data: newProduct = {
    name: '',
    price: 0,
    discount: 0,
    sku: '',
    isActive: true,
    countryCode: '',
    itemUrl: '',
    tags: [],
  };
  constructor(
    public dialogRef: MatDialogRef<TableComponent>,
    private tableService: TableService
  ) {}

  ngOnInit(): void {}
  onSave(): void {
    this.tableService.postData(this.data).subscribe(() => {
      this.tableService.nGetData();
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
