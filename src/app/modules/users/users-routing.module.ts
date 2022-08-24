import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users.component";
import {MeComponent} from "./pages/me/me.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'me',
        component: MeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
