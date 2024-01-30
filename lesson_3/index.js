//types primitifs
console.log(typeof(5));

console.log(typeof("dd106"));

console.log(typeof(undefined));

console.log(typeof(true));

//passage par valeur
let a;
let b;
a=5;
b=5;
b=6;

console.log(a);
console.log(b);//it takes only the value

//les types d'objects de base
let list1 = [1,2,3]

let clist = list1

clist.push(10)

console.log(list1)
console.log(clist)

let stagiaire = {
    id : 1,
    prenom:"ahmed"
}

let cstg = stagiaire

cstg.age = 14

console.log(stagiaire)
console.log(cstg)

// copy

let list2 = [].concat(list1)

list2.push(9)

console.log(list1)
console.log(list2)

// spread operator 

let list3 = [...list1]

let stagiaire2 = {...stagiaire}
stagiaire2.branche = "DD"

Object.assign(stagiaire2,stagiaire)

stagiaire2.annee = "2024"

list2.push(9)
console.log(list1)
console.log(list2)
console.log(stagiaire2)
console.log(stagiaire)

console.log(list3)

