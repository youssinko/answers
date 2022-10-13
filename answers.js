
//===================== EASY GOING ==================

for(i=0;i<=20;i++){
    console.log(i)
}
//====================== GET EVEN ====================
for(i=0;i <200 ; i++){
    if( i% 2 === 0){
        console.log(i)
    }
}
//=====================  FIZZ BUZZ ====================
for(i=1;i <100 ; i++)
if(i%3 === 0 && i%5 ===0){
    console.log('fizzBuzz')
}
else if (i % 5 === 0){
    console.log('buzz')
}
else if( i% 3 === 0){
console.log('Fizz')
}
//===================== Wild Wild Life ==================
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
plantee[2]=50001
console.log(plantee)
wolfy[3]="Gotham City"

dart.push("Hawkins")
console.log(dart)
wolfy[0]="Gameboy"
console.log(wolfy)
//==================== Yell at the Ninja Turtles ==============
const ninjaTurtles=[Donatello, Leonardo, Raphael, Michaelangelo]
for(i=0; i<ninjaTurtles.length;i++){
ninjaTurtles[i].toUpperCase()
}
console.log(ninjaTurtles)