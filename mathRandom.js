// let start = true;

// while (start) {
//     let player = prompt("masukan hero kamu: gajah, manusia, dan semut");

//     let compt = Math.random();

//     if (compt < 0.35) {
//         compt = "gajah";
//     } else if (compt >= 0.35 && compt < 0.7) {
//         compt = "manusia";
//     } else if (compt >= 0.7 && compt < 0.99) {
//         compt = "semut";
//     }

//     let hasil = "";

//     if (player == compt) {
//         hasil = "anda seri";
//     } else if (player == "gajah") {
//         hasil = compt == "manusia" ? "anda menang": "anda kalah";
//     } else if (player == "manusia") {
//         hasil = compt == "semut" ? "anda menang" : "anda kalah";
//     } else if (player == "semut") {
//         hasil = compt == "gajah" ? "anda menang": "anda kalah";
//     } else {
//         hasil = "harap masukan hero yang tertera";
//     }
    
//     alert("anda memasukan " + player + "  vs  " + compt +"\n hasilnya adalah " + hasil);

//     start = confirm("game over, try again?");

// }
// alert("thanks brother")

// start game
let startGame = true;

while(startGame){
// input by player
let player = prompt("input your type: stone, scissor,paper")

// random method
let comp = Math.random();

// description of declaration by computer
if(comp<0.35){
    comp = "stone"
}else if(comp>= 0.35 && comp < 0.70){
    comp = "scissor"
}else if(comp>=0.70 && comp < 0.99){
    comp = "paper"
}

// declaration of battle win or lose
let result =""
if(player == comp){
    result = "your result is a draw"
}else if(player=="stone"){
    result= (comp=="scissor")?"your win":"your lose";
}else if(player == "scissor"){
    result= (comp =="paper")?"your win":"your lose";
}else if( player=="paper"){
    result = (comp=="stone")?"your win":"your lose";
}else{
    result = "your input is mistake"
}
// the result player lose or win
alert("your input is " + player + " vs " + comp + " your result is " + result)
startGame = confirm("want to play again ?")
} 
// end
alert("thank bro, Nice to meet you")



