import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  {path:"home",component: DummyComponent},
  {path:"shop",component: DummyComponent},
  {path:"signup",component: DummyComponent},
  {path:"shoppingbag",component: DummyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
