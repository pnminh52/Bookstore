import { Routes } from '@angular/router';
import { ListComponent } from './server/product/list/list.component';
import { AddComponent } from './server/product/add/add.component';
import { EditComponent } from './server/product/edit/edit.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { CollectionComponent } from './page/collection/collection.component';
import { NewComponent } from './page/new/new.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { CartComponent } from './page/cart/cart.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { OrderComponent } from './page/order/order.component';
import { SearchComponent } from './page/search/search.component';
import { WishlistComponent } from './page/wishlist/wishlist.component';
import { ProfileComponent } from './page/profile/profile.component';
import { AudiobooksComponent } from './page/audiobooks/audiobooks.component';
import { DashboardComponent } from './server/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'addproduct',
        component: AddComponent,
      },
      {
        path: 'edit/:id',
        component: EditComponent,
      },
    ],
  },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'collection',
    component: CollectionComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },
  {
    path: 'audiobooks',
    component: AudiobooksComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'productDetails/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
