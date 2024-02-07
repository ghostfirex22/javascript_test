// let somme = function(a,b){
//     return a + b
// }

// let sm = somme(5,9)

// // console.log(sm)

// // les function flechess(arrow function)
// let a= function(){
//     return console.log("hello akram!!")
// };

// let great = () => {
//     return console.log("hello mohamed!!")
// };
// // // or 
// let great2 = () => console.log("hello mohamed!!")

// let nomcomplet = (nom,prenom) => {

//     let fullname = nom + " " + prenom

//     return fullname
// }

// // console.log(nomcomplet("Loukhmi","Lokmane"))

// // great2()

// // les exepressions lambdas
// // map(il retourn un nouveau tableau)

// const jours=["lundi","mardi","mercredi","jeudi","vendredi","samedi","demanche"];

// jours.map( function(item){

//     return console.log(item)
// })

// jours.map((item) => {

//     return console.log(item)
// })

// jours.map((item) => {
//     if (item === "jeudi"){
//         item = item + "* jour ferier"
//     }
//     return console.log(item)
// })

// console.log(jours)

// map c'est une methode qui retourne un nouveau tableau

const stagiaires = [
    {nom : "Loukhmi",prenom: "Lokmane",age: 19},
    {nom : "Maih",prenom: "Akram",age: 19},
    {nom : "Blakoul",prenom: "Mohamed",age: 20},
    {nom : "Najmi",prenom: "Othmane",age: 22}
];

let nomStagiares;


nomStagiares = stagiaires.map((stagiaire_Full_Name) => {
    Full_Name = stagiaire_Full_Name["nom"]+" "+stagiaire_Full_Name["prenom"]
    return Full_Name })

console.log(stagiaires)
console.log(nomStagiares)

