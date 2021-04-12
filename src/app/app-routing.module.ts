import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'foods', component: FoodsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'order', component: OrderComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'orders' },
    { path: 'categories', component: AdminCategoriesComponent },
    { path: 'products', component: AdminProductsComponent },
    { path: 'orders', component: AdminOrdersComponent }
  ] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
