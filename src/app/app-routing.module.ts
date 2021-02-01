import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BestMovieComponent } from './component/best-movie/best-movie.component';
import { SearchMovieComponent } from './component/search-movie/search-movie.component';

const routes: Routes = [
  { path: 'movie', component: BestMovieComponent },
  { path: 'search-movie', component: SearchMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
