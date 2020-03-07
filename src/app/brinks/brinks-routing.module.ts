import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrinksPage } from './brinks.page';

const routes: Routes = [
  {
    path: '',
    component: BrinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrinksPageRoutingModule {}
