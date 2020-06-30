const verificaTriangulos = function (a,b,c){

 if(a == b && b !==  c || a == c  && c !== b || b == c  && c !== a){
 console.log ('Esse triangulo é isoceles, pois apenas dois lados são iguais')
}

else if(a === b && b  === c){
    console.log ('Esse triangulo é equilatero pois todos os lados são iguais')
   }
else if(a !== b && b !==c ){
    console.log ('Esse triangulo é escaleno, pois nenhum dos lados são iguais')
}
}
verificaTriangulos(2,2,2) 
verificaTriangulos(2,2,1)
verificaTriangulos(1,2,3) 
verificaTriangulos(3,2,3) 
verificaTriangulos(3,3,3) 
verificaTriangulos(3,2,1)  

