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
        this._counterDays();
    }

    render(){
        return html`
            <section class="chart--container general--container d-flexx d-col">
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
            </section>
        `;
    }

}
customElements.define('chart-component', ChartComponent);