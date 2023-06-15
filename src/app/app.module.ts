import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { HomeComponent } from "./views/home/home.component";

import { NavComponent } from "./components/template/nav/nav.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";

import { RedDirective } from "./directives/red.directive";
import { ForDirective } from './directives/for.directive';
@NgModule({
  declarations: [
    AppComponent,
    RedDirective,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductCrudComponent,
    ForDirective,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
