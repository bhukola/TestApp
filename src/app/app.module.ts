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
import {MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatDividerModule } from '@angular/material/divider';
// import { NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { NgxMatColorPickerModule } from 'ngx-mat-color-picker';
import { MAT_COLOR_FORMATS } from '@angular/material/core';
// import { MAT_COLOR_FORMATS } from '@angular/material/core';
import { NGX_MAT_COLOR_FORMATS } from 'ngx-mat-color-picker';




// import { MDBBootstrapModule } from 'angular-bootstrap-md';







@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
  
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
    // MAT_COLOR_FORMATS,
    NGX_MAT_COLOR_FORMATS,
    NgxMatColorPickerModule,
    MAT_COLOR_FORMATS

     
    // MDBBootstrapModule.forRoot(), 

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
