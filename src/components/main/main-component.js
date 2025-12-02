import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import { unsafeCSS } from 'lit-element';

import "../calendar/calendar-component.js" // <---- CALENDAR COMPONENT
import "../message/message-component.js"; // <---- LETTER COMPONENT
import "../time/time-component.js"; // <---- TIME COMPONENT
import "../chart/chart-component.js"; // <---- CHART COMPONENT
import "../music/music-component.js"; // <---- MUSIC COMPONENT
import "../custom/custom-component.js"; // <---- CUSTOM COMPONENT
import img01 from '../../media/img01.png';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { iconos } from '../../utils/icons.js';

export class MainComponent extends LitElement {

    static properties = {
        valor: { type: Number },
        mostrar: { type: Boolean },
    };

    constructor(){
        super();
        this.valor = 0;
        this.mostrar = false;
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
                    <calendar-component class="grid--calendar"></calendar-component>
                    <music-component class="grid--music"></music-component>   
                    <button class="modal-btn d-flexx" @click=${this._openModal} title="Configuración">
                        ${unsafeHTML(iconos.bolt)}
                    </button> 
                </section>
                
                <custom-component @close-modal=${this._closeModal} .mostrar=${this.mostrar}></custom-component>
            </main>
        `;
    }    

    /* -------- FUNCTIONS MODAL -------- */
    _openModal(){
        this.mostrar = true;
    }
    _closeModal(){
        this.mostrar = false;
    }
    /* -------- FUNCTIONS MODAL -------- */
}
customElements.define('main-component', MainComponent);