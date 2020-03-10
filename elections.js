function saluer(bipbip) {
  alert(`Bonjour ${bipbip} !`);
}

// Juste pour le bouton qui exécute Bonjour Pierre
// document.querySelector('.hello-btn').addEventListener('click', function(){
//   saluer('Pierre');
// });

document.querySelector('.hello-btn').addEventListener('click', function(){
  var bipbip = document.querySelector('.prenom1').value;
  saluer(bipbip);
});

function validerAge() {
  let x = document.querySelector('.age').value;
  if (x >= 18) {
    alert('Inscrivez-vous !');}
  else {
    alert('Vous êtes trop jeune...');}
}

document.querySelector('.age-btn').addEventListener('click', function() {
  validerAge();
});
