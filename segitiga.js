
function makeSegitiga(param){
    let segitiga = " ";
    for( let i = 0; i<param ;i++){
    // membuat ruang kosong disebelah kiri
    for(let j = param - i; j > 0; j--){
        segitiga += " ";
    }
    // menambahkan bintang untuk membentuk segitiga
    for(let k = 1; k <= i*2-1; k++){
    segitiga += i;
    }
    segitiga +="\n"
    }
    return segitiga;
}

console.log(makeSegitiga(5));