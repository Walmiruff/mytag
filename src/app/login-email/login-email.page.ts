import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.page.html',
  styleUrls: ['./login-email.page.scss'],
})
export class LoginEmailPage implements OnInit {
  buttonText: any;
  public userLogin: User = {};
  constructor( private router: Router ) {
    this.buttonText = 'Voltar';
  }

  ngOnInit() {
  }

    register() {
        this.router.navigate(['register']);
    }
    login(){
      console.log(this.userLogin);
    }
}
