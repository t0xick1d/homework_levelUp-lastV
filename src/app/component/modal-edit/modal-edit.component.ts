import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActionComponent } from '../action/action.component';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Product } from 'src/app/interface/table.interface';
import { TableService } from '../../table/table.service';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}
interface DataProduct {
  categories: number;
  item: Product;
}
@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent {
  public activeProduct!: Product;
  public dataCategories!: FoodNode[];
  public selectedTabIndex!: number;
  public formEdit: FormGroup;
  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  constructor(
    private fb: FormBuilder,
    private tableService: TableService,
    public dialogRef: MatDialogRef<ActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataProduct
  ) {
    this.formEdit = this.fb.group({
      name: [data.item.name, [Validators.required]],
      price: [data.item.price, [Validators.required, Validators.min(1)]],
      discount: [data.item.discount, [Validators.required, Validators.min(1)]],
      sku: [data.item.sku, [Validators.required, Validators.minLength(6)]],
    });
    this.selectedTabIndex = this.data.categories;
    this.dataCategories = this.data.item.tags.map((e) => {
      return {
        name: e,
        children: [],
      };
    });
    this.dataSource.data = this.dataCategories;
  }
  ngOnInit(): void {
    this.formEdit.valueChanges.subscribe((v) => {
      console.log(v);
    });
  }
  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSave(): void {
    this.tableService
      .putData({ ...this.data.item, ...this.formEdit.value })
      .subscribe(() => {
        this.tableService.nGetData();
      });
  }
}
