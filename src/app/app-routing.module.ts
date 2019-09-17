import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VozilaComponent } from './components/vozila/vozila.component';
import { DetaljiComponent } from './components/vozila/detalji/detalji.component';


const routes: Routes = [
  { path: "vozila", component: VozilaComponent },
  { path: "vozila/:id", component: DetaljiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
