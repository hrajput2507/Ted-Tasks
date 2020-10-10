import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { PostsComponent } from './component/posts/posts.component';
import { MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule} from '@angular/material/paginator';
import { CrudcmpComponent } from './component/crudcmp/crudcmp.component';
import { DialogboxComponent } from './component/dialogbox/dialogbox.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginpageComponent,
    PostsComponent,
    CrudcmpComponent,
    DialogboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
    

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
