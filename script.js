let temperatura = parseFloat(prompt("imforme a tempratura em graus celsius"));

if (temperatura<0){
alert("muito frio");
}else if(temperatura>=0 && temperatura<=15){
    alert("frio");
}else if(temperatura >=16 && temperatura<=26){
    alert("agradavel");
}else if(temperatura>=26 && temperatura<=35){
    alert("quente");
}else{
    alert(" muito quente")

}




