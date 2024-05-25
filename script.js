function showStuff1(id_to_show, link_block, clicked_link) {
    document.getElementById(id_to_show).style.display = 'block';
    // hide the lorem ipsum text
    document.getElementById(link_block).style.display = 'block';
    // hide the link
    clicked_link.style.display = 'block';
}

function showStuff(id, text, btn) {
    document.getElementById(id).style.display = 'block';
    btn.style.display = 'block';
}



const sem = document.getElementById(semestre);
function megatest(sem) {
    var klong = Object.fromEntries(sem);
    console.log(klong);
}