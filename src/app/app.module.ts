import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

// app routing && api constant
import { ROUTES } from './app.routes';
// App modules
import { LayoutsModule } from './components/common/layouts/layouts.module';

// login component
import { LoginComponent } from './views/login/login.component';
// app components
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { UsersComponent } from './views/users/users.component';
// app services
import { AuthGuardService } from './services/guard/auth.guard';
import { RestApiService } from './services/http.service';
import { UsersService } from './services/users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    LayoutsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthGuardService,
    RestApiService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
