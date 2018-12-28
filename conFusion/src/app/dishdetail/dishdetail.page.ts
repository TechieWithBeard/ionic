import { Component, OnInit, Inject  } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Dish } from '../../shared/dish';
import { Comment } from '../../shared/comment';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../service/dish.service';
import { FavouriteService } from '../service/favourite.service';
import { ProcessHttpmsgService } from '../service/process-httpmsg.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.page.html',
  styleUrls: ['./dishdetail.page.scss'],
})
export class DishdetailPage implements OnInit {

 // public dish;
  dish: Dish;
  errMess: string;
  avgstars: string;
  numcomments: number;
  favorite: boolean;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;
  dishId: number;

  constructor(public navCtrl: NavController,
      private route: ActivatedRoute,
      private dishservice: DishService,
      private favoriteservice: FavouriteService,
      private processHTTPMsgService: ProcessHttpmsgService,
    @Inject('BaseURL') public BaseURL) {
   // let dishId = parseInt(this.route.snapshot.paramMap.get('id'), 2);
   this.dishId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
   // this.dish = this.dishservice.getDish(parseInt(dishId, 2)).subscribe((dish) => this.dish = dish);
   // this.dishservice.getDish(parseInt(dishId, 2)).subscribe((dish) => this.dish = dish);
    // this.dishservice.getDish(parseInt(dishId, 2));
   // this.dish1 = this.processHTTPMsgService.extractData(this.dish)[dishId];
   // this.numcomments = this.dish.comments.length;
   //  let total = 0;
   //  this.dish.comments.forEach(comment => total += comment.rating );
   //  this.avgstars = (total / this.numcomments).toFixed(2);

     }

  ngOnInit() {
    this.dishservice.getDish(this.dishId)
       .subscribe(dish => this.dish = dish,
        errmess => this.dishErrMess = <any>errmess );
        this.favorite = this.favoriteservice.isFavorite(this.dishId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  addToFavorites() {
    console.log('Adding to Favorites', this.dish.id);
    this.favorite = this.favoriteservice.addFavorite(this.dish.id);
  }
}
