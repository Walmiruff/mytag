import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './../../services/firestore.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-firestore-add',
  templateUrl: './firestore-add.page.html',
  styleUrls: ['./firestore-add.page.scss'],
})
export class FirestoreAddPage implements OnInit {

  public dataForm: FormGroup;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,

  ) {
    this.dataForm = formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      message: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

  async createItem(): Promise<void> {
    console.log("create")
    const title = this.dataForm.value.title;
    const message = this.dataForm.value.message;
    const loading = await this.loadingCtrl.create();

    this.firestoreService
      .createItem(title, message)
      .then(
        () => {
          console.log("created")
          loading.dismiss().then(() => {
            this.router.navigateByUrl('firestore');
          });
        },
        error => {
          console.error(error);
        }
      );
    return await loading.present();
  }

}
