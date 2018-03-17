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
    return this.http.post(this.baseUrl + 'Account/register', body, httpOptions)
      .map((response: Response) => response.json());
  }
}
