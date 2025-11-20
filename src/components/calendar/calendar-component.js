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
    firstUpdated(){
        this._actualDate();
    }

    render(){
        return html`
            <div class="calendar--container scalloped d-flexx d-col">
                <div class="top--calendar--section d-flexx d-col">
                    <p class="neutral--date shadows-into-light-regular">20/11/2025</p>
                    <h4 class="month--date fredericka-the-great-regular">Noviembre.</h4>
                </div>
                <div class="middle--calendar--section">
                    <table class="calendar--table">
                        <thead>
                            <tr>
                                <th>DO.</th>
                                <th>LU.</th>
                                <th>MA.</th>
                                <th>MI.</th>
                                <th>JU.</th>
                                <th>VI.</th>
                                <th>SA.</th>
                            </tr>  
                        </thead>
                        <tbody>
                            ${this._calendarDays()}
                        </tbody> 
                    </table>
                </div>
                <div class="bottom--calendar--section">
                    <p class="shadows-into-light-regular">Amor, amor y mucho más amor.</p>
                </div>
            </div>  
        `;
    }

    _actualDate(){
        let neutralDate = this.renderRoot.querySelector('.neutral--date');
        let monthDate = this.renderRoot.querySelector('.month--date');
        const month = new Date().getMonth();
        const year =  new Date().getFullYear();
        const meses = [
            "Enero.",
            "Febrero.",
            "Marzo.",
            "Abril.",
            "Mayo.",
            "Junio.",
            "Julio.",
            "Agosto.",
            "Septiembre.",
            "Octubre.",
            "Noviembre.",
            "Diciembre."
        ];

        neutralDate.textContent = `${new Date().getDate()}/${month+1}/${year}`;
        monthDate.textContent = meses[month];
    }
    _calendarDays() {
       
        const year =  new Date().getFullYear();
        const month = new Date().getMonth();
       
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        
        let weeks = []; 
        let currentDay = 1;

        let firstWeek = new Array(7).fill("");
        for (let i = firstDay; i < 7; i++) {
            firstWeek[i] = currentDay++;
        }
        weeks.push(firstWeek);

        while (currentDay <= daysInMonth) {
            let week = [];
            for (let i = 0; i < 7; i++) {
                if (currentDay <= daysInMonth) {
                    week.push(currentDay++);
                } else {
                    week.push("");
                }
            }
            weeks.push(week);
        }

        return html`
            ${weeks.map(week => html`
                <tr>
                    ${week.map(day => html`<td data-day="${day}">
                           <p>${day}</p> 
                        </td>`)}
                </tr>
            `)}
        `;
    }

}
customElements.define('calendar-component', CalendarComponent);