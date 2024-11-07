import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss'],
})
export class SkuComponent implements OnInit {
  @Input() sku!: string;
  constructor() {}

  ngOnInit(): void {}
}
