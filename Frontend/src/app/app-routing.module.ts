import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudcmpComponent } from './component/crudcmp/crudcmp.component';
import { HomeComponent } from './component/home/home.component';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { PostsComponent } from './component/posts/posts.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'loginpage', pathMatch: 'full' },
  {path: 'loginpage' , component: LoginpageComponent},
   { path : 'register', component : RegisterComponent },
   { path : 'home', component : HomeComponent },
   { path : 'posts', component : PostsComponent },
   { path : 'crudData', component : CrudcmpComponent },


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
