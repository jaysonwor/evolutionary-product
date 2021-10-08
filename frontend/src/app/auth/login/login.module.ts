import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialAppModule } from 'src/app/ngmaterial.module';
import { HeaderComponent } from 'src/app/navigation/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MaterialAppModule,
    FlexLayoutModule
  ],
  declarations: [LoginPage, HeaderComponent, LayoutComponent]
})
export class LoginPageModule {}
