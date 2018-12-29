import { Component, OnInit, Inject  } from '@angular/core';
import { NavController, ToastController  } from '@ionic/angular';
import { Dish } from '../../shared/dish';
import { Comment } from '../../shared/comment';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../service/dish.service';
import { FavouriteService } from '../service/favourite.service';
import { ProcessHttpmsgService } from '../service/process-httpmsg.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { CommentPage } from '../comment/comment.page';

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
      private toastCtrl: ToastController,
      public actionSheetController: ActionSheetController,
      public modalController: ModalController,
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

  async addToFavorites() {
    console.log('Adding to Favorites', this.dish.id);
    this.favorite = this.favoriteservice.addFavorite(this.dish.id);
      const toast1 = await this.toastCtrl.create({
      message: 'Dish ' + this.dish.id + ' added as favorite successfully',
      position: 'middle',
      duration: 3000});
      await toast1.present();
  }




  // action controler
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Add Comment',
        icon: 'create',
        handler: async () => {
          console.log('add comment clicked');

    const modal = await this.modalController.create({
      component: CommentPage,
      componentProps: { value: 123 }
    });
    return await modal.present();

        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
