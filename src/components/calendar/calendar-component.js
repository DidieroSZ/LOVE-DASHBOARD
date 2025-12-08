import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import calendarStyles from '../../css/calendarStyles.css?inline';
import { unsafeCSS } from 'lit-element';

export class CalendarComponent extends LitElement {

    static properties = {
        valor: { type: Number },
        fecha: { type: String },
        frase2: { type: String },
    };

    constructor(){
        super();
        this.valor = 0;
        this.fecha = '2023-10-10';
        this.frase2 = '¿Crees qué estariamos juntos en tooodos los universos?';
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
            <section class="calendar--container general--container scalloped d-flexx d-col">
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
                    <p class="shadows-into-light-regular">${this.frase2}</p>
                </div>
            </section>  
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
        const realDay = new Date().getDate();
        const aniversaryDay = new Date(this.fecha).getDate() +1;

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
                    ${week.map(day => {

                            if (day == realDay) {
                                return html`
                                    <td data-day="${day}" id="today--day--calendar">
                                        <p>${day}</p> 
                                    </td>
                                `
                            }
                            if (day == aniversaryDay) {
                                return html`
                                    <td data-day="${day}" id="aniversary--day--calendar">
                                        <p>${day}</p> 
                                    </td>
                                `
                            }
                            else{
                               return html`
                                    <td data-day="${day}">
                                        <p>${day}</p> 
                                    </td>
                                ` 
                            }
                            
                        }  
                    )}
                </tr>
            `)}
        `;
    }

}
customElements.define('calendar-component', CalendarComponent);