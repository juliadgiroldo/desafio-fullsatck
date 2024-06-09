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
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { MatListModule } from '@angular/material/list';
import { FooterbarComponent } from './components/footerbar/footerbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    DesafioSeteDiasComponent,
    DesafioCatorzeDiasComponent,
    DesafioTrintaDiasComponent,
    SidenavComponent,
    TelaInicialComponent,
    FooterbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatBottomSheetModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
