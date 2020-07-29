import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
  import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
