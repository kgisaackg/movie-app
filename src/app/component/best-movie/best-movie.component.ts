import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

import { Movie } from '../../interface/movie.somemoive';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-best-movie',
  templateUrl: './best-movie.component.html',
  styleUrls: ['./best-movie.component.css']
})
export class BestMovieComponent implements OnInit {

  constructor(private movieService: MovieService, private fb: FormBuilder) { }


  myTopMovies: string[] = ['John Wick', 'American Gangster', 'Wolf of wall street'];
  movies: any = [];
  
  isFound: boolean = true;
  searchForm = this.fb.group({
    myMovie: [''],
  });

  ngOnInit(): void {
  
  }


  onSubmit(){
    console.log("clicke submit");
    this.myTopMovies.forEach((topMovie) => {
      this.movieService.getMovies(topMovie)
      .subscribe((data) => {
         console.log(data);
         this.movies.push(data);
      })
    });
  }

}
