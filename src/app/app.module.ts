import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import { DesafioSeteDiasComponent } from './desafios/desafio-sete-dias/desafio-sete-dias.component';
import {MatButtonModule} from '@angular/material/button';
import { DesafioCatorzeDiasComponent } from './desafios/desafio-catorze-dias/desafio-catorze-dias.component';
import { DesafioTrintaDiasComponent } from './desafios/desafio-trinta-dias/desafio-trinta-dias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    DesafioSeteDiasComponent,
    DesafioCatorzeDiasComponent,
    DesafioTrintaDiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatBottomSheetModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
