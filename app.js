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

                //créer la balise option
                const opt = document.createElement('option');
                for (const key in obj) {
                    //vérification si la clé du tableau est = à STATUS
                    if (key == "STATUS") {
                        let t = obj[key].slice(0, 2).replace('.', ',');
                        opt.value = t;
                        //ajouter le contenu
                        opt.innerHTML += obj[key];
                    }
                    //ajouter le contenu pour l'attribut name
                    if (key == "SUCCESS") {
                        opt.setAttribute("name", obj[key])
                    }
                    //ajouter l'element dans la page
                    status.appendChild(opt);
                }
            }
            //événement au moment du changement de contenu
            status.addEventListener("change", function () {
                let element = this;
                //récuperer l'attribut name pour la balise en cours
                let val = element.options[element.selectedIndex].getAttribute("name");
                if (val != null) {
                    //ajouter la value pour la div success
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

            //créer la balise h1
            let h = document.createElement('h1');
            h.innerText = ("Test Efficy");
            form.prepend(h);

            //ajouter un eveniment 
            form.addEventListener('submit', handleSubmit);
        }
    }

    const main = new Module();
    main.start();
});