import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable()
export class BackendService {

  private baseUrl = 'https://pyramidst.herokuapp.com/api/';

  constructor (private http: HttpClient) {}



  public register (body) {
    console.log(body, httpOptions)
    return this.http.post(this.baseUrl + 'Account/register', body, httpOptions);
  }
  public login (body) {
    return this.http.post(this.baseUrl + 'Account/login', body, httpOptions);
  }
  public getAll () {
    return this.http.get('./assets/test/test.json');
  }
}
