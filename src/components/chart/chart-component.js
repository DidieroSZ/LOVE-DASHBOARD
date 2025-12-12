import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import chartStyles from '../../css/chartStyles.css?inline';
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { iconos } from '../../utils/icons.js'
import { animate, press } from "motion"

export class ChartComponent extends LitElement {

    static properties = {
        dias: { type: Number },
    };

    constructor(){
        super();
        this.dias = 0;
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(chartStyles)}`,
    ];
    firstUpdated() {
        const bar01 = this.renderRoot.querySelector(".bar01");
        const bar02 = this.renderRoot.querySelector(".bar02");
        const bar03 = this.renderRoot.querySelector(".bar03");
        const bar04 = this.renderRoot.querySelector(".bar04");

        press(bar01, (element) => {
            animate(element, { scale: 0.8 }, { type: "spring", stiffness: 1000 })

            return () => {
                animate(element, { scale: 1 }, { type: "spring", stiffness: 500 })  
            };
        });
        press(bar02, (element) => {
            animate(element, { scale: 0.8 }, { type: "spring", stiffness: 1000 })

            return () => {
                animate(element, { scale: 1 }, { type: "spring", stiffness: 500 })  
            };
        });
        press(bar03, (element) => {
            animate(element, { scale: 0.8 }, { type: "spring", stiffness: 1000 })

            return () => {
                animate(element, { scale: 1 }, { type: "spring", stiffness: 500 })  
            };
        });
        press(bar04, (element) => {
            animate(element, { scale: 0.8 }, { type: "spring", stiffness: 1000 })

            return () => {
                animate(element, { scale: 1 }, { type: "spring", stiffness: 500 })  
            };
        });
    }

    render(){
        return html`
            <section class="chart--container general--container card--container d-flexx d-col">
                <div class="top--card item--card d-flexx d-row">
                    ${unsafeHTML(iconos.chart)}                   
                    <p class="cutive-mono-regular">Métricas</p>
                </div>
                <div class="middle--card item--card d-flexx d-col">
                    <small class="cutive-mono-regular">Gráfica:</small>
                    <div class="graph--container">
                        <span class="bar--graph d-flexx bar01"></span>
                        <span class="bar--graph d-flexx bar02"></span>
                        <span class="bar--graph d-flexx bar03"></span>
                        <span class="bar--graph d-flexx bar04"></span>
                    </div>
                </div>
                <div class="bottom--card item--card d-flexx">
                    <span class="pill--graph d-flexx pill01">Amor</span>
                    <span class="pill--graph d-flexx pill02">Conexión</span>
                    <span class="pill--graph d-flexx pill03">Tóxicidad</span>
                    <span class="pill--graph d-flexx pill04">Seriedad</span>
                </div>
            </section>
        `;

        
    }
    
}
customElements.define('chart-component', ChartComponent);