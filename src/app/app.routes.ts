
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';


const routes: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent }

];

export const app_routing = RouterModule.forRoot(routes);

