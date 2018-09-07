import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'work',
    templateUrl: './work.component.html'
})
export class WorkComponent {
    private _sentences: string[];
    private _currentSentence: string;
    private _name: string | undefined;

    constructor(private route: ActivatedRoute) {
        this._sentences = [
            "Il fera beau pour vous aujourd'hui.",
            "Vous ne devriez pas quitter votre chambre.",
            "Faites attention à votre environnement, vous pourriez avoir des surprises."
        ];

        this._currentSentence = "Veuillez entrer votre nom.";

        this.route.params.subscribe(params => {
            this._name = params.name;
            this.getSentence();
        });
    }

    public getSentence(): void {
        if (this._name != undefined)
            this._currentSentence = `${this._name}: ` + this._sentences[this.getRandom(this._sentences.length)];
    }

    private getRandom(max: number): number {
        return Math.floor(Math.random() * max);
    }
}
