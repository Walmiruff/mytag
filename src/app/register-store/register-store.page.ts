import {Component, OnInit} from '@angular/core';
import {FirestoreService} from '../services/firestore.service';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-register-store',
    templateUrl: './register-store.page.html',
    styleUrls: ['./register-store.page.scss'],
})
export class RegisterStorePage implements OnInit {
    buttonText: any;
    public dataForm: FormGroup;

    constructor(
        private firestoreService: FirestoreService,
        private router: Router,
        private loadingCtrl: LoadingController,
        private formBuilder: FormBuilder,
    ) {
        this.buttonText = 'Voltar';
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
                        this.router.navigateByUrl('register-store-info');
                    });
                },
                error => {
                    console.error(error);
                }
            );
        return await loading.present();
    }

    //
    // registerStoreInfo() {
    //     this.router.navigate(['register-store-info']);
    // }

}

