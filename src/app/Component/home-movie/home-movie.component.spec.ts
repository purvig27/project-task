import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeMovieComponent } from './home-movie.component';

describe('HomeMovieComponent', () => {
  let component: HomeMovieComponent;
  let fixture: ComponentFixture<HomeMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMovieComponent]
    });
    fixture = TestBed.createComponent(HomeMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
