var isSquare = function(n){
    if(n < 0){
      return false;
    } // fix me
    else if(n = 0){
      return true;
    }else {
      for(let i = 1;n>0;i+=2){
        n-=i;
        }
      if(n==0){
      return true;
      }
      else
        return false;
    }
  }
//  console.log(isSquare(-1));
//  console.log(isSquare(0)); 
 console.log(isSquare(3)); 
//  console.log(isSquare(4));
//  console.log(isSquare(25));
 console.log(isSquare(26));