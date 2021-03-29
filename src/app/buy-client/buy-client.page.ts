import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-buy-client',
    templateUrl: './buy-client.page.html',
    styleUrls: ['./buy-client.page.scss'],
})
export class BuyClientPage implements OnInit {
    buttonText: any;

    constructor(private router: Router) {
        this.buttonText = 'Voltar';
    }

    ngOnInit() {
    }

    favorite() {
        this.router.navigate(['favorite']);
    }
}
