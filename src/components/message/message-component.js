import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import messageStyles from '../../css/messageStyles.css?inline';
import { unsafeCSS } from 'lit-element';

export class MessageComponent extends LitElement {

    static properties = {
        valor: { type: Number },
    };

    constructor(){
        super();
        this.valor = 0;
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(messageStyles)}`,
    ];

    render(){
        return html`
            <div class="message--container d-flexx d-col">
                <div class="top--card d-flexx d-row">
                    <div class="equal--space d-flexx ">
                        <p class="cutive-mono-regular red--hand--text">Para: <br> La persona más especial.</p>
                    </div>
                    <div class="equal--space middle--section d-flexx">
                       <p class="cutive-mono-regular red--hand--text">DE: <br> <span class="parisienne-regular red--hand--text">Didier.</span></p>
                    </div>
                    <div class="equal--space d-flexx">
                       <p class="cutive-mono-regular red--hand--text"> <span class="parisienne-regular red--hand--text">10/12 <br>2025 </span></p>
                    </div>
                </div>
                <article class="message--section">
                    <p class=""> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eos ex nostrum, corrupti totam deserunt vitae velit eum ducimus voluptate repellendus, libero officiis! Sunt eveniet debitis optio aperiam quisquam veritatis? </p>
                    <p class="footer--message parisienne-regular red--hand--text">Love Note.</p>
                </article>
            </div>
        `;
    }
}
customElements.define('message-component', MessageComponent);