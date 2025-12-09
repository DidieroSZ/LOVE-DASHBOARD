import { LitElement, html, css } from "lit-element";
import generalStyles from '../../css/general.css?inline';
import customStyles from '../../css/customStyles.css?inline';
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { iconos } from '../../utils/icons.js';

export class CustomComponent extends LitElement {

    static properties = {
        dias: { type: Number },
        mensaje: { type: String },
        mostrar: { type: Boolean },
        datos: { type: Object}
    };

    constructor(){
        super();
        this.dias = 0;
        this.mensaje = '';
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
                        ${this.mensaje}
                       
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


    /* -------- FUNCTIONS DATA INFORMATION -------- */
    _verificationData(){
        const inputs = this.renderRoot.querySelectorAll('.input--modal');
        let errorInformation = true;
        let datosTemp = {};

        inputs.forEach(i => {
            let n = i.id;
            let v = i.value;

            if ( v == '' || v == null || v == undefined ) {
                errorInformation = false;
            }
            else{
                if (n == 'link') {
                    if (!this._linkVerification(v)) {
                        errorInformation = false;
                    }
                }
            }
            if (errorInformation) {
                v = this._formatData(n, v);
                datosTemp[n] = v;
            }
        });

        this._alertModal(errorInformation);

        if (errorInformation) {
            this.datos = datosTemp;
            this._linkGeneration();
        }
    }
    _linkVerification(v){
        let pr1 = v.includes("https://open.spotify.com/");
        let pr2 = v.includes("track/");
        
        if (pr1 && pr2) {
            return true;
        }
        else{
            return false;
        }
    }   
    _formatData(n, v){
        let valor = v;
        valor = valor.trim();
        if (n !== 'fecha' && n !== 'link' ) {
            valor = valor.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ,!¡¿? ]/g, "");
        }
        if (n == 'she' || n == 'he' ) {
            valor = valor.replace(/[0-9]/g, "");
        }
        if (n == 'link') {
            let ar1 = valor.split('/');
            let s = ar1[ar1.length - 1];
            let ar2 = s.split('?');
            valor = ar2[0];
        }
        return valor;
    }    
    /* -------- FUNCTIONS DATA INFORMATION -------- */


    /* -------- FUNCTIONS LINKS -------- */
    _linkGeneration(){
        const url = new URL(window.location.href);
        const paramsUrl = this._paramsSet(url);
        navigator.clipboard.writeText(paramsUrl);
        setTimeout(() => {
            window.location = paramsUrl;
        }, 5000);        
    }
    _validationLink(){
        const params = new URLSearchParams(window.location.search);
        let validation = false;
        const vars = Object.keys( this.datos );
        vars.forEach(el => {
            validation = params.has(el);
        });

        return validation;
    }
    _paramsSet(url){
        url.searchParams.set('she', this.datos.she);
        url.searchParams.set('he', this.datos.he);
        url.searchParams.set('link', this.datos.link);
        url.searchParams.set('frase1', this.datos.frase1);
        url.searchParams.set('frase2', this.datos.frase2);
        url.searchParams.set('fecha', this.datos.fecha);
        return url;
    }
    /* -------- FUNCTIONS LINKS -------- */


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
    _alertModal(v){
        const alert = this.renderRoot.querySelector('.alert--modal');
        alert.style.top = '1rem';
        alert.style.opacity = '1';
        alert.classList.remove('error--alert');
        alert.classList.remove('succes--alert');

        setTimeout(() => {
            alert.style.top = '-100px';
            alert.style.opacity = '0';
        }, 3000);

        if (v) {
            alert.classList.add('succes--alert');
            this.mensaje = 'Información Guardada, enlace copiado al portapapeles.';
            setTimeout(() => {
                this._closeModal();
            }, 5000);
        }
        else{
            alert.classList.add('error--alert');
            this.mensaje = 'Verifica los datos ingresado, puedo haber alguno faltante o erroneo.'
        }
    }
    /* -------- FUNCTIONS MODAL -------- */


    /* -------- FUNCTIONS EVENTS -------- */
    _eventGenerator(v){
        switch (v) {
            case 'fill-data':
                this.dispatchEvent(
                    new CustomEvent('fill-data', {
                        bubbles: true,
                        composed: true,
                        detail: { datos: this.datos },
                    })
                );
            break;
        
            default:
                break;
        }
    }
    /* -------- FUNCTIONS EVENTS -------- */


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
          
        `;
    }
    /* -------- FUNCTIONS RENDER MODAL -------- */
}
customElements.define('custom-component', CustomComponent);