
var l1=0,l2=0,l3=0,area=0;
var resulperi=0;
var texto="";

function valor1(){
    l1=parseFloat(document.getElementById("v1").value)
    console.log(l1)
}
function valor2(){
     l2=parseFloat(document.getElementById("v2").value)
    console.log(l2)
    
}
function valor3(){
     l3=parseFloat(document.getElementById("v3").value)
    console.log(l3)
}
function PERIMETRO(){
resulperi=(l1+l2+l3)/2;
console.log(resulperi);
document.getElementById("mostrar").innerHTML+='<p id="d">el perimetro es:'+resulperi+'</p>'

}
 function AREA(){
    if(resulperi>l1 && resulperi>l2 && resulperi>l3){
    var x=(resulperi-l1);
    var x2=(resulperi-l2);
    var x3=(resulperi-l3);
    
    area=Math.sqrt(resulperi*x*x2*x3)
    texto=document.getElementById("mostrar").innerHTML+='<p id="d">el area es:'+area+'</p>'    
    }
    else{
        texto=document.getElementById("mostrar").innerHTML+='<p id="d">error,no se puede calcular el area</p>'    
    }
 }

 function tipofigura(){
    if(l1==l2 && l2==l3 && l3==l1){
    document.getElementById("mostrar").innerHTML+='<p id="d">el triangulo es equilatero</p>'
   }
   else if(l1==l2 && l2!=l3 && l3!=l1 || l1!=l2 && l2==l3 && l3!=l1 || l1!=l2 && l2!=l3 && l3==l1){
    document.getElementById("mostrar").innerHTML+='<p id="d">el triangulo es isoceles</p>'
   }
   else if(l1!=l2 && l2!=l3 && l3!=l1){
    document.getElementById("mostrar").innerHTML+='<p id="d">el triangulo es escaleno</p>'
    
   }


 }
 function eliminar(){
 var lista=document.getElementById("mostrar")
    lista.removeChild(lista.children[0])
 }

