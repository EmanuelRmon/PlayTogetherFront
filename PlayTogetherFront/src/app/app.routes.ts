import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopComponent } from './components/shop/shop.component';
import { Error404Component } from './components/error404/error404.component';
import { ProfileComponent } from './components/profile/profile.component';



export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login'},
    { path: 'home', title: 'PlayTogether - Home', component:HomeComponent},
    { path: 'login', title: 'PlayTogether - Login', component:LoginComponent},
    { path: 'register',title: 'PlayTogether - Register',component:RegisterComponent},
    { path: '404', component:Error404Component},
    { path: 'profile',title: 'PlayTogether - Profile', component:ProfileComponent},
    { path: 'shop',title: 'PlayTogether - Shop', component:ShopComponent},
    { path: '**', pathMatch: 'full', redirectTo: '404'}
];
