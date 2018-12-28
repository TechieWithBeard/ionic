import { Component, OnInit } from '@angular/core';

import { Inject } from '@angular/core';
import { NavController, NavParams, IonNavPush} from '@ionic/angular';

import { LeaderService } from '../service/leader.service';
import { Leader } from 'src/shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})

export class AboutPage implements OnInit {

  leader: Leader[];
  errMess: string;

  constructor(public navCtrl: NavController,
    private leaderservice: LeaderService,
    @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.leaderservice.getLeaders()
    .subscribe(leader => this.leader = leader,
      errmess => this.errMess = <any>errmess);
  }

}
