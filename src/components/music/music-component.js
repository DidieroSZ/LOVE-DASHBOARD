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
              <iframe data-testid="embed-iframe" style="border-radius:12px" 
              src="https://open.spotify.com/embed/track/6ohTBTmcNHe9UzvxAgA9wJ?utm_source=generator" 
              width="100%" height="100%" frameBorder="0" allowfullscreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"></iframe>
            </section>
        `;
    }
    
/*     https://open.spotify.com/intl-es/track/06lMtTSCrAp09coLvGznXw?si=3e0d60f8052f4ba8
    https://open.spotify.com/intl-es/track/6Ipu4lyn6EdMutvBCTktmL?si=fdef50d5286f4ef2 */

}
customElements.define('music-component', MusicComponent);