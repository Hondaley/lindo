
import {Mods} from "../mods";
export class CssOverload extends Mods{

    private styleTag: HTMLDivElement;

    constructor(wGame:any|Window) {
        super(wGame)

        this.styleTag = this.wGame.document.createElement('style');
        this.wGame.document.getElementsByTagName('head')[0].appendChild(this.styleTag);

        this.pageNumberSelection();
    }

    private pageNumberSelection() {
        this.styleTag.innerHTML += `
            .NumberInputBox[readonly=readonly] {
                -webkit-user-select: none;
            }
        `;
    }

    public reset() {
        super.reset();
        if (this.styleTag.parentElement) this.styleTag.parentElement.removeChild(this.styleTag)
    }
}
