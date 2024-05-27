function showStuff(id, text, btn) {
    document.getElementById(id).style.display = 'block';
    document.getElementById(text).style.display = 'none';
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
}