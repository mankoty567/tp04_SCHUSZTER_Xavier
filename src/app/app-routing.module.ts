import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';

const appRoutes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'login', component: UserCreationComponent },
  { path: 'createAccount', component: UserCreationComponent },
  { path: 'catalog', component: CatalogPageComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {}
