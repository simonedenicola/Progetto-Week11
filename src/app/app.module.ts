import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
/* import { UsersModule } from './users/users.module'; */
/* import { Err404Module } from './err404/err404.module'; */

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    AuthModule,
    /* UsersModule, */
    /* Err404Module */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
