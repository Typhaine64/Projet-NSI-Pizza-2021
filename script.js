var valeur1;
if (document.getElementById('prénom').checked) {
 valeur1 = document.getElementById('prénom').value;
}

var valeur2;
if (document.getElementById('nom').checked) {
 valeur2 = document.getElementById('nom').value;
}

var valeur3;
if (document.getElementById('adresse').checked) {
 valeur3 = document.getElementById('adresse').value;
}


function controle(form1) {
var valeur1 = document.getElementById('prénom').value;
var valeur2 = document.getElementById('nom').value;
var valeur3 = document.getElementById('adresse').value;
alert("FELICITATION !! Votre pizza est désormais en route vers le " + valeur3 + ", au nom de " + valeur2 + " " + valeur1 + ".");
}


//on récupère la valeur du bouton radio.

var rates = document.getElementById('rates').value;
var rate_value;
if (document.getElementById('pepperonis').checked==true) {
  rate_value = document.getElementById('pepperonis').value;
}
else if (document.getElementById('saucisse').checked==true) {
  rate_value = document.getElementById('saucisse').value;
}
else if (document.getElementById('jambon').checked==true) {
  rate_value = document.getElementById('jambon').value;
}
else if (document.getElementById('poulet').checked==true) {
  rate_value = document.getElementById('poulet').value;
}

document.querySelector('input[name="rate_value"]:checked').value;

document.getElementById('results').innerHTML = rate_value;



//on récupère les valeurs des cases à cocher (legumes)

var valeur8;
if (document.getElementById('champignons').checked) {
 valeur8 = document.getElementById('champignons').value;

}

var valeur9;
if (document.getElementById('salade').checked) {
 valeur9 = document.getElementById('salade').value;
}

var valeur10;
if (document.getElementById('tomates').checked) {
 valeur10 = document.getElementById('tomates').value;
}

var valeur11;
if (document.getElementById('onions').checked) {
 valeur11 = document.getElementById('onions').value;
}

var valeur12;
if (document.getElementById('poivrons').checked) {
 valeur12 = document.getElementById('poivrons').value;
}



//on récupère les valeurs des cases à cocher (fruits)

var valeur13;
if (document.getElementById('olives').checked) {
 valeur13 = document.getElementById('olives').value;
}

var valeur14;
if (document.getElementById('ananas').checked) {
 valeur14 = document.getElementById('ananas').value;
}




//on récupère les valeurs des cases à cocher (autres)

var valeur15;
if (document.getElementById('saumon').checked) {
 valeur15 = document.getElementById('saumon').value;
}

var valeur16;
if (document.getElementById('fromage').checked) {
 valeur16 = document.getElementById('fromage').value;
}
