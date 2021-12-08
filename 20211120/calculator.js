let elsoSzam = parseInt(window.prompt('Első szám'));
let masodikSzam = parseInt(window.prompt('Masodik szam'));
let irasjel = window.prompt('Muveleti jel');
let eredmeny;

/* if(irasjel=="+") {
    eredmeny=Number(elsoSzam)+Number(masodikSzam);
}
else if(irasjel=="/") {
    eredmeny=Number(elsoSzam)/Number(masodikSzam);
}
else if(irasjel=="*") {
    eredmeny=Number(elsoSzam)*Number(masodikSzam);
}
else if(irasjel=="-") {
    eredmeny=Number(elsoSzam)-Number(masodikSzam);
}
else if(irasjel=!null) {
    eredmeny="Error"
}
else if(elsoSzam=!null) {
    eredmeny="Error"
}
else if(masodikSzam=!null) {
    eredmeny="Error"
}
 */

switch(irasjel) {
    case '+':
        eredmeny=Number(elsoSzam)+Number(masodikSzam);
        break;
    case '/':
        eredmeny=Number(elsoSzam)/Number(masodikSzam);
        break;
    case '*':
        eredmeny=Number(elsoSzam)*Number(masodikSzam);
        break;
    case '-':
        eredmeny=Number(elsoSzam)-Number(masodikSzam);
        break;
    default:
        window.alert('Helytelen írásjel!');
}

console.log(eredmeny);