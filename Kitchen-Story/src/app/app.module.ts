import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './components/search.form/search.form.component';
import { HomePageComponent } from './components/home.page/home.page.component';
import { ConfirmationPageComponent } from './components/confirmation.page/confirmation.page.component';
import { AdminLoginComponent } from './components/admin.login/admin.login.component';
import { SummaryPageComponent } from './components/summary.page/summary.page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterPageComponent } from './components/footer.page/footer.page.component';
import { NgbModule,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchServiceService } from './injector/services/search-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './components/forgot.password/forgot.password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AuthService } from './injector/auth.service';
import { DashBoardComponent } from './components/dash.board/dash.board.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HomePageComponent,
    ConfirmationPageComponent,
    AdminLoginComponent,
    SummaryPageComponent,
    FooterPageComponent,
    ForgotPasswordComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule, 
    MatPaginatorModule,
  ],
  providers: [SearchServiceService,AuthService],  /** for services and injectors */
  bootstrap: [AppComponent]
})
export class AppModule { }
