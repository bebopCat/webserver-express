const d = document;

class PlayerCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {

        this.imageUrl = this.getAttribute("data-imageUrl");
        this.name = this.getAttribute("data-name");
        this.id = this.getAttribute("data-id");

        fetch("./db.json")
            .then(res => res.json())
            .then(json => {
                console.log(json[this.id]);
                this.shadowRoot.innerHTML = `
                    <style type="text/css">
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }

                        article {
                            position: relative;
                            height: 500px;
                        }
                        
                        img {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            border-radius: 20px 20px 0px 0px;
                            object-fit: cover;
                            z-indeX: 10;
                        }

                        section {
                            position: absolute;
                            width: 100%;
                            height: 50%;
                            background-color: rgba(69, 119, 199, .7);
                            bottom: 0px;
                            padding-top: 20px;
                            border-radius: 20px 20px 0px 0px;
                            z-index: 20;
                            text-align: center;
                        }

                        h1 {
                            font-family: sans-serif;
                            font-size: 2rem;
                            color: white;
                        }

                        p {
                            font-family: sans-serif;
                            font-size: 1.2rem;
                            color: white;  
                        }

                    </style>
                    <article>
                        <img src="${json[this.id].imagen}"></img>
                        <section>
                            <h1>${json[this.id].nombre}</h1>
                            <br>
                            <p>Equipo: ${json[this.id].equipo}</p>
                            <p>Pais: ${json[this.id].pais}</p>
                        </section>
                    </article>
                `;
            });
    }
}

customElements.define("tarjeta-jugador", PlayerCard);