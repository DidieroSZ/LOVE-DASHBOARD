import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import letterStyles from '../../css/letters-component.css?inline';
import { unsafeCSS } from 'lit-element';

export class LattersComponent extends LitElement {

    static properties = {
        herName: { type: String },
        hisName: { type: String },
        size: { type: Number },
    };

    constructor(){
        super();
        this.herName = "";
        this.hisName = "";
        this.size = 7;

    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(letterStyles)}`,
    ];

    firstUpdated(){
        this._gridSize(this.size);
    }

    render(){
        return html`
            <div class="letters--container d-flexx d-col">
                <div class="grid--letters">
                    ${this._renderLetters()}
                </div>
                <div class="input--name--container">
                    <lablel for="hername">Her name:</lable>
                    <input @input=${this._dataLetters} type="text" id="hername" name="hername" class="" placeholder="Her name:">
                </div>
                <div class="input--name--container">
                    <lablel for="hisname">His name:</lable>
                    <input @input=${this._dataLetters} type="text" id="hisname" name="hisname" class="" placeholder="His name:">
                </div>
            </div>
        `;
    }

    updated(changedProps) {
        if (changedProps.has('size')) {
            this._gridSize(this.size);
        }
    }


    _gridSize(tsL){
        const s = (tsL < 7) ? 7 : tsL;

        const containerGrid = this.renderRoot.querySelector('.grid--letters');

        containerGrid.style.gridTemplateColumns = `repeat(${s}, 1fr)`;
        containerGrid.style.gridTemplateRows  = `repeat(${s}, 1fr)`;
    }

    _renderLetters() {
        const her = this.herName.toUpperCase();
        const his = this.hisName.toUpperCase();

        const size = Math.max(7, her.length, his.length);

        // Crear matriz NxN con letras aleatorias
        const grid = Array.from({ length: size }, () =>
            Array.from({ length: size }, () =>
                String.fromCharCode(65 + Math.floor(Math.random() * 26))
            )
        );

        // --- HER NAME (horizontal) ---
        if (her.length > 0) {
            const row = (his.length) ? (his.length - 1) : 0; // fila fija para simplicidad

            for (let i = 0; i < her.length; i++) {
                grid[row][i] = her[i];
            }
        }

        // --- HIS NAME (vertical) ---
        if (his.length > 0) {
            const col = her.length - 1; // MISMO PUNTO DE INTERSECCIÓN

            for (let i = 0; i < his.length; i++) {
                grid[i][col] = his[i];
            }
        }

        // --- INTERSECCIÓN: última letra de ambos ---
        if (her.length > 0 && his.length > 0) {
            const row = his.length - 1;
            const col = her.length - 1;

            grid[row][col] = "❤";  // EL CORAZÓN
        }

        // Render de la matriz
        return html`
            ${grid.flat().map(l => html`
                <span class="letter--container d-flexx">
                    <p class="fredericka-the-great-regular">${l}</p>
                </span>
            `)}
        `;
    }


    _dataLetters() {
        const herName = this.renderRoot.querySelector('#hername').value.trim();
        const hisName = this.renderRoot.querySelector('#hisname').value.trim();

        this.herName = herName;
        this.hisName = hisName;

        const maxLen = Math.max(herName.length, hisName.length);

        this.size = maxLen < 7 ? 7 : maxLen;

        // provoca rerender
        this.requestUpdate();
    }

}
customElements.define('letters-component', LattersComponent);