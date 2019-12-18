import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from'@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './modules/users/users.component';
import { DetailsComponent } from './modules/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { UsersModule } from './modules/users/users.module';
import { DetailsModule } from './modules/details/details.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        component:UsersComponent
      },
      {
        path:'userInfo/:_id',
        component: DetailsComponent}
    ]),
    HttpClientModule,
    SharedModule,
    UsersModule,
    DetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
