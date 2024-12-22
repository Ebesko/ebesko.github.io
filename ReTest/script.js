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

async function start() {

    //Clean before use
    hide("S1M1P1")
    hide("S1M2P1")
    hide("S1M1P2")
    hide("S1M2P2")

    hide("S3")
    hide("warn")

    // Fetch form data
    var semester = document.querySelector('input[name="semester"]:checked').value;
    var maths_choosen = document.querySelector('input[name="maths"]:checked').value;
    var physic_choosen = document.querySelector('input[name="physic"]:checked').value;

    if (semester == "S3") {
        show('S3');
        show("warn")
    } else {
        var to_show = semester + maths_choosen + physic_choosen;
        show(to_show);
        show("warn")
    }

}

function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = 'block';
}

async function news_and_list() {

    // Clean before use
    document.getElementById("news_loaded_id").innerHTML = "";

    // Fetch courses data from JSON files
    const response_news = await fetch("news.json");
    const news = await response_news.json();

    // Function to create and append course elements
    function appendNews(news_to_add, containerClass) {
        var dateElement = document.createElement("p");
        dateElement.innerText = news_to_add.date;
        dateElement.style.textDecoration = "underline";
        var newsTxtElement = document.createElement("p");
        newsTxtElement.innerText = news_to_add.txt;
        var newsTxt2Element = document.createElement("p");
        newsTxt2Element.innerText = news_to_add.txt2;
        var newsTxt3Element = document.createElement("p");
        newsTxt3Element.innerText = news_to_add.txt3;

        var divmodulen = document.querySelector(containerClass);
        divmodulen.appendChild(dateElement);
        divmodulen.appendChild(newsTxtElement);
        divmodulen.appendChild(newsTxt2Element);
        divmodulen.appendChild(newsTxt3Element);
    }
        for (let news_in_list of news) {
            appendNews(news_in_list, ".news_loaded");
        }

    document.getElementById("news_loaded_id").style.display = 'block';

   }
