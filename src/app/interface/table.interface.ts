import { ComponentType } from '@angular/cdk/portal';
import { Component, ComponentRef, Type } from '@angular/core';

export interface Product {
  productID: number;
  name: string;
  price: number;
  discount: number;
  sku: string;
  isActive: boolean;
  countryCode: string;
  itemUrl: string;
  tags: string[];
  image: string;
  token: string;
}
export interface ConfigTable {
  titleColums: string;
  component: ComponentType<unknown>;
}
export interface newProduct {
  name: string;
  price: number;
  discount: number;
  sku: string;
  isActive: boolean;
  countryCode: string;
  itemUrl: string;
  tags: string[];
}

export interface DialogData {
  id: string;
}
