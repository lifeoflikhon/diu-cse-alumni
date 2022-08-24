import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MeComponent } from './pages/me/me.component';
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [
    UsersComponent,
    MeComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        CoreModule
    ]
})
export class UsersModule { }
