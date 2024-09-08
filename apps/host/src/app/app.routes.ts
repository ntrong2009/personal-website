import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const appRoutes: Route[] = [
  {
    path: 'resume',
    loadChildren: () => loadRemoteModule('resume', './Module').then((m) => m.AppModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
];
