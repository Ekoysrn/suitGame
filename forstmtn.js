let jmlSupercars = 10;
let supercarsGood = 5;
let noSupercars = 1;
let SupercarsFast = 7;

// while (noSupercars <= supercarsGood) {
//     console.log("supercars no ",noSupercars,"true")
//     noSupercars++
// }

for(noSupercars;noSupercars<=jmlSupercars;noSupercars++){
    if(noSupercars<=supercarsGood && noSupercars !==5 && noSupercars !==3 && noSupercars !==2 ){
    console.log("supercars no ", noSupercars, "racing")
    }else if(noSupercars == 2|| noSupercars == 5 || noSupercars == 7 || noSupercars==10){
    console.log("supercars no ", noSupercars, 'work')
    }else{
    console.log("supercars no ",noSupercars, "break")
    }
}

let a = 1,
    b = 2;
    c = a ///b;

    console.log(c)



