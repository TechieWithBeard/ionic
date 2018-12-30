import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { NavController, NavParams, ToastController} from '@ionic/angular';
import { FavouriteService } from '../service/favourite.service';
import { Dish } from '../../shared/dish';
import { IonItemSliding , LoadingController, AlertController} from '@ionic/angular';
import { async } from 'q';
import { timeInterval } from 'rxjs/operators';
import { Observable } from 'rxjs-compat/Observable';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: Dish[];
  errMess: string;

  constructor(public navCtrl: NavController,
    private favoriteservice: FavouriteService,
    public toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.favoriteservice.getFavorites()
      .subscribe(favorites => this.favorites = favorites,
        errmess => this.errMess = errmess);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  async deleteFavorite(item: IonItemSliding, id: number) {
    console.log('delete', id);
   // this.favoriteservice.deleteFavorite(id)
   // .subscribe(favorites => this.favorites = favorites);
  //    .subscribe(favorites => this.favorites = favorites,
  //      errmess => this.errMess = errmess);
  //  item.close();
      // code for alert
    const alert1 = await this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Do you want to delete Dish ' + id,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete cancelled');
          }
        },
        {
          text: 'Delete',
          handler: async() => {
            const loading = await this.loadingCtrl.create({
              message: 'Deleting . . .'
            });
            const toast3 = await this.toastCtrl.create({
              message: 'Dish ' + id + ' deleted successfully',
              duration: 3000});
            await loading.present();
            this.favoriteservice.deleteFavorite(id)
              .subscribe(favorites => {this.favorites = favorites; loading.dismiss(); toast3.present(); } ,
                errmess => { this.errMess = errmess; loading.dismiss(); });
          }
        }
      ]
    });

    return await alert1.present();
    item.close();
  }
}
