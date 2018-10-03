import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  profile() {
    this.navCtrl.push(ProfilePage);
  }
  logout() {
    this.navCtrl.setRoot(LoginPage);
  }
}
