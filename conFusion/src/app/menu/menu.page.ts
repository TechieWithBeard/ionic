import { Component, OnInit, Inject } from '@angular/core';
import { NavController, NavParams, IonNavPush} from '@ionic/angular';

import { Dish } from '../../shared/dish';
import { IonApp} from '@ionic/angular';
import { DishdetailPage } from '../dishdetail/dishdetail.page';
import { DishService } from '../service/dish.service';
import { FavouriteService } from '../service/favourite.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {

  dishes: Dish[];
  errMess: string;

  constructor(public navCtrl: NavController,
    private dishservice: DishService,
    private favoriteservice: FavouriteService,
    @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.dishservice.getDishes()
      .subscribe(dishes => this.dishes = dishes,
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  dishSelected(event, dish) {
    // That's right, we're pushing to ourselves!
    const dishid = dish.id;
    this.navCtrl.navigateForward('/dishdetail/' + dishid);
  }

  addToFavorites(dish: Dish) {
    console.log('Adding to Favorites', dish.id);
    this.favoriteservice.addFavorite(dish.id);
  }
}
