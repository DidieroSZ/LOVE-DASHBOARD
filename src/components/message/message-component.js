import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import messageStyles from '../../css/messageStyles.css?inline';
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';


export class MessageComponent extends LitElement {

    static properties = {
        frase1: { type: String },
        fecha: { type: String },
        nombre: { type: String },
    };

    constructor(){
        super();
        this.frase1 = "Desde que llegaste mi vida es un lugar mejor.";
        this.fecha = "2023-10-10";
        this.nombre = "Didier";
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(messageStyles)}`,
    ];

    firstUpdated(){

    }

    render(){
        return html`
            <section class="message--container general--container d-flexx d-col">
                <div class="top--card d-flexx d-row">
                    <div class="equal--space d-flexx ">
                        <p class="cutive-mono-regular red--hand--text">Para: <br> La persona más especial.</p>
                    </div>
                    <div class="equal--space middle--section d-flexx">
                       <p class="cutive-mono-regular red--hand--text" id="name--message">DE: <br> <span  class="parisienne-regular red--hand--text">${this.nombre}.</span></p>
                    </div>
                    <div class="equal--space d-flexx">
                       <p class="cutive-mono-regular red--hand--text"> <span class="parisienne-regular red--hand--text"> ${this._generateDate()}</span></p>
                    </div>
                </div>
                <article class="message--section d-flexx">
                    <p class="main--message tinos-regular">${this._generateHandFont()}.</p>
                    
                    <p class="footer--message parisienne-regular red--hand--text">Love Note.</p>
                </article>
            </section>
        `;
    }


    _generateHandFont(){
        const splitSentence = this.frase1.split(' ');
        const longitud = splitSentence.length;
        const mitad = Math.floor(longitud / 2);

        splitSentence.splice((mitad-2), 0, '<span class="parisienne-regular">');
        splitSentence.splice((mitad+3), 0, '</span>');

        const finalSentence = splitSentence.join(' ');  
        return html`
            ${unsafeHTML(finalSentence)}
        `;
    }

    _generateDate(){
        const fecha = new Date(this.fecha);
        let mes = fecha.getMonth()+1;
        if (mes < 10) {
            mes = '0' + mes;
        }
        let formatDate =  `${fecha.getDate()+1}/${mes} <br> ${fecha.getFullYear()}`;
        console.log(formatDate);
        return html`
            ${unsafeHTML(formatDate)}
        `;
    }
}
customElements.define('message-component', MessageComponent);