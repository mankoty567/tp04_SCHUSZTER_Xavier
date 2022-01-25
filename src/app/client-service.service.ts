import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

type product = {
  id: number;
  name: string;
  price: number;
  number: number;
};

@Injectable({
  providedIn: 'root',
})
export class ClientServiceService {
  constructor(private http: HttpClient) {}

  public postClient(): string {
    return 'postClient';
  }

  public getClient(): string {
    return 'getClient';
  }

  public postLogin(): string {
    return 'postLogin';
  }

  public getCatalogue(): Observable<any> {
    return this.http.get(environment.baseUrl);
  }
}
