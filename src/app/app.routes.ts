
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'about', component: AboutComponent },

];

export const app_routing = RouterModule.forRoot(routes);
export class AppRoutingModule {}
