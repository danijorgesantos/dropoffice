import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

import { AdminMenuRouteHomeComponent } from './admin-menu-route-home/admin-menu-route-home.component';
import { AdminPageAuthenticationComponent } from './admin-page-authentication/admin-page-authentication.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CollectionsMenuComponent } from './collections-menu/collections-menu.component';
import { AddCollectionComponent } from './add-collection/add-collection.component';
import { SingleCollectionMenuComponent } from './single-collection-menu/single-collection-menu.component';
import { AddProductToCollectionComponent } from './add-product-to-collection/add-product-to-collection.component';

const routes: Routes = [
  {
    path: '',
    component: SideMenuComponent,
    canActivate: [AuthGuard], // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '', // child route path
        component: AdminMenuRouteHomeComponent // child route component that the router renders
      },
      {
        path: 'collections',
        component: CollectionsMenuComponent // another child route component that the router renders
      },
      {
        path: 'add-collection',
        component: AddCollectionComponent // another child route component that the router renders
      },
      {
        path: 'collections/:url',
        component: SingleCollectionMenuComponent, // another child route component that the router renders
      },
      {
        path: 'collections/:url/add-product', // child route path
        component: AddProductToCollectionComponent // child route component that the router renders
      },
    ]
  },
  { path: 'login', component: AdminPageAuthenticationComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
