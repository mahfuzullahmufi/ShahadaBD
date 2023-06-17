import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { IProductType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:7217/api/';
  shopParams = new ShopParams();

  constructor(private http: HttpClient) { }
  getProducts(shopParams: ShopParams) {

    let params = new HttpParams();

    if(shopParams.brandId != 0){
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if(shopParams.typeId != 0){
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if(shopParams.search){
      params = params.append('search', shopParams.search);
    }

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString())
    params = params.append('pageSize', shopParams.pageSize.toString())

    //console.log("Params", params);
    
    return this.http.get<IPagination>(this.baseUrl + 'Products',{observe: 'response', params})
    .pipe(
      map(response => {
        return response.body;
      })
    )
  };

  setShopParams(params: ShopParams) {
    this.shopParams = params;
  }

  getShopParams() {
    return this.shopParams;
  }

  getProduct(id: number) {
    // let product: IProduct;
    // this.productCache.forEach((products: IProduct[]) => {
    //   console.log(product);
    //   product = products.find(p => p.id === id);
    // })

    // if (product) {
    //   return of(product);
    // }

    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'Products/Brands');
  };

  getTypes(){
    return this.http.get<IProductType[]>(this.baseUrl + 'Products/Types');
  };

}
