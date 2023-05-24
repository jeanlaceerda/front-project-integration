import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StockComponent } from './components/stock/stock.component';
import { FinancialComponent } from './components/financial/financial.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { RememberPasswordComponent } from './components/remember-password/remember-password.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    DashboardComponent,
    StockComponent,
    FinancialComponent,
    LoginComponent,
    NewUserComponent,
    RememberPasswordComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
