// 1. Acquire a reference to our <form>.
//    This can also be done by setting <form name="blub">:
//       var form = document.forms.blub;

var form = document.getElementById("generate");
const cauche = document.querySelector('#cauche');


// 2. Get a reference to our preferred element (link/button, see below) and
//    add an event listener for the "click" event.
document.getElementById("generate").addEventListener("click", function () {
    e.preventDefault();
    cauche.classList.add('show');
});
