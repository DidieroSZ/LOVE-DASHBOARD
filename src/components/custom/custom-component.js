import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import customStyles from '../../css/customStyles.css?inline';
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { iconos } from '../../utils/icons.js';

export class CustomComponent extends LitElement {

    static properties = {
        dias: { type: Number },
        mostrar: { type: Boolean },
        datos: { type: Object}
    };

    constructor(){
        super();
        this.dias = 0;
        this.mostrar = false;
        this.datos = {
            she: '',
            he: '',
            frase1: '',
            frase2: '',
            link: '',
            fecha: ''
        }
    }

    static styles = [
        css` ${unsafeCSS(generalStyles)}`,
        css` ${unsafeCSS(customStyles)}`,
    ];

    render(){
        if (this.mostrar) {
            return html`
                <div class="custom--container general--container d-flexx d-col">
                    <div class="alert--modal d-flexx">
                        ${unsafeHTML(iconos.alert)}
                        Verifica los datos ingresado, puedo haber alguno faltante o erroneo. 
                    </div>
                    <div class="modal--container card--container d-flexx d-col">
                        <div class="top--card item--card d-flexx d-row">
                            ${unsafeHTML(iconos.bolt)}
                            <p class="">Configuración</p>
                        </div>
                        <div class="middle--card item--card d-flexx d-row">
                            ${this._renderInputs()}
                        </div>
                    </div>
                </div>
            `;
        }
    }

    
    /* -------- FUNCTIONS MODAL -------- */
    _closeModal(){
        this.mostrar = false;
        this.dispatchEvent(
            new CustomEvent('close-modal', {
                bubbles: true,
                composed: true
            })
        );
        
    }
    _verificationData(){
        const inputs = this.renderRoot.querySelectorAll('.input--modal');
        let veri = true;

        inputs.forEach(i => {
            let n = i.id;
            let v = i.value;
            if (v == '' || v == null || v == undefined ) {
                veri = false;
            }
            else{
                if (n == 'link') {
                    let pr1 = v.includes("https://open.spotify.com/");
                    let pr2 = v.includes("track/");
                    console.log(v);
                    if (pr1 && pr2) {
                    }
                    else{
                        veri = false;
                    }
                }
            }
        });
        this._alertModal(veri);
    }
    _alertModal(v){
        if (!v) {
            const alert = this.renderRoot.querySelector('.alert--modal');
            alert.style.top = '1rem';
            alert.style.opacity = '1';

            setTimeout(() => {
                alert.style.top = '-100px';
                alert.style.opacity = '0';
            }, 5000);
        }
        else{
            this._formatData();
        }
    }
    /* -------- FUNCTIONS MODAL -------- */


    /* -------- FUNCTIONS INFORAMTION -------- */
    _formatData(){
        const inputs = this.renderRoot.querySelectorAll('.input--modal');
        inputs.forEach(i => {
            let n = i.id;
            let v = i.value;

            v = v.trim();
            if (n !== 'fecha' && n !== 'link' ) {
                v = v.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ,!¡¿? ]/g, "");
            }
            if (n == 'she' || n == 'he' ) {
                v = v.replace(/[0-9]/g, "");
            }
            if (n == 'link') {
                let ar1 = v.split('/');
                let s = ar1[ar1.length - 1];
                let ar2 = s.split('?');
                v = ar2[0];
            }
            // Llenar Objeto con datos.
            this._fillData(n, v);            
        });
        this._closeModal();
        this.dispatchEvent(
            new CustomEvent('fill-data', {
                bubbles: true,
                composed: true,
                detail: { datos: this.datos },
            })
        );
    }
    _fillData(n, v){
        this.datos[n] = v;
    }
    /* -------- FUNCTIONS INFORAMTION -------- */


    /* -------- FUNCTIONS RENDER MODAL -------- */
    _renderInputs(){
        return html`
          <small class="">Campos personalizables:</small>
          <div class="input--container d-flexx d-col">
            <label for="she" class="c">Nombre 1 <small>(Receptor)</small>:</label>
            <input id="she" type="text" class="input--modal" title="Nombre 1"/>
          </div>
          <div class="input--container d-flexx d-col">
            <label for="he" class="">Nombre 2 <small>(Remitente)</small>:</label>
            <input id="he" type="text" class="input--modal" title="Nombre 2"/>
          </div>
          <div class="input--container d-flexx d-col">
            <label for="fecha" class="">Aniversario:</label>
            <input id="fecha" type="date" class="input--modal" title="Aniversario"/>
          </div>
          <div class="input--container d-flexx d-col">
            <label for="link" class="">Link Spotify:</label>
            <input id="link" type="text" class="input--modal" title="Link Spotif"/>
          </div>
          <div class="input--container w100 d-flexx d-col">
            <label for="frase1" class="">Frase 1:</label>
            <input id="frase1" type="text" class="input--modal" title="Frase 1"/>
          </div>
          <div class="input--container w100 d-flexx d-col">
            <label for="frase2" class="">Frase 2:</label>
            <input id="frase2" type="text" class="input--modal" title="Frase 2" />
          </div>
          <button class="btn--general d-flexx" @click=${this._closeModal}>
            Cerrar
            ${unsafeHTML(iconos.close)}
          </button>
          <button class="btn--general d-flexx btn--prin" @click=${this._verificationData}>
            Guardar
            ${unsafeHTML(iconos.save)}
          </button>
          <button class="btn--general d-flexx btn--link">
            Generar Link
            ${unsafeHTML(iconos.link)}
          </button>
        `;
    }
    /* -------- FUNCTIONS RENDER MODAL -------- */
}
customElements.define('custom-component', CustomComponent);