import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import { unsafeCSS } from 'lit-element';
import "../calendar/calendar-component.js"
/* import "../letters/letters-component.js" */
import "../message/message-component.js";
import "../time/time-component.js";
import "../chart/chart-component.js";
import "../music/music-component.js";

export class MainComponent extends LitElement {

    static properties = {
        valor: { type: Number },
    };

    constructor(){
        super();
        this.valor = 0;
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
    ];

    render(){
        return html`
            <main class="general--section main--container d-flexx">
            
                <section class="template--container--grid">
                    <time-component class="grid--time"></time-component>    
                    <chart-component class="grid--chart"></chart-component>    
                    <message-component class="grid--message"></message-component>
                    <!-- <letters-component class="grid--letters"></letters-component> -->
                    <calendar-component class="grid--calendar"></calendar-component>
                    <music-component class="grid--music"></music-component>    
                    
                </section>
    
            </main>
        `;
    }    
}
customElements.define('main-component', MainComponent);