import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import chartStyles from '../../css/chartStyles.css?inline';
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { iconos } from '../../utils/icons.js'

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

    firstUpdated(){

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
                    <span class="pill--graph d-flexx pill04">Felicidad</span>
                </div>
            </section>
        `;
    }

}
customElements.define('chart-component', ChartComponent);