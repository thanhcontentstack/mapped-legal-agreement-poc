import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalContentComponent } from './pages/legal-content/legal-content.component';


const routes: Routes = [
  {path: '', component: LegalContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
