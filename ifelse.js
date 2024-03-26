let again = true;

while(again === true){
let usia = prompt("masukan usia anda?");
if(usia < 5){
    alert("anda bocil")
}
else if(usia < 18){
    alert("anda remaja")
}else if(usia < 22){
    alert("anda dewasa")
}else if(usia>22){
    alert("anda tua")
}else{
    alert("masukkan angka")
}
again =confirm("lagi");
}
alert("thank bro informasinya");

