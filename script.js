﻿function showStuff1(id_to_show, link_block, clicked_link) {
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
    console.log("total" + data);
    var tonk = Object.fromEntries(data);
    console.log("total2" + data);
}

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
}