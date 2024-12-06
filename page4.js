let formulaire = document.getElementById("monFormulaire");
let form = {};

Array.from(formulaire.elements).forEach((champ) =>
  champ.addEventListener("change", function () {
    console.log("Valeur modifiée :", champ.value);
  })
);
formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  form.utilisateurId = document.getElementById("userId").value;
  form.utilisateurTitre = document.getElementById("titre").value;
  form.utilisateurContenu = document.getElementById("contenu").value;
});
console.log(form);

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({}),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
alert("Post envoyé !");
