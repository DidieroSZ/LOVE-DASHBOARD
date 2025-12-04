import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import timeStyles from '../../css/timeStyles.css?inline';

import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { iconos } from '../../utils/icons.js'


export class TimeComponent extends LitElement {

    static properties = {
        daysCounter: { type: Number },
        yearCard: { type: String },
        formatDateCard: { type: String },
        inicialesCard: { type: String },
        she: { type: String },
        he: { type: String },
        fecha: { type: String },
    };

    constructor(){
        super();
        this.daysCounter = 0;
        this.formatDateCard = '';
        this.yearCard = '';
        this.inicialesCard = '';

        this.she = '';
        this.he = '';
        this.fecha = '';
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(timeStyles)}`,
    ];

    firstUpdated(){
        this._startData();
    }

    updated(changedProps) {
        if (changedProps.has('she') || changedProps.has('he') || changedProps.has('fecha')) {
            this._startData();
        }
    }

    render(){
        return html`
            <section class="time--container general--container card--container d-flexx d-col">
                <div class="top--card item--card d-flexx d-row">
                    ${unsafeHTML(iconos.reloj)}
                    <p class="cutive-mono-regular">Tiempo</p>
                </div>
                <div class="middle--card item--card d-flexx d-col">
                    <small class="cutive-mono-regular">Contador:</small>
                    <span class="cuenta--container d-flexx d-row">
                        <p class="cuenta--number fredericka-the-great-regular">${this.daysCounter}</p>
                        <small class="cuenta--label cutive-mono-regular">días</small>
                        <p class="cuenta--texto parisienne-regular">Juntos.</p>
                    </span>
                </div>
                 <div class="bottom--card item--card d-flexx d-col">
                    <p class="cutive-mono-regular">${this.formatDateCard}</p>
                    <small class="cutive-mono-regular">${this.yearCard} | ${this.inicialesCard}</small>
                </div>
            </section>
        `;
    }

    _startData(){
        const fechaInicio = this.fecha ? this.fecha : '2023-10-10';
        const s = this.she || 'Mariana';
        const h = this.he || 'Didier';
        /* console.group("---- TIME COMPONENT ----"); */

        this._counterDays(fechaInicio);
        this._dateFormat(fechaInicio);
        this._inicialsFormat(s, h);

        /* console.groupEnd(); */
    }

    _counterDays(f){
        const inicio = new Date(f);
        const hoy = new Date();

        const diff = hoy - inicio;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        this.daysCounter = days;    
    }
    _dateFormat(f){
        const fecha = new Date(f);
        let mes = fecha.getMonth();
        let dn = fecha.getDate() + 1;
        let dia = fecha.getDay();
        const m = [
            "Ene.",
            "Feb.",
            "Mar.",
            "Abr.",
            "May.",
            "Jun.",
            "Jul.",
            "Ago.",
            "Sep.",
            "Oct.",
            "Nov.",
            "Dic."
        ];
        const d = [
            
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
            "Domingo",
        ];
        this.yearCard = fecha.getFullYear();
        this.formatDateCard = `${d[dia]}, ${dn} ${m[mes]}`;
    }
    _inicialsFormat(s, h){
        this.inicialesCard = `${h[0]}&${s[0]}`;
    }
    
}
customElements.define('time-component', TimeComponent);