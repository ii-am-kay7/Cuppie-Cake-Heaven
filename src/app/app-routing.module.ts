import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderMode, ServerRoute } from '@angular/ssr';

// Import your page components
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Menu } from './pages/menu/menu';
import { Gallery } from './pages/gallery/gallery';
import { Testimonials } from './pages/testimonials/testimonials';
import { Contact } from './pages/contact/contact';

// Server-side prerender routes
export const serverRoutes: ServerRoute[] = [
  { path: '**', renderMode: RenderMode.Prerender }
];

// Angular client-side routes
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'menu', component: Menu },
  { path: 'gallery', component: Gallery },
  { path: 'testimonials', component: Testimonials },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' } // fallback to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
