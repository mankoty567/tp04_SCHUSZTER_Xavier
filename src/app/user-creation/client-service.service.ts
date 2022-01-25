import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientServiceService {
  constructor() {}

  public postClient(): string {
    return 'postClient';
  }

  public getClient(): string {
    return 'getClient';
  }

  public postLogin(): string {
    return 'postLogin';
  }

  public getCatalogue(): string {
    return 'getCatalogue';
  }
}
