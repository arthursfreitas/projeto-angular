import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { IReviews } from './reviews.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<IReviews[]>

  constructor(
    private restaurantsSerivce: RestaurantsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.reviews = this.restaurantsSerivce
    .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
