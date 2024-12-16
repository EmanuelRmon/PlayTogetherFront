import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopComponent } from './components/shop/shop.component';

export const routes: Routes = [
    { path: 'home', title: 'PlayTogether - Home', component:HomeComponent},
    { path: 'login', title: 'PlayTogether - Login', component:LoginComponent},
    { path: 'register',title: 'PlayTogether - Register',component:RegisterComponent},
    { path: 'shop',title: 'PlayTogether - Shop', component:ShopComponent}
];
