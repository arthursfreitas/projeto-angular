import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[]{
    return this.shoppingCartService.items
  }
  total(): number{
    return this.shoppingCartService.total()
  }

  clear(){
    this.shoppingCartService.clear()
  }
  removeItem(item:CartItem){
    this.shoppingCartService.removeItem(item)
  }
  addItem(item:IMenuItem){
    this.shoppingCartService.addItem(item)
  }

}
