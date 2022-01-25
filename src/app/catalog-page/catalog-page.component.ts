import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientServiceService } from '../client-service.service';
import { Store } from '@ngxs/store';
import { AddArticle } from '../../../shared/actions/article.action';
import { Article } from '../../../shared/models/article';

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
  constructor(private service: ClientServiceService, private store: Store) {}
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

  addArticle(item: Article): void {
    this.store.dispatch(new AddArticle(item));
  }
}
