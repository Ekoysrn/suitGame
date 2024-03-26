// function segitiga(baris){

//     let bintang = "";

//     for(var i = 0; i < baris; i++){
//     for(var j= 0;j <= i; j++ ){
//         bintang+="*";
//     }

//         bintang+="\n";
//     }
//     return bintang;
// }

// console.log(segitiga(5));

// function segitigaSamaKaki(angka){
//     let s = ""
//     for(var i = 0; i <= angka; i++){
//         for(let j = 0; j<i; j++){
//         s+=i+j
//         }
//     s+="\n"
//     }
//     return s;
// }

// console.log(segitigaSamaKaki(5))

function segitiga3(b) {
let s = "";

for (let i = 1; i <= b; i++) {
    for (let j = b -1; j >= i; j--) {
    s += " ";
}
for (let k = 1; k <= i; k++) {
    s += "*";
}
for (let m = 1; m < i; m++) {
    s += "*";
}
s += "\n";
}
return s;
}

console.log(segitiga3(5));

function segitiga4(o) {
    let s = "";
    
    for (let i = 1; i <= o; i++) {
        for (let j = o; j >= i; j--) {
        s += "*";
    }
    for (let k = 1; k > i; k++) {
        s += "*";
    }
    
    s += "\n";
    }
    return s;
    }
    
    console.log(segitiga4(5));