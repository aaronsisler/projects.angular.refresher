import { Routes } from "@angular/router";
import { NameComponent } from "./pages/name/name.component";
import { CountComponent } from "./pages/count/count.component";

export const routes: Routes = [
  { path: "count", component: CountComponent },
  { path: "name", component: NameComponent },
];
