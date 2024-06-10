import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DesafioCatorzeDiasComponent } from './components/desafios/desafio-catorze-dias/desafio-catorze-dias.component';
import { DesafioSeteDiasComponent } from './components/desafios/desafio-sete-dias/desafio-sete-dias.component';
import { DesafioTrintaDiasComponent } from './components/desafios/desafio-trinta-dias/desafio-trinta-dias.component';
import { HomeComponent } from './components/home/home.component';
import { FooterbarComponent } from './components/shared/footerbar/footerbar.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';


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
