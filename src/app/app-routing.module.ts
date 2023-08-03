import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMovieComponent } from './Component/home-movie/home-movie.component';
import { MovieDetailsComponent } from './Component/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: HomeMovieComponent },
  { path: 'movie-details', component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
