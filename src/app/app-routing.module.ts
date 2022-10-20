import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { EvenarrayComponent } from './evenarray/evenarray.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { PrimeComponent } from './prime/prime.component';
import { RegisterComponent } from './register/register.component';
import { SwapComponent } from './swap/swap.component';

const routes: Routes = [
  {path:'swap' , component: SwapComponent},
  {path:'page' , component: PageComponent},
  {path:'evenarray' , component: EvenarrayComponent},
  {path:'array' , component: ArrayComponent},
  {path:'prime' , component: PrimeComponent},
  {path:'home' , component: HomeComponent},
  {path:'register' , component: RegisterComponent},
  {path:'' , component: LoginComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
