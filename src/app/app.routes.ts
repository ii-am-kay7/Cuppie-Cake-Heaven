import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Menu } from './pages/menu/menu';
import { Gallery } from './pages/gallery/gallery';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },      // default page
  { path: 'about', component: About},
  { path: 'menu', component: Menu },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    routes: any
 }
