import { Component, OnInit } from '@angular/core';
import { datas, Data } from '../../data/movie-data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-movie',
  templateUrl: './home-movie.component.html',
  styleUrls: ['./home-movie.component.css']
})
export class HomeMovieComponent implements OnInit {
  public datas: Array<Data> = datas;
  public imagePath: any;
  public searchText: string;

  constructor(public route: Router) {
    this.searchText = '';
  }
  ngOnInit(): void {

  }
  movieDetail(data: any) {
    this.route.navigate(['movie-details', { queryParams: data }])
  }
}
