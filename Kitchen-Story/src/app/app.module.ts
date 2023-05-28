import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { NgbModule,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchServiceService } from './services/search-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HomePageComponent,
    ConfirmationPageComponent,
    AdminLoginComponent,
    SummaryPageComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule
  ],
  providers: [SearchServiceService],  /** for services and injectors */
  bootstrap: [AppComponent]
})
export class AppModule { }
