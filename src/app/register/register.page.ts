import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public userRegister: User = {};

  constructor( private router: Router,) { }

  ngOnInit() {
  }

  confirmCellphone() {
    this.router.navigate(['phone']);
  }
  register(){
    console.log(this.userRegister);
  }
}
