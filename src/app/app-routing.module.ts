import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './app/item-details/item-details.component';
import { CartComponent } from './app/cart/cart.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';



const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent},
  { 
    path: 'Cart', 
    component: CartComponent},
  { 
    path: 'Item',
     component: ItemDetailsComponent},
  { 
    path: 'Navbar',
     component: NavBarComponent},
  {
     path: 'search', 
  component: SearchComponent},
  { 
    path: 'Topbar', 
    component: TopBarComponent},
  { 
    path: 'Product', 
    component: ProductListComponent},
  { 
    path: 'Page',
   component: AuthenticationPageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
