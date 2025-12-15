import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import "../calendar/calendar-component.js" // <---- CALENDAR COMPONENT
import "../message/message-component.js"; // <---- LETTER COMPONENT
import "../time/time-component.js"; // <---- TIME COMPONENT
import "../chart/chart-component.js"; // <---- CHART COMPONENT
import "../music/music-component.js"; // <---- MUSIC COMPONENT
import "../custom/custom-component.js"; // <---- CUSTOM COMPONENT

import loop_02 from '../../media/Loop_2.svg';
import loop_03 from '../../media/Loop_3.svg';
import loop_08 from '../../media/Loop_8.svg';

import { iconos } from '../../utils/icons.js';
import { animate, press, delay } from "motion"
import ScrollReveal from "scrollreveal";

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
        this._copyLink();
        this._animatronik();
    }

    render(){
        return html`
            <main class="general--section main--container d-flexx">

                <section class="template--container--grid">
                    <time-component .she=${this.datos.she} .he=${this.datos.he} .fecha=${this.datos.fecha} class="grid--time grid--animation"></time-component>    
                    <chart-component class="grid--chart grid--animation"></chart-component>    
                    <message-component .frase1=${this.datos.frase1} .fecha=${this.datos.fecha} .nombre=${this.datos.he} class="grid--message grid--fade"></message-component>
                    <calendar-component .frase2=${this.datos.frase2} .fecha=${this.datos.fecha} class="grid--calendar grid--fade"></calendar-component>
                    <music-component .track=${this.datos.link} class="grid--music grid--animation"></music-component>   
                    <button class="general-btn modal-btn d-flexx" @click=${this._openModal} title="Configuración">
                        ${unsafeHTML(iconos.bolt)}
                    </button> 
                    <div class="general-btn link-btn d-flexx" @click=${this._copyLink} title="Share Link">
                        ${unsafeHTML(iconos.link)}
                    </div> 
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


    /* -------- FUNCTIONS LINKS -------- */
    _copyLink(){
        /* const url = new URL(window.location.href);
        navigator.clipboard.writeText(url); */
        console.log('Copy');
    }
    _linkGeneration(){
        const params = Object.fromEntries(new URLSearchParams(window.location.search));
        if ( (Object.keys(params).length) !== 0) {
            this.datos = { ...params };
        }
    }
    /* -------- FUNCTIONS LINKS -------- */


    /* -------- FUNCTIONS ANIMATIONS -------- */
    _animatronik(){
        this.animationBtns();
        this.animationBounceGrid();
        this.animationFadeGrid();
    }
    animationBtns(){
        const btns = this.renderRoot.querySelectorAll('.general-btn');

        btns.forEach( (b, i) => {
            press(b, (element) => {
            animate(element, { scale: 0.8 }, { type: "spring", stiffness: 1000 })

            return () =>
                animate(element, { scale: 1 }, { type: "spring", stiffness: 500 })
        });
        });
    }
    animationBounceGrid(){
        const grids = this.renderRoot.querySelectorAll('.grid--animation');
        grids.forEach( (g, i) => {
            g.style.opacity = 0;
            g.style.transform = "scale(0)";
            let deyatTime = i / 2.5;
            delay( () => {
                animate(g, 
                    {
                        opacity: 1,
                        scale: 1,
                    },
                    {
                        duration: 0.3,
                        easing: "ease-out",
                        scale: {
                            type: "spring",
                            visualDuration: 0.3,
                            bounce: 0.4
                        }   
                    }   
                )
            }, deyatTime)
        });
    }
    animationFadeGrid(){
        const grids = this.renderRoot.querySelectorAll('.grid--fade');

        grids.forEach((g, i) => {
            g.style.opacity = 0;
            let deyatTime = (1+i) / 2.5;
            delay( () => {
                animate(g, 
                    { opacity: 1 },
                    {
                        duration: 0.5,
                        ease: [0.841, 0.059, 0, 0.981]
                    }   
                )
            }, deyatTime)
        });
    }
    /* -------- FUNCTIONS ANIMATIONS -------- */
}
customElements.define('main-component', MainComponent);