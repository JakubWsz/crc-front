import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidenavComponent} from './shared/components/sidenav/sidenav.component';
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HomeComponent} from './pages/home/home.component';
import {OfficeComponent} from './pages/office/office.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import {TableComponent} from './pages/office/components/table/table.component';
import {MatTableModule} from "@angular/material/table";
import {AddUpdateFormComponent} from './pages/office/components/add-update-form/add-update-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ActionReducerMap, StoreModule} from '@ngrx/store'
import {appReducers} from "./store/app.reducers";
import {AppState} from "./store/app.state";
import {EffectsModule} from "@ngrx/effects";
import {OfficeEffects} from "./store/office/office.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {OfficeFacade} from "./store/office/office.facade";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    OfficeComponent,
    TableComponent,
    AddUpdateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    RouterTestingModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    StoreModule.forRoot(appReducers as ActionReducerMap<AppState>),
    EffectsModule.forRoot([OfficeEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [OfficeFacade],
  bootstrap: [AppComponent]
})
export class AppModule {
}
