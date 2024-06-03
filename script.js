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

    //document.getElementById(generated).style.display = 'grid';
}

async function start() {
    // Récupération des cours depuis le fichier JSON
    const reponse = await fetch("bild.json");
    const bild = await reponse.json();

    for (modules in bild) {

        const module = bild[modules];
        const numberElement = document.createElement("p");
        numberElement.innerText = module.num;
        const nomElement = document.createElement("p");
        nomElement.innerText = module.nom;
        const pointsElement = document.createElement("p");
        pointsElement.innerText = module.ECTS;
        const semesterElement = document.createElement("p");
        semesterElement.innerText = module.semestre;

        const divmodulen = document.querySelector(".modul");
        divmodulen.appendChild(numberElement);
        divmodulen.appendChild(nomElement);
        divmodulen.appendChild(pointsElement);
        divmodulen.appendChild(semesterElement);

    }
    
}
