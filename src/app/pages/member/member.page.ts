import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  public userProfile: any;

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private router: Router
  ) {

  }

  public ionViewWillEnter(): void {
    this.getProfile()
  }

  ngOnInit() {
  }

  async getProfile() {
    const loading = await this.loadingController.create()
    this.authService.getUserProfile()
      .get()
      .subscribe(user => {
        loading.dismiss().then(() => {
        this.userProfile = user.data();
        });
      })
    return await loading.present();
  }

  logOut(): void {
    this.authService.logoutUser().then(() => {
      this.userProfile = null;
      this.router.navigateByUrl('login');
    });
  }

}

