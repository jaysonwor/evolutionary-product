import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { StateService } from './services/state.service';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [AppComponent, SidenavComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, MaterialAppModule, FlexLayoutModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, StateService],
  bootstrap: [AppComponent],
})
export class AppModule { }
