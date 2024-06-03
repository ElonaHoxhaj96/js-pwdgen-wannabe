//Welcome page; 
document.getElementById( 'title' ).innerHTML ='Welcome to Boolean';

// assignment of values ​​to let
let user_name = prompt ('Nome');
let user_surname = prompt('Cognome');
let favorite_color = prompt ('Colore Preferito');

// ask the user to enter their own name;
document.getElementById( 'name' ).innerHTML = 'Inserisci il tuo nome: ' + user_name;

//ask the user to enter their own surname; 
document.getElementById( 'surname' ).innerHTML = 'Inserisci il tuo cognome: ' + user_surname;

//ask the user to enter their own favorite colour;
document.getElementById( 'fav_color' ).innerHTML = 'Quale è il tuo colore preferito? ' + favorite_color;

//fixing a number;
const numerofisso = 23;

//fomula of password;
let result = user_name+user_surname+favorite_color+numerofisso;

console.log('Password: '+ result)

document.getElementById ('password').innerHTML = ('Questa è la tua password: '+ result)

