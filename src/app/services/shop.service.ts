import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable()
export class ShopService {

  private baseUrl = 'https://pyramidst.herokuapp.com/api/';

  constructor (private http: HttpClient) {}


  public getAll () {
    return this.http.get('./assets/shop/product.json');
  }
}
