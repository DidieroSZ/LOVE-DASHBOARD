import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import customStyles from '../../css/customStyles.css?inline';
import { unsafeCSS } from 'lit-element';


export class CustomComponent extends LitElement {

    static properties = {
        dias: { type: Number },
    };

    constructor(){
        super();
        this.dias = 0;
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(customStyles)}`,
    ];

    render(){
        return html`
            <section class="custom--container general--container card--container d-flexx d-col">
                <div class=""></div>
            </section>
        `;
    }
}
customElements.define('custom-component', CustomComponent);