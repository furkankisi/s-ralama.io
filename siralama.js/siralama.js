function sirala(dizi) {
    
    return dizi.sort((a, b) => a - b);
}


const sayilar = [45, 12, 78, 23, 56, 89, 34];
const siraliSayilar = sirala(sayilar);
console.log(siraliSayilar);
