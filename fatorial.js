const fatorial = function (n){
    if(n == 1|| n == 0){
    return 1;
    }else{
    
       return n* fatorial(n-1)
  }
}
console.log(fatorial(0));
console.log(fatorial(1));
console.log(fatorial(2));
console.log(fatorial(3));
console.log(fatorial(4));
console.log(fatorial(5));
console.log(fatorial(6));
console.log(fatorial(7));
console.log(fatorial(8));
console.log(fatorial(9));
