import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { Product, newProduct } from '../interface/table.interface';
import { AbstractService } from '../shared/rep.service';
import { HttpConnector } from '../shared/httpConector';

@Injectable({
  providedIn: 'root',
})
export class TableService extends AbstractService {
  public productSubject = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpConnector) {
    super();
  }

  public getData(): Observable<any> {
    return this.http.request({ method: 'GET', urlPath: 'all-products' }).pipe(
      catchError((error: any) => {
        return this.handelError(error);
      })
    );
  }

  public nGetData(): void {
    this.getData().subscribe((data) => {
      this.productSubject.next(data);
    });
  }
  public postData(body: newProduct): Observable<any> {
    return this.http
      .request({ method: 'POST', urlPath: `products`, body })
      .pipe(
        catchError((error: any) => {
          return this.handelError(error);
        })
      );
  }
  public putData(body: Product): Observable<any> {
    return this.http
      .request({ method: 'PUT', urlPath: `products/${body.productID}`, body })
      .pipe(
        catchError((error: any) => {
          return this.handelError(error);
        })
      );
  }

  public deleteData(productID: number): Observable<any> {
    return this.http
      .request({ method: 'DELETE', urlPath: `products/${productID}` })
      .pipe(
        catchError((error: any) => {
          return this.handelError(error);
        })
      );
  }
}
