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

const appRoutes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'login', component: UserCreationComponent },
  { path: 'createAccount', component: UserCreationComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'summary', component: PanierComponent },
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([ArticleList]),
  ],
  providers: [],
  bootstrap: [AppComponent, UserCreationComponent],
})
export class AppModule {}
