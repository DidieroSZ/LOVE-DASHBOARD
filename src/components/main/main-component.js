import { LitElement, html, css } from "lit-element";
import estilosGenerales from '../../css/general.css?inline';
import { unsafeCSS } from 'lit-element';
import "../calendar/calendar-component.js"
import "../letters/letters-component.js"

export class MainComponent extends LitElement {

    static properties = {
        valor: { type: Number },
    };

    constructor(){
        super();
        this.valor = 0;
    }

    static styles = [
        css` ${unsafeCSS(estilosGenerales)}`,
    ];

    render(){
        return html`
            <main class="general--section main--container d-flexx">

                <section class="template--container--grid">

                    <letters-component class="grid--letters"></letters-component>
                    <calendar-component class="grid--calendar"></calendar-component>
                    <botton-component class="grid--botton"></botton-component>    

                </section>
    
            </main>
        `;
    }
}
customElements.define('main-component', MainComponent);