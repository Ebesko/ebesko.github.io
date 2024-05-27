function showStuff(id, text, btn) {
    document.getElementById(id).style.display = 'inline';
    document.getElementById(text).style.display = 'inline';
    btn.style.display = 'block';
}

function getdiffvalues() {
    const data = new FormData(myform);
    var tonk = Object.fromEntries(data);
    var year = document.getElementById("year");
    //var nbftyp = document.getElementById("minortyp");
    var nbftyp2 = document.getElementById("minortyptest");
    var semester = document.getElementById("semester");
    console.log("TONK: " + tonk.value);
    console.log("total qui marche: " + data.value);//---------------------------------------------------------------------------------------------------------OUI
    console.log("année: " + year.value + "nbftyp: " + nbftyp2.value + "semestre: " + semester.value);//-------------------------------------------------------OUI
}

