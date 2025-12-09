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
        datos: { type: Object}
    };

    constructor(){
        super();
        this.valor = 0;
        this.mostrar = false;
        this.datos = {
            she: 'Mariana',
            he: 'Didier',
            frase1: 'Espero estár siempre contigo, toda la vida',
            frase2: '¿Crees qué estariamos juntos en tooodos los universos?',
            link: '',
            fecha: '2023-10-10'
        }
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
    ];

    firstUpdated(){
        this._linkGeneration();
    }

    render(){
        return html`
            <main class="general--section main--container d-flexx">

                <section class="template--container--grid">
                    <time-component .she=${this.datos.she} .he=${this.datos.he} .fecha=${this.datos.fecha} class="grid--time"></time-component>    
                    <chart-component class="grid--chart"></chart-component>    
                    <message-component .frase1=${this.datos.frase1} .fecha=${this.datos.fecha} .nombre=${this.datos.he} class="grid--message"></message-component>
                    <calendar-component .frase2=${this.datos.frase2} .fecha=${this.datos.fecha} class="grid--calendar"></calendar-component>
                    <music-component .track=${this.datos.link} class="grid--music"></music-component>   
                    <button class="modal-btn d-flexx" @click=${this._openModal} title="Configuración">
                        ${unsafeHTML(iconos.bolt)}
                    </button> 
                </section>
                
                <custom-component  @fill-data=${this._fillData} @close-modal=${this._closeModal} .mostrar=${this.mostrar}></custom-component>
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


    /* -------- FUNCTIONS LINKS -------- */
    _linkGeneration(){
        const url = new URL(window.location.href);
        const params = Object.fromEntries(new URLSearchParams(window.location.search));
        if ( (Object.keys(params).length) !== 0) {
            this.datos = { ...params };
        }
    }
    /* -------- FUNCTIONS LINKS -------- */


    /* -------- FUNCTIONS INFORAMTION -------- */
    _fillData(e){
        this.datos = { ...e.detail.datos };
    }
    /* -------- FUNCTIONS INFORAMTION -------- */
}
customElements.define('main-component', MainComponent);