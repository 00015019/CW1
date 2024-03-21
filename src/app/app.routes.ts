import { Routes } from '@angular/router';
import { HomeComponent } from './Feedback/home/home.component';
import { CreateComponent } from './Feedback/create/create.component';
import { EditComponent } from './Feedback/edit/edit.component';
import { DeleteComponent } from './Feedback/delete/delete.component';
import { DetailsComponent } from './Feedback/details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit/:Id',
    component: EditComponent,
  },
  {
    path: 'delete/:Id',
    component: DeleteComponent,
  },
  {
    path: 'details/:Id',
    component: DetailsComponent,
  },
];
