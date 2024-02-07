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
    {nom : "Blakoul",prenom: "Mohamed",age: 10},
    {nom : "Najmi",prenom: "Othmane",age: 20}
];

// let nomStagiares;


// nomStagiares = stagiaires.map((stagiaire_Full_Name) => {
//     Full_Name = stagiaire_Full_Name["nom"]+" "+stagiaire_Full_Name["prenom"]
//     return Full_Name })

// console.log(stagiaires)
// console.log(nomStagiares)

// let stagiaire;

// stagiaire = stagiaires.map((Name_and_age) => {
//     Name_age = Name_and_age["nom"]+" is " + Name_and_age["age"] + " years_old"
//     return Name_age }
//     );

// console.log(stagiaire)

// let a = {nom : "loukhmi"}
// a["prenom"] = "lokmane";
// a.age = 24
// let b;
// b = {...a,id : 1};
// console.log("test",b);

let nomAge;
nomAge = stagiaires.map((item,index,arrstagiaire) => {
    //{nom : "Loukhmi",prenom: "Lokmane",age: 19 ,branche : "DD"}
    let st;
    st = {...item, branche: "DD" , id: index + 1};
    if (item["age"] >= 20){
        st.remaque =  "plus 20";
    }
    else if (item["age"] <= 20){
        st.remaque =  "nepas plus 20";
    }
    return st;
});
console.log(nomAge);



