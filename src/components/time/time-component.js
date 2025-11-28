import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import timeStyles from '../../css/timeStyles.css?inline';
import { unsafeCSS } from 'lit-element';


export class TimeComponent extends LitElement {

    static properties = {
        dias: { type: Number },
    };

    constructor(){
        super();
        this.dias = 0;
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(timeStyles)}`,
    ];

    firstUpdated(){
        this._counterDays();
    }

    render(){
        return html`
            <section class="time--container general--container card--container d-flexx d-col">
                <div class="top--card item--card d-flexx d-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
                    <p class="cutive-mono-regular">Tiempo</p>
                </div>
                <div class="middle--card item--card d-flexx d-col">
                    <small class="cutive-mono-regular">Contador:</small>
                    <span class="cuenta--container d-flexx d-row">
                        <p class="cuenta--number fredericka-the-great-regular">${this.dias}</p>
                        <small class="cuenta--label cutive-mono-regular">días</small>
                        <p class="cuenta--texto parisienne-regular">Juntos.</p>
                    </span>
                </div>
                 <div class="bottom--card item--card d-flexx d-col">
                    <p class="cutive-mono-regular">Miercoles, 10 Oct.</p>
                    <small class="cutive-mono-regular">2023 | D&M</small>
                </div>
            </section>
        `;
    }

    _counterDays(){
        const fechaInicio = "2023-10-10";

        const inicio = new Date(fechaInicio);
        const hoy = new Date();

        const diff = hoy - inicio;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        this.dias = days;    
    }
}
customElements.define('time-component', TimeComponent);