import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
    private _name: string | undefined;
    private input: string | undefined;

    constructor() {
    }

    private onSubmit(): void {
        this._name = this.input;
    }
}
