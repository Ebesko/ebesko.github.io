function showStuff(id, text, btn) {
    document.getElementById(id).style.display = 'grid';
    document.getElementById(text).style.display = 'none';
    btn.style.display = 'block';
}

function showSpecial(id, text, btn) {
    document.getElementById(id).style.display = 'block';
    document.getElementById(text).style.display = 'none';
    document.getElementById("showfirst").style.display = 'none';
    document.getElementById("generate").disabled = false; 
    btn.style.display = 'block';
}

function hiddenBefore(id, text, btn) {
    document.getElementById(id).style.display = 'block';
    document.getElementById(text).style.display = 'block';
    btn.style.display = 'block';
}

function getdiffvalues() {
    const data = new FormData(myform);
    var tonk = Object.fromEntries(data);
    var year = document.getElementById("year");
    var nbftyp2 = document.getElementById("minortyptest");
    var nbfname = document.getElementById("minor");
    var semester = document.getElementById("semester");
    console.log("Année d'inscription: 20" + year.value + ", type de mineure: " + nbftyp2.value + ", nom de la mineure: " + nbfname.value + ", semestre: " + semester.value);
}

function minitest() {
    var nbfname = document.getElementById("minor");
    document.getElementById("to_show_when_generate").innerHTML = nbfname.value;

    //
}

async function start() {
    //Clean before use
    document.getElementById("generated").innerHTML = "";

    // Récupération des données de formulaire
    const data = new FormData(myform);
    var tonk = Object.fromEntries(data);
    var year = document.getElementById("year");
    var nbftyp2 = document.getElementById("minortyptest");
    var nbfname = document.getElementById("minor");
    var semester_gwlt = document.getElementById("semester");

    // Récupération des cours depuis le fichier JSON:
    //Histoire (dans tout les cas):
    const reponse_history = await fetch("megatest.json");
    const hist = await reponse_history.json();

    const reponse_bild = await fetch("history.json");
    const bild = await reponse_bild.json();

    console.log(semester_gwlt.value)
    console.log(bild)

    if (semester_gwlt.value == "all") {
        //Modules de mineure
        for (let modules of bild) {
            console.log("in loop");
            var module = bild[modules];
            var numberElement = document.createElement("p");
            numberElement.innerText = module.num;
            var nomElement = document.createElement("p");
            nomElement.innerText = module.nom;
            var pointsElement = document.createElement("p");
            pointsElement.innerText = module.ECTS;
            var semesterElement = document.createElement("p");
            semesterElement.innerText = module.semestre;
            var choiceElement = document.createElement("p");
            choiceElement.innerText = module.choix;

            var divmodulen = document.querySelector(".modul-minor");
            divmodulen.appendChild(numberElement);
            divmodulen.appendChild(nomElement);
            divmodulen.appendChild(pointsElement);
            divmodulen.appendChild(semesterElement);
            divmodulen.appendChild(choiceElement);
        } 
        // Modules d'Histoire
        for (let modules in hist) {
            console.log("in loop");
            var module = hist[modules];
            var numberElement = document.createElement("p");
            numberElement.innerText = module.num;
            var nomElement = document.createElement("p");
            nomElement.innerText = module.nom;
            var pointsElement = document.createElement("p");
            pointsElement.innerText = module.ECTS;
            var semesterElement = document.createElement("p");
            semesterElement.innerText = module.semestre;
            var choiceElement = document.createElement("p");
            choiceElement.innerText = module.choix;

            var divmodulen = document.querySelector(".modul-hist");
            divmodulen.appendChild(numberElement);
            divmodulen.appendChild(nomElement);
            divmodulen.appendChild(pointsElement);
            divmodulen.appendChild(semesterElement);
            divmodulen.appendChild(choiceElement);
        } 
    } else {
        //Si un semestre et pas tous les modules
        console.log("else value:" + semester_gwlt.value);

        var choosen_semester = semester_gwlt.value - 1;

        var choosen_module = hist[choosen_semester];
        var numberElement = document.createElement("p");
        numberElement.innerText = choosen_module.num;
        var nomElement = document.createElement("p");
        nomElement.innerText = choosen_module.nom;
        var pointsElement = document.createElement("p");
        pointsElement.innerText = choosen_module.ECTS;
        var semesterElement = document.createElement("p");
        semesterElement.innerText = choosen_module.semestre;
        var choiceElement = document.createElement("p");
        choiceElement.innerText = choosen_module.choix;

        var divmodulen = document.querySelector(".modul-hist");
        divmodulen.appendChild(numberElement);
        divmodulen.appendChild(nomElement);
        divmodulen.appendChild(pointsElement);
        divmodulen.appendChild(semesterElement);
        divmodulen.appendChild(choiceElement);

        var choosen_module = bild[choosen_semester];
        var numberElement = document.createElement("p");
        numberElement.innerText = choosen_module.num;
        var nomElement = document.createElement("p");
        nomElement.innerText = choosen_module.nom;
        var pointsElement = document.createElement("p");
        pointsElement.innerText = choosen_module.ECTS;
        var semesterElement = document.createElement("p");
        semesterElement.innerText = choosen_module.semestre;
        var choiceElement = document.createElement("p");
        choiceElement.innerText = choosen_module.choix;

        var divmodulen = document.querySelector(".modul-minor");
        divmodulen.appendChild(numberElement);
        divmodulen.appendChild(nomElement);
        divmodulen.appendChild(pointsElement);
        divmodulen.appendChild(semesterElement);
        divmodulen.appendChild(choiceElement);
    }
    
    document.getElementById("generated").style.display = 'grid';
    
}
