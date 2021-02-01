import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

import { Movie } from '../../interface/movie.somemoive';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private movieService: MovieService, private fb: FormBuilder) { }

  movie: Movie = {artwork: "", description: "", directors: "", writers: "", stars: "", error: ""};
  
  isFound: boolean = true;
  searchForm = this.fb.group({
    myMovie: [''],
  });

  ngOnInit(): void {
   
  }

  onSubmit(){
    console.log(this.searchForm.value);
    this.movieService.getMovies(this.searchForm.value.myMovie)
    .subscribe((data: Movie) => this.movie = {
        artwork: (data as any).Poster,
        description: (data as any).Plot,
        directors: (data as any).Director,
        writers: (data as any).Writer,
        stars: (data as any).Actors,
        error: (data as any).Error,
    }, (error) => {
      if( this.movie.error == "Movie not found!"){
        console.log(this.movie.error);
        this.isFound = false;
      }
    });
  }

}
