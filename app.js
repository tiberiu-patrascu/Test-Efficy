document.addEventListener("DOMContentLoaded", function () {
    const oppoStatus = [
        {
            "K_OPPO_STATUS": 1,
            "STATUS": "1. Initial Contact",
            "SUCCESS": 0
        },
        {
            "K_OPPO_STATUS": 2,
            "STATUS": "2. Demonstration",
            "SUCCESS": 25
        },
        {
            "K_OPPO_STATUS": 3,
            "STATUS": "3. Proposal",
            "SUCCESS": 50
        },
        {
            "K_OPPO_STATUS": 4,
            "STATUS": "4. Negotiation",
            "SUCCESS": 75
        },
        {
            "K_OPPO_STATUS": 5,
            "STATUS": "5. Order",
            "SUCCESS": 100
        }
    ];

    const Module = class {
        constructor() {

        }
        start() {
            // Start modifying the form elements here!
            // You are allowed to add extra methods and properties to this class
            //chercher l'element dans la page
            let status = document.querySelector('[name="status"]');
            status.innerHTML = '<option value="" name="">Select</option>';

            let success = document.querySelector('[name="success"]');
            //parcourir le contenu
            for (let i = 0; i < oppoStatus.length; i++) {
                let obj = oppoStatus[i];

                const opt = document.createElement('option');
                for (const key in obj) {
                    //vérification si la clé du tableau est = à STATUS
                    if (key == "STATUS") {
                        //console.log(obj[key]);
                        let t = obj[key].slice(0, 2).replace('.', ',');
                        //créer la balise option

                        opt.value = t;
                        //ajouter le contenu dans la page
                        opt.innerHTML += obj[key];
                    }
                    if (key == "SUCCESS") {
                        //console.log(obj[key]);
                        opt.setAttribute("name", obj[key])
                    }
                    status.appendChild(opt);
                }
            }
            //
            status.addEventListener("change", function () {
                let element = this;
                let val = element.options[element.selectedIndex].getAttribute("name");
                if (val != null) {
                    success.setAttribute("value", val);
                }
            });

            //function pour la gérer la soumission du formulaire
            function handleSubmit(event) {
                let output = document.querySelector(".output");

                //vider la div
                output.innerHTML = "";
                //annuler l'action par défaut
                event.preventDefault();

                //créer un nouvel objet FormData
                const data = new FormData(event.target);
                //envoier un object js
                const value = Object.fromEntries(data.entries());

                //convertir la valeur js en chaîne JSON
                output.innerHTML = JSON.stringify(value);

            }

            //récupérer la balise form
            const form = document.querySelector('form');

            let h = document.createElement('h1');
            h.innerText = ("Test Efficy");
            form.prepend(h)

            //ajouter un eveniment 
            form.addEventListener('submit', handleSubmit);
        }
    }

    const main = new Module();
    main.start();
});