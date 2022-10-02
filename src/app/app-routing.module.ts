import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import {OfficeComponent} from "./pages/office/office.component";

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },

  {
    path:"office",
    component:OfficeComponent
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
