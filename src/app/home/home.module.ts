import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { SideBarModule } from '../side-bar/side-bar.module';
import { ContainerModule } from '../container/container.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    SideBarModule,
    ContainerModule
  ],
  exports: [
    
  ]
})
export class HomeModule { }
