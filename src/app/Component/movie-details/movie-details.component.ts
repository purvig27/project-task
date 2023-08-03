import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {datas, Data} from '../../data/movie-data';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements  OnInit {
  public datas: Array<Data> = datas;
  public movieInfo: any;
  public moviedata: any;
  constructor(private route: Router, private router: ActivatedRoute){
    this.router.paramMap.subscribe((params:any)=>{
      this.movieInfo = params.get('queryParams');
    })
    console.log(this.datas);

  }

  ngOnInit(){
    this.getMovieDetails();
  }
  getMovieDetails(){
    
    this.moviedata = this.datas[this.movieInfo]
  }
}
