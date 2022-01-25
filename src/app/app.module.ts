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

const appRoutes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'login', component: UserCreationComponent },
  { path: 'createAccount', component: UserCreationComponent },
  { path: 'catalog', component: CatalogPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserCreationComponent,
    CatalogPageComponent,
    PhonePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent, UserCreationComponent],
})
export class AppModule {}
