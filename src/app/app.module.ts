import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { ContactComponent } from './contact/contact.component';
import { MailComponent } from './mynumber/mail.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ImprintComponent } from './imprint/imprint.component';
import { StartComponent } from './start/start.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './portfolio/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MainComponent,
    AboutComponent,
    PortfolioComponent,
    MyskillsComponent,
    ContactComponent,
    MailComponent,
    FooterComponent,
    ImprintComponent,
    StartComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
     NoopAnimationsModule,
     BrowserAnimationsModule,
     MatToolbarModule,
     MatIconModule,
     MatSidenavModule,
     MatMenuModule,
    MatListModule,
    FlexLayoutModule,
   
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
