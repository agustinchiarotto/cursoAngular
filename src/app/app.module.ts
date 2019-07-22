import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//rutas
import { app_routing } from './app.routes';


//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//servicios
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
