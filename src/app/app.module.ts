import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HeaderContentComponent } from './header-content/header-content.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { RexGoliathLogoComponent } from './rex-goliath-logo/rex-goliath-logo.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { ButtonsComponent } from './controls/controls.component';
import { DrinkButtonComponent } from './drink-button/drink-button.component';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';
import { PrimaryNavigationComponent } from './primary-navigation/primary-navigation.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContentComponent,
    NavigationComponent,
    HeroContentComponent,
    RexGoliathLogoComponent,
    HeroImageComponent,
    ButtonsComponent,
    DrinkButtonComponent,
    MoreInfoButtonComponent,
    PrimaryNavigationComponent,
    UserAvatarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
