import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapComponent } from './swap/swap.component';
import { PrimeComponent } from './prime/prime.component';
import { ArrayComponent } from './array/array.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvenarrayComponent } from './evenarray/evenarray.component';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    SwapComponent,
    PrimeComponent,
    ArrayComponent,
    EvenarrayComponent,
    PageComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
