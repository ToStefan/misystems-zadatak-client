import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VozilaComponent } from './components/vozila/vozila.component';
import { VoziloEachComponent } from './components/vozila/vozilo-each/vozilo-each.component';
import { FilterComponent } from './components/vozila/filter/filter.component';
import { DetaljiComponent } from './components/vozila/detalji/detalji.component';

@NgModule({
  declarations: [
    AppComponent,
    VozilaComponent,
    VoziloEachComponent,
    FilterComponent,
    DetaljiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
