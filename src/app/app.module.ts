import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { ReviewComponent } from './components/review/review.component';
import { MenuComponent } from './components/menu/menu.component';
import { CommitmentComponent } from './components/commitment/commitment.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';

import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutComponent } from './pages/about/about.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrderComponent } from './pages/order/order.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { TermsComponent } from './pages/terms/terms.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProcessComponent } from './components/process/process.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubscriptionComponent,
    ReviewComponent,
    MenuComponent,
    CommitmentComponent,
    PopUpComponent,
    HomeComponent,
    PricingComponent,
    AboutComponent,
    FoodsComponent,
    ProfileComponent,
    OrderComponent,
    PolicyComponent,
    TermsComponent,
    AdminComponent,
    AdminCategoriesComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProcessComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
