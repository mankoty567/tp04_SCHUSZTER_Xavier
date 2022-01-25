import { Component, OnInit } from '@angular/core';
import { of, Subscription, filter } from 'rxjs';
import { ClientServiceService } from '../client-service.service';

type product = {
  id: number;
  name: string;
  price: number;
  number: number;
};

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css'],
  providers: [ClientServiceService],
})
export class CatalogPageComponent implements OnInit {
  constructor(private service: ClientServiceService) {}
  public productList: product[] = [];
  public searchFilter: string = '';
  public productObservable$ = this.service.getCatalogue();
  public initialProductList: product[] = [];

  subscribe: Subscription | undefined;

  ngOnInit(): void {
    this.subscribe = this.productObservable$.pipe().subscribe((data) => {
      this.productList = data;
      this.initialProductList = data;
    });
  }

  ngOnDestoy(): void {
    if (this.subscribe) this.subscribe.unsubscribe();
  }

  filterList(event: any) {
    if (this.searchFilter.length > 0) {
      this.productList = this.initialProductList.filter((elem) =>
        elem.name.toLowerCase().includes(this.searchFilter.toLowerCase())
      );
    } else {
      this.productList = this.initialProductList;
    }
  }
}
