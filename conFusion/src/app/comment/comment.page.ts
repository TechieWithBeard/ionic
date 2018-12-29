import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Comment} from '../../shared/comment';
import { combineAll } from 'rxjs/operators';
import { Com1 } from '../../shared/comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})

export class CommentPage implements OnInit {

  commentForm: FormGroup;
  Com1: Comment[];

  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ModalController,
    public formBuilder: FormBuilder,
    public datepipe: DatePipe
    ) {
      const myDate = new Date();
      this.commentForm = this.formBuilder.group({
        rating: '',
        comment: '',
        author: '',
        date: this.datepipe.transform(myDate, 'dd-mm-yyyy'),
      });

    }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.commentForm.value);
    // this.myArray.push(this.commentForm.value);
    // // this.com.push(this.commentForm.value);
    // this.Com1.push();
    // console.log(Com1);
    this.viewCtrl.dismiss();
  }

}
