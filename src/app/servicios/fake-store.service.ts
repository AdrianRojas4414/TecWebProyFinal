import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  //GET

  getProducts():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  //GET
  getProductById(id: number):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  //POST
  createProduct(product:any):Observable<any>{
    return this.http.post(this.apiUrl, product);
  }

  //PUT
  updateProduct(id:number, product:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  //DELETE
  deleteProduct(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
