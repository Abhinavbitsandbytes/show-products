import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetData {

  constructor(private http: HttpClient) { }

  execute( url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': "application/json"
      }),
   
    };
        return this.http.get<any>(url, httpOptions);
  }
  getData(){
    return this.execute("https://www.dailyobjects.com/api/products/feed?count=16&fields=slug,categories.slug,brand.slug,model.name,model.slug,subProducts.exclusiveOffer,subProducts.name,subProducts.slug,subProducts.thumbnail,subProducts.buildOptions,subProducts.mrp,subProducts.sellingPrice,subProducts.inventoryPrice,subProducts.inventory,subProducts.tags.slug,subProducts.status&filter=%7B%22$and%22:%5B%7B%22subProducts.buildOptions.caseType%22:%7B%22$eq%22:%22glass%22%7D%7D,%7B%22model.slug%22:%7B%22$eq%22:%22iphone-7%22%7D%7D,%7B%22brand.slug%22:%7B%22$eq%22:%22apple%22%7D%7D,%7B%22categories.slug%22:%7B%22$eq%22:%22designer-cases%22%7D%7D,%7B%22subProducts.status%22:%7B%22$in%22:%5B%22active%22,%22commingSoon%22%5D%7D%7D%5D%7D&q=&sort=-subProducts.popularity&start=16")
  }
}
