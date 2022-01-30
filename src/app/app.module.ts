import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import {
  UserCreationComponent,
  PhonePipe,
} from './user-creation/user-creation.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { TetiereComponent } from './tetiere/tetiere.component';
import { NgxsModule } from '@ngxs/store';
import { ArticleList } from 'shared/states/article-list-state';
import { PanierComponent } from './panier/panier.component';
import { DetailComponent } from './detail/detail.component';
import { AdressesFieldComponent } from './adresses-field/adresses-field.component';
import { UserState } from 'shared/states/user-state';

const appRoutes: Routes = [
  {
    path: 'home',
    component: MainPageComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./user-creation/user-creation.component').then(
        (m) => m.UserCreationComponent
      ),
  },
  {
    path: 'createAccount',
    loadChildren: () =>
      import('./user-creation/user-creation.component').then(
        (m) => m.UserCreationComponent
      ),
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./catalog-page/catalog-page.component').then(
        (m) => m.CatalogPageComponent
      ),
  },
  {
    path: 'summary',
    component: PanierComponent, //Fait crash en lazy loading. Je ne sais pas d'où ça vient ...
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./detail/detail.component').then((m) => m.DetailComponent),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserCreationComponent,
    CatalogPageComponent,
    PhonePipe,
    TetiereComponent,
    PanierComponent,
    DetailComponent,
    AdressesFieldComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([ArticleList, UserState]),
  ],
  providers: [],
  bootstrap: [AppComponent, UserCreationComponent, TetiereComponent],
})
export class AppModule {}
