import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // add other components as you create them

const routes: Routes = [
  // Example route:
  // { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
