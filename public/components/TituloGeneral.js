const d = document;

class GeneralTitle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.title = this.getAttribute("data-title")
        this.fecha = new Date();

        this.shadowRoot.innerHTML = `
            <style type="text/css">
                h1 {
                    font-size: 4rem;
                    font-family: sans-serif;
                    text-align: center;
                }

                p {
                    font-size: 1rem;
                    font-family: sans-serif;
                    text-align: center;
                }

                ul {
                    margin: 0px auto:
                }

                li {
                    display: inline-block;
                    background-color: teal;
                    padding: 5px 15px;
                    border-radius: 10px;
                }
                
                a {
                    color: white;
                    text-decoration: none;
                }
            </style>

            <h1>${this.title}</h1>
            <ul>
                <li><a href="/">Jugadores</a></li>
                <li><a href="/about">about</a></li>
            </ul>
            <p>fecha: ${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}</p>
        `;
    }
}

customElements.define("titulo-general", GeneralTitle);