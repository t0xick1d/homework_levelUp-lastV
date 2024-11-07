import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  @Input() tags!: string[];
  constructor() {}

  ngOnInit(): void {}
  genereteID(): string {
    return `${Math.floor(Math.random() * 100000)}`;
  }
}
