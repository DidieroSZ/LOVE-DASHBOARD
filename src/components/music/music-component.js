import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import musictStyles from '../../css/musictStyles.css?inline';
import { unsafeCSS } from 'lit-element';


export class MusicComponent extends LitElement {

    static properties = {
        dias: { type: Number },
    };

    constructor(){
        super();
        this.dias = 0;
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(musictStyles)}`,
    ];

    firstUpdated(){

    }

    render(){
        return html`
            <section class="music--container general--container d-flexx d-row">
                <div class="sections--music cover--container">
                    <img class="" src="" alt="Song Cover" title="Song Cover ">
                    <span class="gardient"></span>
                    <div class="repoductor--container">
                    </div>
                </div>
                <div class="sections--music info--container"></div>
            </section>
        `;
    }

}
customElements.define('music-component', MusicComponent);