// funkce, která generuje trojúhelník z čísel takto:
// 55555
// 4444
// 333
// 22
// 1
// a vrátí ho jako řetězec
function trojuhelnik51(){
    let t="";
    for(let rad=5; rad>=1; rad--) {
            // sestavení řádku
            for(let slo=1; slo<=rad; slo++) {
            // odřádkování
            t += String(rad);
        }
        t += "\n";
    }
    return t;
}


// funkce, která generuje trojúhelník z čísel takto:
// 0
// 22
// 444
// 6666
// 88888
// a vrátí ho jako řetězec
function trojuhelnik08(){
    let t="";
        for(let rad=1; rad<=5; rad++) {
            // sestavení řádku
            for(let slo=1; slo<=rad; slo++) {
            // odřádkování
            t += String(rad*2-2);
        }
        t += "\n";
    }
    return t;
}

// tisk trojúhelníků
console.log(trojuhelnik51());
console.log(trojuhelnik08());
