import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "pagina1", component: Pagina1Component },
  { path: "pagina2", component: Pagina2Component },
  { path: 'nyan', loadChildren: () => import('./nyan/nyan.module').then(m => m.NyanModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
