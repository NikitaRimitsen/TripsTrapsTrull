//https://pastebin.com/WG2Vpvze

var kellekord="pildid/x.png";
var lopp=false;
function klik(pilt){
    pilt.src=kellekord;

    if(vyidukontroll()){
        alert("Sa võtsid!");
        lopp=true;
    }

    if(kellekord=="pildid/x.png"){
        kellekord="pildid/0.png";
    }else{
        kellekord="pildid/x.png";
    }
    if(ruududKasutatud()){
        lopp=true;
        alert("Mäng on läbi!");
    }

}
// проверяет все картинки и возвращает false если найдёт пустую картинку
function ruududKasutatud(){
    pildid=document.images;
    for(var i=0;i<pildid.length; i++){
        if(pildid[i].src.split("/").pop()=="tyhi.png"){
            return false;
            //split("/") - делает массив из пути к файлу
            //pop() - выбирает из массива последнее значение или имя файла
        }
    }
    return true;
}


// определяем имя файла
function sisu(nr){
    var fnimi=document.getElementById("pilt"+nr).src;
    fnimi=fnimi.split("/").pop();
    return fnimi;
}
function kontrollsisu(a,b,c, sisulopp){
    //a,b,c - номера картинок и sisulopp - адрес нужной картинки
    if(sisu(a)==sisulopp.split("/").pop() && sisu(b)==sisulopp.split("/").pop() && sisu(c)==sisulopp.split("/").pop())
    {return true;}else {return false;}

}
function vyidukontroll(){
    if(kontrollsisu(1,2,3, kellekord)){return true;}
    if(kontrollsisu(4,5,6, kellekord)){return true;}
    if(kontrollsisu(7,8,9, kellekord)){return true;}
    if(kontrollsisu(1,4,7, kellekord)){return true;}
    if(kontrollsisu(2,5,8, kellekord)){return true;}
    if(kontrollsisu(3,6,9, kellekord)){return true;}
    if(kontrollsisu(1,5,9, kellekord)){return true;}
    if(kontrollsisu(3,5,7, kellekord)){return true;}
    return false;

}