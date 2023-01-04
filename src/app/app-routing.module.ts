import { ContactComponent } from './contact/contact.component';
import { ExpertComponent } from './expert/expert.component';

import { FormaComponent } from './forma/forma.component';
import { CompComponent } from './comp/comp.component';
import { CentComponent } from './cent/cent.component';
import { QuiComponent } from './qui/qui.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'qui',component:QuiComponent},
  {path :'cent',component:CentComponent},
  {path:'comp',component:CompComponent},
  {path:'forma',component:FormaComponent},
  {path:'expert',component:ExpertComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
