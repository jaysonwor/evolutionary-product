import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { HeaderComponent } from '../navigation/header/header.component';
import { SidenavComponent } from '../navigation/sidenav/sidenav.component';
import { MaterialAppModule } from '../ngmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from '../layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MaterialAppModule,
    FlexLayoutModule
  ],
  declarations: [HomePage, HeaderComponent, LayoutComponent]
})
export class HomePageModule {}
