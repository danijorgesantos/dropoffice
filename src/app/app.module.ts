import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageAuthenticationComponent } from './admin-page-authentication/admin-page-authentication.component';
import { AdminComponentProductCardComponent } from './admin-component-product-card/admin-component-product-card.component';
import { CollectionsMenuComponent } from './collections-menu/collections-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AddCollectionComponent } from './add-collection/add-collection.component';
import { CollectionCardComponent } from './collection-card/collection-card.component';
import { SingleCollectionMenuComponent } from './single-collection-menu/single-collection-menu.component';
import { AddProductToCollectionComponent } from './add-product-to-collection/add-product-to-collection.component';
import { CollectionProductCardComponent } from './collection-product-card/collection-product-card.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageCardComponent } from './message-card/message-card.component';
import { ProductUpdatePageComponent } from './product-update-page/product-update-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageAuthenticationComponent,
    AdminComponentProductCardComponent,
    SideMenuComponent,
    CollectionsMenuComponent,
    AddCollectionComponent,
    CollectionCardComponent,
    SingleCollectionMenuComponent,
    AddProductToCollectionComponent,
    CollectionProductCardComponent,
    MessagesComponent,
    MessageCardComponent,
    ProductUpdatePageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
