import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { IMenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<IMenuItem[]>

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.menu = this.restaurantsService
    .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }
  addMenuItem(item: IMenuItem){
    console.log(item)
  }

}
