import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import calendarStyles from '../../css/calendar-component.css?inline';
import { unsafeCSS } from 'lit-element';

export class CalendarComponent extends LitElement {

    static properties = {
        valor: { type: Number },
    };

    constructor(){
        super();
        this.valor = 0;
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(calendarStyles)}`,
    ];

    render(){
        return html`
            <div class="prueba-de-formas scalloped">

            </div>  
        `;
    }
}
customElements.define('calendar-component', CalendarComponent);