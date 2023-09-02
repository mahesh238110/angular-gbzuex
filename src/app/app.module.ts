import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomrComponent } from './homr/homr.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './top/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomrComponent },
  { path: 'homr', component: HomrComponent },
  { path: 'top', component: TopBarComponent },
  { path: 'product', component: ProductListComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomrComponent,
    TopBarComponent,
    ProductListComponent,
    ChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
