import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailsComponent } from './app/item-details/item-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatDividerModule } from '@angular/material/divider';
// import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './app/cart/cart.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { SignInComponent } from './authentication-page/sign-in/sign-in.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NgxMatColorPickerModule } from 'ngx-mat-color-picker';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
    CartComponent,
    SearchComponent,
    ProductListComponent,
    AuthenticationPageComponent,
    SignInComponent,
    TopBarComponent,
    NavBarComponent,
    HomeComponent,
    
    
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatSelectModule,
    CdkAccordionModule,
    MatDividerModule,
    RouterModule,
    NgxMatColorPickerModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
