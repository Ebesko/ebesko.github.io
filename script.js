function showStuff1(id_to_show, link_block, clicked_link) {
    document.getElementById(id_to_show).style.display = 'block';
    // hide the lorem ipsum text
    document.getElementById(link_block).style.display = 'block';
    // hide the link
    clicked_link.style.display = 'block';
}

function showStuff(id, text, btn) {
    document.getElementById(id).style.display = 'block';
    document.getElementById(text).style.display = 'block';
    btn.style.display = 'block';
}


const data = new FormData(myform);
function megatest(data) {
    console.log("total" + data);//NON
    var tonk = Object.fromEntries(data);
    console.log("total2" + data.value);//OUI
    var nom = document.getElementById("semestre");
    console.log(nom);//NON
    console.log(nom.value);//OUI
}

function getdiffvalues() {
    const data = new FormData(myform);
    var tonk = Object.fromEntries(data);
    var year = document.getElementById("year");
    var nbftyp = document.getElementById("minortyp");
    var nbftyp2 = document.getElementById("minortyptest");
    var semester = document.getElementById("semester");
    console.log("TONK: " + tonk.value);
    console.log("total qui marche: " + data.value);//---------------------------------------------------------------------------------------------------------OUI
    console.log("année: " + year.value + "nbftyp: " + nbftyp.value + "nbftyp2: " + nbftyp2.value + "semestre: " + semester.value);//-------------------OUI
}

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
}