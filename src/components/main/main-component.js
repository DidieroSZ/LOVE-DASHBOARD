import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import { unsafeCSS } from 'lit-element';
import "../calendar/calendar-component.js"
/* import "../letters/letters-component.js" */
import "../message/message-component.js";
import "../time/time-component.js";
import "../chart/chart-component.js";
import "../music/music-component.js";
import img01 from '../../media/img01.png';

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
                    <calendar-component class="grid--calendar"></calendar-component>
                    <music-component class="grid--music"></music-component>   
                    <button class="modal-btn d-flexx">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bolt-icon lucide-bolt"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/></svg>
                    </button> 
                </section>
                
                <custom-component></custom-component>
            </main>
        `;
    }    
}
customElements.define('main-component', MainComponent);