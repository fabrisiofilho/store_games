var x;
x=0;

function setfun(){
    if(x==0){
        abrirNav(x);
        ++x;
    }else if(x==1){
        fecharNav(x);
    }
}

function abrirNav() {
    document.querySelector('body > nav').style.width = "18rem";
    document.querySelector('body > nav > div:nth-child(1) > div:nth-child(1) > span').style.width = "150px";
    document.querySelector('body > nav > div:nth-child(1) > div:nth-child(1) > span').style.height = "20px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(1) > span').style.width = "150px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(2) > span').style.width = "150px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(3) > span').style.width = "150px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(4) > span').style.width = "150px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(1) > span').style.height = "20px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(2) > span').style.height = "20px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(3) > span').style.height = "20px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(4) > span').style.height = "20px";
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(1) > span').style.width = "150px";
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(1) > span').style.height = "20px";
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(2) > span').style.width = "150px";
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(2) > span').style.height = "20px";
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(1) > div.status.centraliza.colums').style.left = "19rem";
    document.querySelector('body').style.gridTemplateColumns = "18rem 1fr";
}

function fecharNav() {
    document.querySelector('body > nav').style.width = "5rem";
    document.querySelector('body > nav > div:nth-child(1) > div:nth-child(1) > span').style.width = "0px";
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(2) > span').style.height = "0px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(1) > span').style.width = "0px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(2) > span').style.width = "0px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(3) > span').style.width = "0px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(4) > span').style.width = "0px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(1) > span').style.height = "0px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(2) > span').style.height = "0px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(3) > span').style.height = "0px";
    document.querySelector('body > nav > div:nth-child(2) > div:nth-child(4) > span').style.height = "0px";
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(1) > span').style.width = "0px";
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(1) > span').style.height = "0px";
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(2) > span').style.width = "0px";
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(2) > span').style.height = "0px";
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(1) > div.status.centraliza.colums').style.left = "6rem";
    document.querySelector('body').style.gridTemplateColumns = "5rem 1fr";
    x = 0;
}

var openstatus;
openstatus = 0;

function statusopen() {
    if(openstatus==0){
        abrirStatus(openstatus);
        ++openstatus;
    }else if(openstatus==1){
        fecharStatus(openstatus);
    }
}

function abrirStatus(){
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(1) > div.status.centraliza.colums').style.display = "block";
}

function fecharStatus() {
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(1) > div.status.centraliza.colums').style.display = "none";
    openstatus = 0;
}

function invisivel() {
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(1) > div.perfil').style.border = "2px solid gray";
    fecharStatus()
}

function online(){
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(1) > div.perfil').style.border = "2px solid rgb(11, 136, 11)";
    fecharStatus()
}

function ocupado() {
    document.querySelector('body > nav > div:nth-child(3) > div:nth-child(1) > div.perfil').style.border = "2px solid red";
    fecharStatus()
}