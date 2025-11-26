import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import messageStyles from '../../css/messageStyles.css?inline';
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { animate } from 'https://esm.sh/animejs';


export class MessageComponent extends LitElement {

    static properties = {
        frase: { type: String },
    };

    constructor(){
        super();
        this.frase = "";
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(messageStyles)}`,
    ];

    firstUpdated(){
        /* this._animarTexto(); */
    }

    render(){
        return html`
            <section class="message--container general--container d-flexx d-col">
                <div class="top--card d-flexx d-row">
                    <div class="equal--space d-flexx ">
                        <p class="cutive-mono-regular red--hand--text">Para: <br> La persona más especial.</p>
                    </div>
                    <div class="equal--space middle--section d-flexx">
                       <p class="cutive-mono-regular red--hand--text" id="name--message">DE: <br> <span  class="parisienne-regular red--hand--text">Didier.</span></p>
                    </div>
                    <div class="equal--space d-flexx">
                       <p class="cutive-mono-regular red--hand--text"> <span class="parisienne-regular red--hand--text">10/12 <br>2025 </span></p>
                    </div>
                </div>
                <article class="message--section d-flexx">
                    <p class="main--message tinos-regular">${this._generateHandFont()}</p>
                    
                    <p class="footer--message parisienne-regular red--hand--text">Love Note.</p>
                </article>
            </section>
        `;
    }


   /*  _animarTexto() {
        const nameWord = this.shadowRoot.querySelector('#name--message');
        animate(nameWord    , {
            left: '0px',
            borderRadius: 64,
            'background-color': '#ffffffff',
            filter: 'blur(5px)',
        });
        console.log('REALIZADO. ')
    } */

    _generateHandFont(){
        this.frase = "Mi lugar favorito en el mundo es a tu lado.";
        const splitSentence = this.frase.split(' ');
        const longitud = splitSentence.length;
        const mitad = Math.floor(longitud / 2);

        splitSentence.splice((mitad-2), 0, '<span class="parisienne-regular">');
        splitSentence.splice((mitad+3), 0, '</span>');

        const finalSentence = splitSentence.join(' ');  
        return html`
            ${unsafeHTML(finalSentence)}
      
        `;
    }

    
}
customElements.define('message-component', MessageComponent);