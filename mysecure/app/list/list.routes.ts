import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListComponent } from "./list.component";
import { AuthGuard } from "../auth-guard.service";
import { AppModule } from "../modules/app.module";
import { ContactComponent } from '../modules/contact/contact.component';


const listRoutes: Routes = [
  { path: "", component: ContactComponent, canActivate: [AuthGuard] },
];
export const listRouting: ModuleWithProviders = RouterModule.forChild(listRoutes);