import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Dish } from '../../shared/dish';
import { Observable } from 'rxjs';
import { DishService} from '../service/dish.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  favorites: Array<any>;

  constructor(public http: Http,  private dishservice: DishService) {
    console.log('Hello FavoriteProvider Provider');
    this.favorites = [];
  }
  addFavorite(id: number): boolean {
    if (!this.isFavorite(id)) {
      this.favorites.push(id);
    console.log('favorites', this.favorites);
    return true;
    }
  }

  getFavorites(): Observable<Dish[]> {
    return this.dishservice.getDishes()
    .pipe(map(dishes => dishes.filter(dish => this.favorites.some(el => el === dish.id))));
  }


  isFavorite(id: number): boolean {
    return this.favorites.some(el => el === id);
}


deleteFavorite(id: number): Observable<Dish[]> {
  const index = this.favorites.indexOf(id);
  if (index >= 0) {
    this.favorites.splice(index, 1);
    return this.getFavorites();
  } else {
    console.log('Deleting non-existant favorite', id);
    return Observable.throw('Deleting non-existant favorite' + id);
  }
}
}
