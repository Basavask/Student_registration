import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { CustomDirective } from './custom.directive';
import { RegisterService } from './signup/signup.service';
import { DataTablesModule } from 'angular-datatables';
import { AuthInterceptorService } from './auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    RegisterComponent,
    ContactComponent,
    AboutusComponent,
    HomeComponent,
    DialogComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    CustomDirective


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule, MatTooltipModule, NgbModule,
    MatProgressSpinnerModule, MatCheckboxModule, MatRadioModule, MatInputModule, MatTabsModule,
    MatToolbarModule, MatButtonModule, MatDialogModule, MatIconModule, MatSidenavModule, FlexLayoutModule, MatButtonToggleModule, MatListModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [AuthService, UserService, RegisterService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA

  ],
  entryComponents: [DialogComponent]
})
export class AppModule { }
