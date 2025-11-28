import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import chartStyles from '../../css/chartStyles.css?inline';
import { unsafeCSS } from 'lit-element';


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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-icon lucide-chart-column"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
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
            <!--     
            <div class="top--chart d-flexx">
                    <h4 class="tinos-regular">Métricas de   relación. </h4>
                </div>
                <div class="graph--container">
                    <span class="bar--graph d-flexx bar01"></span>
                    <span class="bar--graph d-flexx bar02"></span>
                    <span class="bar--graph d-flexx bar03"></span>
                    <span class="bar--graph d-flexx bar04"></span>
                </div>
                <div class="titles--container d-flexx">
                    <span class="pill--graph d-flexx pill01">Amor</span>
                    <span class="pill--graph d-flexx pill02">Conexión</span>
                    <span class="pill--graph d-flexx pill03">Tóxicidad</span>
                    <span class="pill--graph d-flexx pill04">Felicidad</span>
                </div>
                -->
            </section>
        `;
    }

}
customElements.define('chart-component', ChartComponent);