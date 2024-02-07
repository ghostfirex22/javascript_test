// for

let jours=["lundi","mardi","mercredi","joudi","vendredy","samedi","demonge"];

//  for(let i=0;i<=6;i++){
//    console.log(jours[i])
// }
// for in

for (let j in jours){
//     console.log(jours[j])}
}
//for of

for (let jour of jours){
    // console.log(jour)
}

//while loop

let x;
x = 10 
while(x>=0){
    // console.log(x)
    x-=1
}

let y = -1 ;
do{
    // console.log(y)
    y -= 1
}
while(y>=0)

// for each
let txtJours ="";

jours.forEach(myFunction)

function myFunction(value,index, array){
    txtJours += " " + value;
}

// console.log(txtJours)

//

for(let i=0;i<=(jours.length - 1);i++){
    if (i === 3){
        console.log("stop")
    // break
    continue
    }
    console.log(jours[i])
}