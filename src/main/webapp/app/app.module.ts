import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { NotificacionesSharedModule } from 'app/shared/shared.module';
import { NotificacionesCoreModule } from 'app/core/core.module';
import { NotificacionesAppRoutingModule } from './app-routing.module';
import { NotificacionesHomeModule } from './home/home.module';
import { NotificacionesEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    NotificacionesSharedModule,
    NotificacionesCoreModule,
    NotificacionesHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    NotificacionesEntityModule,
    NotificacionesAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class NotificacionesAppModule {}
