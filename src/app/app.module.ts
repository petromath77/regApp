import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmPassword } from './confirm-password.directive';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'greeting', component: GreetingComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    GreetingComponent,
    HomeComponent,
    ConfirmPassword
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
